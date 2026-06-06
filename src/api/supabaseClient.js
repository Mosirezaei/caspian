import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ewwsderkcbrvjavndkff.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3d3NkZXJrY2Jydmphdm5ka2ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3NjcwNjQsImV4cCI6MjA5NjM0MzA2NH0.fWeaD0IU5j7FbEnBuBNQKC_MyDIvaiirX5Ik5TObhyY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
