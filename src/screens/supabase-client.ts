import { createClient } from "@supabase/supabase-js";

// 🔑 Replace these with your real Supabase project values
const SUPABASE_URL = "https://YOUR_PROJECT_ID.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_ANON_PUBLIC_KEY";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);