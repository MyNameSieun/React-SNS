// src/components/ui/globalLoader.tsx

import logo from "@/assets/logo.png";
export const GlobalLoader = () => {
  return (
    <div className="bg-muted flex min-h-screen w-screen flex-col items-center justify-center">
      <div className="mb-15 flex animate-bounce flex-col gap-4">
        <img src={logo} alt="로고" className="w-10" />
        <div className="text-2xl font-bold">SNS</div>
      </div>
    </div>
  );
};
