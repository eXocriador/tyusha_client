import { useState, useEffect } from "react";
import { Toaster } from "sonner";
import NavBar from "./components/layout/NavBar";
import AppRouter from "./routes/AppRouter";
import AuthForm from "./components/AuthForm/AuthForm";
import * as Dialog from "@radix-ui/react-dialog";

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authType, setAuthType] = useState<"login" | "register">("login");

  // Блокуємо скрол, коли відкрита модалка
  useEffect(() => {
    document.body.style.overflow = authOpen ? "hidden" : "";
  }, [authOpen]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Контент */}
      <div className="relative z-10 font-sans max-w-4xl mx-auto px-4">
        <NavBar onAuthOpen={setAuthOpen} onAuthTypeChange={setAuthType} />
        <AppRouter />
        <Toaster />
      </div>

      {/* Модалка */}
      <Dialog.Root open={authOpen} onOpenChange={setAuthOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 backdrop-blur-md bg-black/50 data-[state=open]:animate-fadeIn z-40" />
          <Dialog.Content
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card p-6 rounded-xl max-w-md w-full shadow-xl z-50 focus:outline-none animate-fadeIn"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <Dialog.Title className="sr-only">
              {authType === "login" ? "Вхід" : "Реєстрація"}
            </Dialog.Title>
            <AuthForm
              type={authType}
              onTypeChange={setAuthType}
              onClose={() => setAuthOpen(false)}
            />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
