import { InfoProvider } from "./src/contexts/globalContext";
import Rotas from "./src/rotas";

export default function App() {
  return (
    <InfoProvider>
      <Rotas />
    </InfoProvider>

  );
}