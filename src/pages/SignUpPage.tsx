import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignUp } from "@/hooks/mutations/useSignUp";
import { useState } from "react";
import { Link } from "react-router";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: signup } = useSignUp();

  const handleSubmitSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.trim() === "") return;
    if (password.trim() === "") return;

    signup({ email, password });
  };

  return (
    <main className="flex flex-col gap-5">
      <header className="text-xl font-bold">회원가입</header>
      <form onSubmit={handleSubmitSignup} className="flex flex-col gap-3">
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

        <Button type="submit">회원가입</Button>

        <p className="text-muted-foreground mx-auto text-sm underline">
          <Link to={"/sign-in"}>이미 계정이 있다면? 로그인</Link>
        </p>
      </form>
    </main>
  );
};

export default SignUpPage;
