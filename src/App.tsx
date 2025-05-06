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
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 font-sans max-w-4xl mx-auto px-4">
        <NavBar onAuthOpen={setAuthOpen} onAuthTypeChange={setAuthType} />
        <AppRouter />
        <Toaster />
      </div>

      <Dialog.Root open={authOpen} onOpenChange={setAuthOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 backdrop-blur-sm bg-black/50 z-40 data-[state=open]:animate-fadeIn" />
          <Dialog.Content
            className="dialog-content"
            aria-describedby="auth-description"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
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
