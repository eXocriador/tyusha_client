import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Props = {
  type: "login" | "register";
};

const AuthForm = ({ type }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (type === "login") {
      console.log("Login", { email, password });
    } else {
      console.log("Register", { email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" className="w-full">
        {type === "login" ? "Увійти" : "Зареєструватися"}
      </Button>
      <div className="text-center text-sm text-gray-500 mt-2">
        або продовжити через
      </div>
      <div className="flex gap-2">
        <Button type="button" variant="outline" className="w-full">
          Google
        </Button>
        <Button type="button" variant="outline" className="w-full">
          Apple
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
