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
  const setToken = useAuthStore((state) => state.setToken);

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
      const data =
        type === "login"
          ? await login(email, password)
          : await register(email, password);

      console.log("TOKEN FROM SERVER:", data.token); // ДОДАТИ

      if (data.token) {
        setToken(data.token);
        toast.success(
          type === "login" ? "Успішний вхід!" : "Реєстрація успішна!"
        );
        onClose();
        navigate("/dashboard");
      } else {
        toast.error("Сервер не повернув токен");
      }
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "Сталася помилка. Спробуйте ще раз."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-3xl font-bold text-center" id="auth-description">
        {type === "login" ? "Вхід" : "Реєстрація"}
      </h2>

      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-12 text-base"
      />
      <Input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="h-12 text-base"
      />

      <Button
        type="submit"
        className="w-full h-12 text-lg font-semibold"
        disabled={isSubmitting}
      >
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
              className="underline home-auth-link"
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
              className="underline home-auth-link"
            >
              Увійти
            </button>
          </>
        )}
      </div>

      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        або продовжити через
      </div>

      <ButtonGoogle
        onClick={() =>
          (window.location.href =
            "https://tyusha-server.onrender.com/api/auth/google/login")
        }
      />
      <ButtonApple onClick={() => toast("Apple auth ще не реалізовано")} />
    </form>
  );
};

export default AuthForm;
