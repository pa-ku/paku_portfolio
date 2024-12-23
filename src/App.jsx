import { LangProvider } from "./context/LangContext";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <LangProvider>
        <Home></Home>
      </LangProvider>
    </>
  )
}