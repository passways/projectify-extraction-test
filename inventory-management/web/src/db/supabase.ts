import { createClient } from "@supabase/supabase-js";
import type { Database } from "../database";

export const supabase = createClient<Database>(
  import.meta.env.VITE_API_URL,
  import.meta.env.VITE_ANON_KEY,
);
