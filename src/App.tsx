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
      <div className="relative min-h-screen bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern z-0" />
        <div className="relative z-10 font-sans max-w-4xl mx-auto px-4">
          <NavBar onAuthOpen={setAuthOpen} onAuthTypeChange={setAuthType} />
          <AppRouter />
          <Toaster />
        </div>
      </div>

      <Dialog.Root open={authOpen} onOpenChange={setAuthOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 backdrop-blur-md bg-black/50 data-[state=open]:animate-fadeIn z-40" />
          <Dialog.Content
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card p-6 rounded-xl max-w-md w-full shadow-xl data-[state=open]:animate-fadeIn z-50"
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
    </>
  );
}

export default App;
