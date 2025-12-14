// src/provider/sessionProvider.tsx

import { GlobalLoader } from "@/components/ui/globalLoader";
import { useProfileData } from "@/hooks/queries/useProfileData";
import { supabase } from "@/lib/supabase";
import { useIsSessionLoaded, useSession, useSetSession } from "@/store/session";
import { useEffect } from "react";

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const setSession = useSetSession();
  const isSessionLoaded = useIsSessionLoaded();
  const session = useSession();

  const { isLoading: isProfileLoading } = useProfileData(session?.user.id);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      subscription.unsubscribe(); // 컴포넌트 해제 시 구독 취소
    };
  }, [setSession]);

  // 1. 세션 자체가 아직 로딩 중이면 로더 표시
  if (!isSessionLoaded) return <GlobalLoader />;

  // 2. 로그인이 되어있고 && 프로필을 불러오는 중이면 로더 표시
  // (로그인이 안 된 상태라면 프로필 로딩을 기다릴 필요가 없음)
  if (session && isProfileLoading) return <GlobalLoader />;

  return <>{children}</>;
};
