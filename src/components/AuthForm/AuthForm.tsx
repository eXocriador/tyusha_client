import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { login, register } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore";
import ButtonGoogle from "./ButtonGoogle";
import ButtonApple from "./ButtonApple";

type Props = {
  type: "login" | "register";
  onTypeChange: (type: "login" | "register") => void;
  onClose: () => void;
};

const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

const AuthForm = ({ type, onTypeChange, onClose }: Props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setToken } = useAuthStore();

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
        if (data.token) {
          setToken(data.token);
          toast.success("Успішний вхід!");
          onClose();
          navigate("/dashboard");
        } else {
          toast.error("Сервер не повернув токен");
        }
      } else {
        const data = await register(email, password);
        setToken(data.token);
        toast.success("Реєстрація успішна!");
        onClose();
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
        type="email"
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

      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        {type === "login" ? (
          <>
            Немає акаунту?{" "}
            <button
              type="button"
              onClick={() => onTypeChange("register")}
              className="underline hover:text-primary"
            >
              Зареєструватися
            </button>
          </>
        ) : (
          <>
            Вже є акаунт?{" "}
            <button
              type="button"
              onClick={() => onTypeChange("login")}
              className="underline hover:text-primary"
            >
              Увійти
            </button>
          </>
        )}
      </div>

      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        або продовжити через
      </div>
      <div className="flex flex-col gap-2">
        <ButtonGoogle
          onClick={() => {
            window.location.href =
              "https://tyusha-server.onrender.com/api/auth/google/login";
          }}
        />
        <ButtonApple onClick={() => toast("Apple auth ще не реалізовано")} />
      </div>
    </form>
  );
};

export default AuthForm;
