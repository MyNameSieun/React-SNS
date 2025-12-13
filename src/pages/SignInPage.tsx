// src/pages/SignInPage.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignInWithPassword } from "@/hooks/mutations/useSignInWithPassword";
import { useState } from "react";
import { Link } from "react-router";
import gitHubLogo from "@/assets/github-mark.svg";
import { toast } from "sonner";
import { generateErrorMessage } from "@/lib/error";
import { useSignInWithOuth } from "@/hooks/mutations/useSignInWithOuth";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: signInWithOAuth, isPending: isSignInWithOAuthPending } =
    useSignInWithOuth({
      onError: (error) => {
        const message = generateErrorMessage(error);
        toast.error(message, {
          position: "top-center",
        });
      },
    });

  const { mutate: signInWithPassword, isPending: isSignInWithPasswordPending } =
    useSignInWithPassword({
      onError: (error) => {
        const message = generateErrorMessage(error);
        toast.error(message, {
          position: "top-center",
        });
        setPassword("");
      },
    });

  const pending = isSignInWithOAuthPending || isSignInWithPasswordPending;

  const handleSubmitSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim() === "") return;
    if (password.trim() === "") return;

    signInWithPassword({
      email,
      password,
    });
  };

  const handleSignInWithGitHubClick = () => {
    signInWithOAuth("github");
  };

  return (
    <main className="flex flex-col gap-5">
      <header className="text-xl font-bold">로그인</header>
      <form onSubmit={handleSubmitSignIn} className="flex flex-col gap-3">
        <Input
          disabled={pending}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="example@abc.com"
        />
        <Input
          disabled={pending}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="password"
        />

        <div className="flex flex-col gap-2">
          <Button disabled={pending} type="submit">
            로그인
          </Button>

          <Button
            disabled={pending}
            type="button"
            variant={"outline"}
            onClick={handleSignInWithGitHubClick}
          >
            <img src={gitHubLogo} alt="깃허브 로고" className="h-4 w-4" />
            GitHub 계정으로 로그인
          </Button>
        </div>

        <p className="text-muted-foreground mx-auto text-sm underline">
          <Link to={"/sign-up"}>계정이 없으신가요? 회원가입</Link>
        </p>
      </form>
    </main>
  );
};

export default SignInPage;
