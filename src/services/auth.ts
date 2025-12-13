// src/services/auth.ts
import { supabase } from "@/lib/supabase";
import type { Provider } from "@supabase/supabase-js";
export const signUp = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  // supabase 클라이언트 불러오기 (src/lip/supabase.ts)
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;
  return data;
};

export const signInWithPassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
};

export const signInWithOAuth = async (provider: Provider) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
  });

  if (error) throw error;
  return data;
};
