import AppRouter from "./routes/AppRouter";
import { Toaster } from "sonner";
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <div className="font-sans">
      <NavBar />
      <AppRouter />
      <Toaster />
    </div>
  );
}

export default App;
