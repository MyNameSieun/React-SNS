// src/hooks/queries/useProfileData.ts

import { QUERY_KEYS } from "@/lib/keys.constant";
import { createProfile, fetchProfile } from "@/services/profile";
import { useSession } from "@/store/session";
import type { PostgrestError } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";

export const useProfileData = (userId?: string) => {
  const session = useSession();
  const isMine = userId === session?.user.id;

  return useQuery({
    queryKey: QUERY_KEYS.profile.byId(userId!),
    queryFn: async () => {
      try {
        // 프로필 데이터가 있다면
        const profile = await fetchProfile(userId!);
        return profile;
      } catch (error) {
        // 오류가 발생한다면
        // 프로필 데이터가 없어 발생하는 오류라면
        if (isMine && (error as PostgrestError).code === "PGRST116") {
          return await createProfile(userId!); // 새로운 프로필 생성
        }

        // 아니라면
        throw error;
      }
    },
    enabled: !!userId,
  });
};
