import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppState } from 'react-native'

const supabaseUrl = '<Your Supabse URL>'
const supabaseAnonKey = '<Your Supabase API keys>'

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
