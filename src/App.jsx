import { Calculadora } from "./components/Calculadora";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/Global.js";

export function App() {
  return (
    <>
      <Header />
      <Calculadora />
      <GlobalStyles />
    </>
  )
}