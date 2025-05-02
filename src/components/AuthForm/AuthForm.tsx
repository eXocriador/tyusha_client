import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { login, register } from "../../api/auth";

type Props = {
  type: "login" | "register";
};

// Мінімальна перевірка email по паттерну
const isValidEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const AuthForm = ({ type }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Введіть email та пароль");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Введіть коректний email");
      return;
    }

    try {
      setIsSubmitting(true);

      if (type === "login") {
        const data = await login(email, password);
        console.log("Login успішний", data);
        toast.success("Успішний вхід!");
      } else {
        const data = await register(email, password);
        console.log("Реєстрація успішна", data);
        toast.success("Успішна реєстрація!");
      }
    } catch (error) {
      toast.error("Сталася помилка. Спробуйте ще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text" // важливо: щоб браузер не виводив своє повідомлення
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting
          ? type === "login"
            ? "Входимо..."
            : "Реєструємо..."
          : type === "login"
          ? "Увійти"
          : "Зареєструватися"}
      </Button>

      <div className="text-center text-sm text-gray-500 mt-2">
        або продовжити через
      </div>

      <div className="flex gap-2">
        <Button
          type="button"
          className="w-full"
          variant="outline"
          onClick={() => toast("Google auth ще не реалізовано")}
        >
          Google
        </Button>
        <Button
          type="button"
          className="w-full"
          variant="outline"
          onClick={() => toast("Apple auth ще не реалізовано")}
        >
          Apple
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
