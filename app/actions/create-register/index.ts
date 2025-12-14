"use server";

import { supabase } from "@/lib/supabase/supabase-client";


export const createUser = async (payload: any) =>
  await supabase.from('users').insert(payload)
