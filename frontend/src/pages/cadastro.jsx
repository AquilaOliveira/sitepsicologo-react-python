import CadastroAlert from "./pagesAssets/CadastroAlert";
import "./Cadastro.css";
import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function CadastroForm() {

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      CPF === "" ||
      tel === "" ||
      password === ""
    ) {
      setError(true);
      return;
    }

    const novoUsuario = {
      nome: name,
      email: email,
      senha: password,
      telefone: tel,
      cpf: CPF,
      tipo_usuario: "paciente", 
    };

    try {
      const response = await fetch("http://localhost:5000/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoUsuario),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.erro || "Erro ao cadastrar");
      }

      setSubmitted(true);
      setError(false);
      alert(data.mensagem || "Usuário cadastrado com sucesso");

      // Limpar os campos
      setName("");
      setEmail("");
      setCPF("");
      setTel("");
      setPassword("");
    } catch (err) {
      alert(err.message);
      setError(true);
      setSubmitted(false);
    }
  };
  

const successMessage = () => {
  return (
    <div className="success" style={{display: submitted ? "" : "none"}}>
      <CadastroAlert name = {name}/>
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
      <Header isLogin ></Header>
      <div className="cadastro-body">
        <div className="formcadastro">
          <div className="title">
            <h1>Cadastro</h1>
          </div>
          <div className="messages">
            {errorMessage()}
            {successMessage()}
          </div>
          <form>
            <label className="label">Nome:</label>
            <input
              onChange={handleName}
              className="input"
              value={name}
              type="text"
            />
            <label className="label">Email:</label>
            <input
              onChange={handleEmail}
              className="input"
              value={email}
              type="email"
            />
            <label className="label">CPF:</label>
            <input
              onChange={handleCPF}
              className="input"
              value={CPF}
              type="text"
            />
            <label className="label">Telefone:</label>
            <input
              onChange={handleTel}
              className="input"
              value={tel}
              type="text"
            />
            <label className="label">Senha:</label>
            <input
              onChange={handlePassword}
              className="input"
              value={password}
              type="password"
            />
            <button onClick={handleSubmit} className="btn" type="submit">
              Cadastrar
            </button>
            <div className="cadastrado">
              <p>Já tem o cadastro?</p>
              <a href="/login" className="link">
                Entre aqui
              </a>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
