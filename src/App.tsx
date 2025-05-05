import AppRouter from "./routes/AppRouter";
import { Toaster } from "sonner";
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <div className="font-sans max-w-4xl mx-auto px-4">
      <NavBar />
      <AppRouter />
      <Toaster />
    </div>
  );
}

export default App;
