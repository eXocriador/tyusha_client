import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { login, register } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore";
import { motion } from "framer-motion";
import ButtonGoogle from "./ButtonGoogle";
import ButtonApple from "./ButtonApple";

type Props = {
  type: "login" | "register";
};

const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

const AuthForm = ({ type }: Props) => {
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
          navigate("/dashboard");
        } else {
          toast.error("Сервер не повернув токен");
        }
      } else {
        const data = await register(email, password);
        setToken(data.token);
        toast.success("Реєстрація успішна!");
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
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 bg-card p-8 rounded-xl shadow-lg w-full max-w-md"
    >
      <h2 className="text-2xl font-semibold text-center mb-4">
        {type === "login" ? "Вхід" : "Реєстрація"}
      </h2>
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
      <Button
        type="submit"
        className="w-full text-white"
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

      <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
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
    </motion.form>
  );
};

export default AuthForm;
