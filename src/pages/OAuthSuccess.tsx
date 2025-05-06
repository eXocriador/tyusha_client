import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";
import { toast } from "sonner";

const OAuthSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { setToken } = useAuthStore();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      setToken(token);
      toast.success("Успішний вхід через Google!");
      navigate("/dashboard");
    } else {
      toast.error("Не вдалося авторизуватись через Google");
      navigate("/login");
    }
  }, [searchParams, setToken, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-lg">Авторизація через Google... Зачекайте...</p>
    </div>
  );
};

export default OAuthSuccess;
