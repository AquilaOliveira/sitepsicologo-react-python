import { useState } from "react"
import CadastroAlert from "./pagesAssets/CadastroAlert";

export default function cadastroForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  }

  const handleCPF = (e) => {
    setCPF(e.target.value);
    setSubmitted(false);
  }

  const handleTel = (e) => {
    setTel(e.target.value);
    setSubmitted(false);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  }

  const handleSubmit= (e) => {
    e.preventDefault();
    if (name == "" || email == "" || CPF == "" || tel == "" || password == ""){
      setError(true);
    }else{
      setSubmitted(true);
      setError(false);
    }
  }

const successMessage = () => {
  return (
    <div className="success" style={{display: submitted ? "" : "none"}}>
      <CadastroAlert/>
    </div>
  )
}

const errorMessage = () => {
  return( 
    <>
    <div className="error" style={{display: error ? "" : "none"}}> 
      <p>Por favor, insira todos os campos.</p>
    </div>
    </>
  )
}

  return (
    <>
      <div className="form">
        <div>
          <h1>Cadastro</h1>  
        </div> 

        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>

        <form>

          <label className="label">Nome</label>
          <input onChange={handleName} className="input" value={name} type="text"/>
          <label className="label">Email</label>
          <input onChange={handleEmail} className="input" value={email} type="email"/>
          <label className="label">CPF</label>
          <input onChange={handleCPF} className="input" value={CPF} type="number"/>
          <label className="label">Telefone</label>
          <input onChange={handleTel} className="input" value={tel} type="text"/>
          <label className="label">Senha</label>
          <input onChange={handlePassword} className="input" value={password} type="password"/>

          <button onClick={handleSubmit} className="btn" type="submit">Cadastrar</button>

        </form>
      </div>
    </>
  );
}
