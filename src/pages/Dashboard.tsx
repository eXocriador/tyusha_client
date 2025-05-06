import { useAuthStore } from "../hooks/useAuthStore";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { token, setToken } = useAuthStore();
  const navigate = useNavigate();

  // Тут пізніше підтягнемо реальні дані з бекенду:
  const user = {
    name: "Іван Петренко",
    email: "ivan.petrenko@example.com"
  };

  const logout = () => {
    setToken(null);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-4">
      <div className="bg-card p-8 rounded-lg shadow-lg max-w-md w-full space-y-4">
        <h2 className="text-2xl font-bold text-center">Ваш кабінет</h2>
        <p>
          <strong>Імʼя:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <div className="space-y-2">
          <Button variant="outline" className="w-full">
            Редагувати дані
          </Button>
          <Button variant="outline" className="w-full">
            Змінити пароль
          </Button>
        </div>
        <Button variant="destructive" onClick={logout} className="w-full">
          Вийти з облікового запису
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
