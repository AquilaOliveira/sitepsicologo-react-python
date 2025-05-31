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

  function validarSenha() {
  const campo = document.getElementById("password");
  const valor = campo.value;
  const regex = /^[a-zA-Z0-9]+$/;

  regex.test(valor) ? campo.classList.remove("error") : console.log("Senha inválida");
  }

  const seta = <svg viewBox="0 0 15px 15px" width='25px' height='25px' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#ffffff"></path> </g></svg>

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

/*const mySwitch = document.getElementById('mySwitch');

mySwitch.addEventListener('change', () => {
  const isChecked = mySwitch.checked;
  console.log('Switch está marcado?', isChecked);

  if (isChecked) {
    // Código para executar quando o switch está ativado
    console.log('Switch está ativado');
  } else {
    // Código para executar quando o switch está desativado
    console.log('Switch está desativado');
  }
});*/

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
                <label className="switch" id="mySwitch">
                  <input type="checkbox" defaultChecked></input>
                  <span className="slider round"></span>
                </label>
                <div className="checkbox">
                  <input type="checkbox" id="aceitar" name="aceitar" required />
                  <label htmlFor="aceitar">Aceito os termos de uso</label>
                </div>
                <button onClick={handleSubmit} className="btn" type="submit">
                  <span className="seta">{seta}</span>Cadastrar
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
