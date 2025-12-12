import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignInWithPassword } from "@/hooks/mutations/useSignInWithPassword";
import { useSignUp } from "@/hooks/mutations/useSignUp";
import { useState } from "react";
import { Link } from "react-router";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: signInWithPassword } = useSignInWithPassword();

  const handleSubmitSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim() === "") return;
    if (password.trim() === "") return;

    signInWithPassword({
      email,
      password,
    });
  };

  return (
    <main className="flex flex-col gap-5">
      <header className="text-xl font-bold">로그인</header>
      <form onSubmit={handleSubmitSignIn} className="flex flex-col gap-3">
        <Input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="example@abc.com"
        />
        <Input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="password"
        />

        <Button type="submit">로그인</Button>

        <p className="text-muted-foreground mx-auto text-sm underline">
          <Link to={"/sign-up"}>계정이 없으신가요? 회원가입</Link>
        </p>
      </form>
    </main>
  );
};

export default SignInPage;
