// src/layouts/GuestOnlyLayout.tsx
import { useSession } from "@/store/session";
import { Navigate, Outlet } from "react-router";

export const GuestOnlyLayout = () => {
  const session = useSession();
  if (session) return <Navigate to={"/"} replace={true} />;

  return <Outlet />;
};
