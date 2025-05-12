import AuthModal from "../components/AuthModal";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <AuthModal />
    </div>
  );
}
