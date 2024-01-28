import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppState } from 'react-native'

const supabaseUrl = 'https://jxjxznljrrebdrrmzedn.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4anh6bmxqcnJlYmRycm16ZWRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzODM0MDIsImV4cCI6MjAyMTk1OTQwMn0.LE315B_YE6PixvgmHi-dfZZfc0e7HlJmdOrAiSuBaHc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
})

AppState.addEventListener('change', (state) => {
    if (state === 'active') supabase.auth.startAutoRefresh().then(() => console.log('auth start'))
    else supabase.auth.stopAutoRefresh().then(() => console.log('auth stop'))
})

export default supabase;
