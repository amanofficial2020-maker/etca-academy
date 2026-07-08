import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fblduwvtozbhryzamsvl.supabase.co'

const supabaseKey = 'sb_publishable_r1oUvdLo5H66WCy2iVa0Nw_PysLcCuc'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)