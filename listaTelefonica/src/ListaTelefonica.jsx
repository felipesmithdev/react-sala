import { useState } from 'react'
import './App.css'

function App() {

  const [pessoas, setPessoas] = useState([
      {
        nome: "Felipe",
        sobrenome: "Barbosa",
        telefone: "11914044692"
      }
    ])

  const [pessoaDigitada, setPessoaDigitada] = useState(
    {
      nome: "",
      sobrenome: "",
      telefone: "9999"
    }
  )

  function adicionarPessoa(){
    const copyPessoas = [
      ...pessoas,
      {
        nome: pessoaDigitada.nome,
        sobrenome: pessoaDigitada.sobrenome,
        telefone: pessoaDigitada.telefone
      }
    ]
    setPessoas(copyPessoas)
  }

  function atualizarCampo(campo, valor){
    const copyPessoaDigitada = {
      ...pessoaDigitada,
      [campo]: valor
    }
    setPessoaDigitada(copyPessoaDigitada)
  }

  function remover(indice){
    const copyPessoas = pessoas.filter(
      (_element, indiceElemento) => indiceElemento != indice
    )
    setPessoas(copyPessoas)
  }

  return (
    <div>
      <h1>Lista Telefônica</h1>

      {/* <label htmlFor="">Nome</label> <br /> */}
      <input type="text" onChange={(evento) => atualizarCampo("nome", evento.target.value)} name="nome" placeholder="Nome" />
      <input type="text" onChange={(evento) => atualizarCampo("sobrenome", evento.target.value)} name="sobrenome" placeholder="Sobrenome" />
      <input type="text" onChange={(evento) => atualizarCampo("telefone", evento.target.value)} name="telefone" placeholder="Telefone" />

      <button onClick={adicionarPessoa}>Cadastrar</button>

      <ul>
        {pessoas.map((pessoa, indice) => (
          <li data-testid="contato-item">
            Nome do contato: {pessoa.nome} Sobrenome do contato: {pessoa.sobrenome} Telefone do contato: {pessoa.telefone}
            <button onClick={() => remover(indice)} data-testid="excluir-contato">Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
