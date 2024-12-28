import { createContext, useContext } from "react";
import useLocalStorage from "use-local-storage";

export const LangContext = createContext();

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang debe estar dentro de un provider");
  }
  return context;
}

export function LangProvider({ children }) {
  const [spanish, setSpanish] = useLocalStorage("lang", true);

  return (
    <LangContext.Provider value={{ spanish, setSpanish }}>
      {children}
    </LangContext.Provider>
  );
}
