// src/services/profile.ts
import { getRandomNickname } from "@/lib/getRandomNickname";
import { supabase } from "@/lib/supabase";

export const fetchProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from("profile")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) throw error;
  return data;
};

// 프로필 생성
export const createProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from("profile")
    .insert({
      id: userId,
      nickname: getRandomNickname(),
    })
    .select()
    .single();
  if (error) throw error;
  return data;
};
