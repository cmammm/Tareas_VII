//import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseClient = supabase.createClient('https://tqtcyphinjsqxuadxtwj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxdGN5cGhpbmpzcXh1YWR4dHdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5MDE0MzUsImV4cCI6MjA3NzQ3NzQzNX0.MlgyjJM67TvOaDnL0V_As3IpZ8EkoofQBNa8jrEkp3E')

console.log(supabaseClient)
