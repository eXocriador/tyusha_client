import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { login, register } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore";

type Props = {
  type: "login" | "register";
};

// Мінімальна перевірка email по паттерну
const isValidEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const AuthForm = ({ type }: Props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { setToken } = useAuthStore(); // <<< ВАЖЛИВО!

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

        if (data.token) {
          setToken(data.token);
          navigate("/dashboard"); // <<< БЕЗ ЦЬОГО НЕ ПРАЦЮЄ!
          toast.success("Успішний вхід!");
          navigate("/dashboard");
        } else {
          toast.error("Сервер не повернув токен");
        }
      } else {
        const data = await register(email, password);
        setToken(data.token); // одразу зберігаємо токен
        navigate("/dashboard");
      }
    } catch (error: any) {
      console.error("Помилка:", error);
      toast.error(
        error?.response?.data?.message || "Сталася помилка. Спробуйте ще раз."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
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
