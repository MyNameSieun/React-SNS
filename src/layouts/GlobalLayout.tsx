// src/layout/GlobalLayout.tsx
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const GlobalLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="m-auto w-full max-w-[700px] flex-1 border-x px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default GlobalLayout;
