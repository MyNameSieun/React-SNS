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

// 인증 메일 요청
export const requestPasswordResetEmail = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${import.meta.env.VITE_PUBLIC_URL}/reset-password`, // 비밀번호를 재설정하는 페이지 주소
  });
  if (error) throw error;
  return data;
};

// 비밀번호 업데이트
export const updatePassword = async (password: string) => {
  const { data, error } = await supabase.auth.updateUser({
    password,
  });
  if (error) throw error;
  return data;
};
