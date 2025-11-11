import { useEffect } from "react";
import { traduzirTextoDeepL } from "./services/Api";

function App() {
  useEffect(() => {
    async function testarTraducao() {
      const texto = await traduzirTextoDeepL("Hello, how are you?");
      console.log("Tradução de teste:", texto);
    }
    testarTraducao();
  }, []);

  return <div>Teste</div>;
}

export default App;
