import { createClient } from "@supabase/supabase-js";


const rawUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  process.env.SUPABASE_URL ||
  "https://iebqghcuijyrxdroonll.supabase.co";

const supabaseUrl = rawUrl.trim().replace(/\/+$/, "");

const supabaseAnonKey = (
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  ""
).trim();

export const supabaseServer = createClient(supabaseUrl, supabaseAnonKey);