// src/shared/Router.tsx

import GlobalLayout from "@/layouts/GlobalLayout";
import { GuestOnlyLayout } from "@/layouts/GuestOnlyLayout";
import { MemberOnlyLayout } from "@/layouts/MemberOnlyLayout";
import ForgetPasswordPage from "@/pages/ForgetPasswordPage";
import IndexPage from "@/pages/IndexPage";
import PostDetailPage from "@/pages/PostDetailPage";
import ProfileDetailPage from "@/pages/ProfileDetailPage";
import ResetPasswordPage from "@/pages/ResetPasswordPage";
import SignInPage from "@/pages/SignInPage";
import SignUpPage from "@/pages/SignUpPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          {/* 비로그인 전용 */}
          <Route element={<GuestOnlyLayout />}>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/forget-password" element={<ForgetPasswordPage />} />
          </Route>

          {/* 로그인 필수 */}
          <Route element={<MemberOnlyLayout />}>
            <Route path="/" element={<IndexPage />} />
            <Route path="/post/:postId" element={<PostDetailPage />} />
            <Route path="/profile/:userId" element={<ProfileDetailPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
