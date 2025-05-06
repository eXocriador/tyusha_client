import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";

const OAuthSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const setToken = useAuthStore((state) => state.setToken);

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      setToken(token);
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [searchParams, setToken, navigate]);

  return null;
};

export default OAuthSuccess;
