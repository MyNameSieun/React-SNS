// src/layouts/MemberOnlyLayout.tsx
import { useSession } from "@/store/secction";
import { Navigate, Outlet } from "react-router";

export const MemberOnlyLayout = () => {
  const session = useSession();
  if (!session) return <Navigate to={"/sign-in"} replace={true} />;

  return <Outlet />;
};
