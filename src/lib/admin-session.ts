const SESSION_DURATION_SECONDS = 60 * 60 * 2;
const SESSION_COOKIE_NAME = "admin_session";
const textEncoder = new TextEncoder();

function getSessionSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret || textEncoder.encode(secret).byteLength < 32) {
    throw new Error("ADMIN_SESSION_SECRET deve ter pelo menos 32 bytes.");
  }

  return secret;
}

function encodeBase64Url(bytes: Uint8Array) {
  let binary = "";

  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function decodeBase64Url(value: string) {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
  const binary = atob(padded);

  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

async function getSigningKey() {
  return crypto.subtle.importKey(
    "raw",
    textEncoder.encode(getSessionSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function createAdminSessionToken() {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS;
  const payload = encodeBase64Url(
    textEncoder.encode(JSON.stringify({ sub: "admin", exp: expiresAt }))
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    await getSigningKey(),
    textEncoder.encode(payload)
  );

  return `${payload}.${encodeBase64Url(new Uint8Array(signature))}`;
}

export async function isAdminSessionValid(token: string | undefined) {
  if (!token) {
    return false;
  }

  const [payload, encodedSignature, ...extraParts] = token.split(".");
  if (!payload || !encodedSignature || extraParts.length > 0) {
    return false;
  }

  const signingKey = await getSigningKey();

  try {
    const signatureIsValid = await crypto.subtle.verify(
      "HMAC",
      signingKey,
      decodeBase64Url(encodedSignature),
      textEncoder.encode(payload)
    );

    if (!signatureIsValid) {
      return false;
    }

    const session = JSON.parse(
      new TextDecoder().decode(decodeBase64Url(payload))
    ) as { sub?: unknown; exp?: unknown };

    return (
      session.sub === "admin" &&
      typeof session.exp === "number" &&
      Number.isSafeInteger(session.exp) &&
      session.exp > Math.floor(Date.now() / 1000)
    );
  } catch {
    return false;
  }
}

export { SESSION_COOKIE_NAME, SESSION_DURATION_SECONDS };
