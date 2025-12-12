import { supabase } from "@/lib/supabase";
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

  if (error) {
    console.error(error.message);
    throw error;
  }
  return data;
};

export const signInWithPassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  // 수퍼베이스 클라이언트활용해 로그인 요청

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error.message);
    throw error;
  }
  return data;
};
