import AppRouter from "./routes/AppRouter";
import { Toaster } from "sonner";
import NavBar from "./components/layout/NavBar";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import AuthForm from "./components/AuthForm/AuthForm";

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authType, setAuthType] = useState<"login" | "register">("login");

  return (
    <div className="font-sans max-w-4xl mx-auto px-4 relative">
      <NavBar onAuthOpen={setAuthOpen} onAuthTypeChange={setAuthType} />
      <AppRouter />
      <Toaster />

      <Dialog.Root open={authOpen} onOpenChange={setAuthOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="radix-dialog-overlay z-[99]" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card p-6 rounded-xl max-w-md w-full shadow-xl focus:outline-none z-[100]">
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
