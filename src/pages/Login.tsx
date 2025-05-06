import AuthForm from "../components/AuthForm/AuthForm";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <div className="w-96 p-8 rounded-lg shadow-md border border-border bg-card">
        <AuthForm type="login" />
      </div>
    </div>
  );
};

export default Login;
