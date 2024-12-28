import { LangProvider } from "./context/LangContext";
import { ModalProvider } from "./context/ModalContext";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <LangProvider>
        <ModalProvider>
          <Home></Home>
        </ModalProvider>
      </LangProvider>
    </>
  );
}
