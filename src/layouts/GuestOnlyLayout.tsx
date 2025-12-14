// src/layouts/GuestOnlyLayout.tsx
import { useSession } from "@/store/secction";
import { Navigate, Outlet } from "react-router";

export const GuestOnlyLayout = () => {
  const session = useSession();
  if (session) return <Navigate to={"/"} replace={true} />;

  return <Outlet />;
};
