import { createClient } from '@supabase/supabase-js'

const URL = "https://xbtijiiegbpimywnokqy.supabase.co"
const API_KEY = "sb_publishable_4uQooluLloNv6iJMsUUDIQ_0uCtITKZ" 

export const supabase = createClient(URL, API_KEY);