import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";

const OAuthSuccess = () => {
  const navigate = useNavigate();
  const { setToken } = useAuthStore();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      setToken(token);
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [navigate, setToken]);

  return <p>Авторизація успішна... Перенаправляємо в кабінет</p>;
};

export default OAuthSuccess;
