import CadastroAlert from "./pagesAssets/CadastroAlert";
import "./Cadastro.css";
import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import seta from "../assets/icons/seta.ico";


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

  function validarSenha() {
  const campo = document.getElementById("password");
  const valor = campo.value;
  const regex = /^[a-zA-Z0-9]+$/;

  regex.test(valor) ? campo.classList.remove("error") : console.log("Senha inválida");
  }

  const successMessage = () => {
    return (
      <div className="success" style={{ display: submitted ? "" : "none" }}>
        <CadastroAlert name={name} />
      </div>
    )
  }

  const errorMessage = () => {
    return (
      <>
        <div className="error" style={{ display: error ? "" : "none" }}>
          <p>Por favor, insira todos os campos.</p>
        </div>
      </>
    )
  }

  return (
    <>
      <Header isLogin ></Header>
      <div className="containerCadastro">
        <div className="cadastro-body">
          <div className="formcadastro">
            <div className="title">
              <h1>Cadastro</h1>
            </div>
            <div className="messages">
              {errorMessage()}
              {successMessage()}
            </div>
            <div className="formWrapper">
              <form>
                <label className="label"></label>
                <input
                  required
                  maxLength="50"
                  onChange={handleName}
                  className="input"
                  value={name}
                  placeholder="Digite seu nome"
                  type="text"
                />
                <label className="label"></label>
                <input
                  required
                  maxLength="50"
                  onChange={handleEmail}
                  className="input"
                  value={email}
                  placeholder="Digite seu email"
                  type="email"
                />
                <label className="label"></label>
                <input
                  required
                  maxLength="11"
                  onChange={handleCPF}
                  className="input"
                  value={CPF}
                  placeholder="Digite seu CPF"
                  type="text"
                />
                <label className="label"></label>
                <input
                  required
                  maxLength="11"
                  onChange={handleTel}
                  className="input"
                  value={tel}
                  placeholder="Digite seu telefone"
                  type="text"
                />
                <label className="label"></label>
                <input
                  id="password"
                  required 
                  minLength="6"
                  maxLength="20"
                  onSubmit={validarSenha}
                  onChange={handlePassword}
                  className="input"
                  value={password}
                  placeholder="Digite sua senha"
                  type="password"
                />
                <input
                  className="input"
                  type="checkbox"
                />
                <div className="checkbox">
                  <input type="checkbox" id="aceitar" name="aceitar" required/>
                  <label htmlFor="aceitar">Aceito os termos de uso</label>
                </div>
                <button onClick={handleSubmit} className="btn" type="submit">
                  Cadastrar<img className="seta" src={seta} alt="Seta para a direita"/>
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
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
