import { useState } from 'react'
import './App.css'

function App() {

  const [contador, setContador] = useState(0);
  const [mensagem, setMensagem] = useState("");

  const incrementar = () => {

    if (contador >= 30){
      setMensagem("Você chegou em 30 cliques, parabéns!");
      return;
    }

    const novoValor = contador + 1
    setContador(novoValor);

    if (novoValor >= 0 && novoValor <= 10){
      setMensagem("Você está longe de chegar aos 30");
    } 
    else if (novoValor > 10 && novoValor < 20){
      setMensagem("Está quase lá!");
    } 
    else if (novoValor >= 20 && novoValor < 30){
      setMensagem("Falta pouco, você consegue!");
    }
  }

  const resetar = () => {
      setContador(0);
      setMensagem(""); 
  }
  return(
    <div data-testid="contadora-componente">
      {/* Implemente a lógica*/}
      <h1>Contador: {contador} </h1>
      <h3>{mensagem}</h3>

      <button onClick={incrementar}>Incrementar</button>
      <button onClick={resetar}>Resetar</button>
    </div>
  )
}

export default App
