import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignUp } from "@/hooks/mutations/useSignUp";
import { generateErrorMessage } from "@/lib/error";
import { useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: signup, isPending: isSignUpPending } = useSignUp({
    onError: (error) => {
      const message = generateErrorMessage(error);
      toast.error(message, {
        position: "top-center",
      });
    },
  });

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
          disabled={isSignUpPending}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="example@abc.com"
        />
        <Input
          disabled={isSignUpPending}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="password"
        />

        <Button disabled={isSignUpPending} type="submit">
          회원가입
        </Button>

        <p className="text-muted-foreground mx-auto text-sm underline">
          <Link to={"/sign-in"}>이미 계정이 있다면? 로그인</Link>
        </p>
      </form>
    </main>
  );
};

export default SignUpPage;
