// src/provider/sessionProvider.tsx

import { GlobalLoader } from "@/components/ui/globalLoader";
import { supabase } from "@/lib/supabase";
import { useIsSessionLoaded, useSetSession } from "@/store/secction";
import { useEffect } from "react";

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const setSession = useSetSession();
  const isSessionLoaded = useIsSessionLoaded(); // 세션 로딩 유무 보관

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  if (!isSessionLoaded) return <GlobalLoader />;
  return children;
};
