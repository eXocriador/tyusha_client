import { useState, useEffect } from "react";
import { Toaster } from "sonner";
import NavBar from "./components/layout/NavBar";
import AppRouter from "./routes/AppRouter";
import AuthForm from "./components/AuthForm/AuthForm";
import * as Dialog from "@radix-ui/react-dialog";

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authType, setAuthType] = useState<"login" | "register">("login");

  useEffect(() => {
    document.body.style.overflow = authOpen ? "hidden" : "";
  }, [authOpen]);

  return (
    <>
      <div className="relative min-h-screen font-sans">
        <NavBar onAuthOpen={setAuthOpen} onAuthTypeChange={setAuthType} />
        <AppRouter />
        <Toaster />
      </div>

      <Dialog.Root open={authOpen} onOpenChange={setAuthOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
          <Dialog.Content
            className="fixed inset-0 flex items-center justify-center z-50"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <div className="bg-card p-6 rounded-xl max-w-md w-full shadow-xl">
              <Dialog.Title className="sr-only">
                {authType === "login" ? "Вхід" : "Реєстрація"}
              </Dialog.Title>
              <AuthForm
                type={authType}
                onTypeChange={setAuthType}
                onClose={() => setAuthOpen(false)}
              />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export default App;
