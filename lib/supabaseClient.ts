import { createClient } from '@supabase/supabase-js';

// Read your Supabase project URL and anon key from the environment
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create a reusable client instance
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
