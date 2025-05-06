// Login.tsx
import AuthForm from "../components/AuthForm/AuthForm";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-muted">
      <AuthForm type="login" />
    </div>
  );
};

export default Login;
