import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jxjxznljrrebdrrmzedn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4anh6bmxqcnJlYmRycm16ZWRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzODM0MDIsImV4cCI6MjAyMTk1OTQwMn0.LE315B_YE6PixvgmHi-dfZZfc0e7HlJmdOrAiSuBaHc'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;