import { useState } from "react";

function App() {
  const[nome, setNome] = useState('')
  const[email, setEmail] = useState('')
  const[idade, setIdade] = useState("")

  const[user , setUser] = useState({})

  function handleRegister(e){
    e.preventDefault()
    alert("Usuario cadastrado!")
    setUser({
      nome: nome,
      idade: idade,
      email: email,
    })
  }
  return (
    <div>
      <h1>Cadastrando Usuário</h1>
      <form onSubmit={handleRegister}>
        <label>Nome:</label><br/>
        <input 
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}>
        </input><br/>

        <label>E-mail:</label><br/>
        <input 
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}></input><br/>

        <label>Idade:</label><br/>
        <input 
        placeholder="Digite sua idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}>
        </input><br/>
        
        <button type="submit">Enviar</button>
      </form>
      <br/>
      <br/>

      <div>
        <span>Bem vindo: {user.nome}</span><br/>
        <span>Idade: {user.idade}</span><br/>
        <span>Email: {user.email}</span><br/>
      </div>

     
      
    </div>
  );
}

export default App;
