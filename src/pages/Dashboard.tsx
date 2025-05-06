import { useAuthStore } from "../hooks/useAuthStore";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { token, setToken } = useAuthStore();
  const navigate = useNavigate();

  const logout = () => {
    setToken(null);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-center">
      <h1 className="text-3xl font-semibold">Ваш кабінет</h1>
      <p>Ви увійшли з токеном: {token ? token : "немає токена"}</p>
      <Button variant="destructive" onClick={logout}>
        Вийти
      </Button>
    </div>
  );
};

export default Dashboard;
