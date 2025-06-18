import CadastroAlert from "./pagesAssets/CadastroAlert";
import "./Cadastro.css";
import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Seta from "../assets/icons/Seta";

export default function CadastroForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [isPsicologo, setIsPsicologo] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [registeredName, setRegisteredName] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handleCPF = (e) => {
    setCPF(e.target.value);
    setSubmitted(false);
  };

  const handleTel = (e) => {
    setTel(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const validarSenha = (senha) => /^[a-zA-Z0-9]+$/.test(senha);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !CPF || !tel || !password) {
      setError(true);
      return;
    }

    if (!validarSenha(password)) {
      alert("A senha deve conter apenas letras e números.");
      return;
    }

    const novoUsuario = {
      nome: name,
      email: email,
      senha: password,
      telefone: tel,
      cpf: CPF,
      tipo_usuario: isPsicologo ? "psicologo" : "paciente",
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

      setRegisteredName(name);
      setSubmitted(true);
      setError(false);
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

  return (
    <>
      <Header isLogin />
      <div className="containerCadastro">
        <div className="cadastro-body">
          <div className="formcadastro">
            <div className="title">
              <h1>Cadastro</h1>
            </div>

            {error && (
              <div className="error">
                <p>Por favor, insira todos os campos.</p>
              </div>
            )}

            {submitted ? (
              <div className="success">
                <CadastroAlert name={registeredName} />
              </div>
            ) : (
              <div className="formWrapper">
                <form>
                  <input
                    required
                    maxLength="50"
                    onChange={handleName}
                    className="input"
                    value={name}
                    placeholder="Digite seu nome"
                    type="text"
                  />
                  <input
                    required
                    maxLength="50"
                    onChange={handleEmail}
                    className="input"
                    value={email}
                    placeholder="Digite seu email"
                    type="email"
                  />
                  <input
                    required
                    maxLength="11"
                    onChange={handleCPF}
                    className="input"
                    value={CPF}
                    placeholder="Digite seu CPF"
                    type="text"
                  />
                  <input
                    required
                    maxLength="11"
                    onChange={handleTel}
                    className="input"
                    value={tel}
                    placeholder="Digite seu telefone"
                    type="text"
                  />
                  <input
                    id="password"
                    required
                    minLength="6"
                    maxLength="20"
                    onChange={handlePassword}
                    className="input"
                    value={password}
                    placeholder="Digite sua senha"
                    type="password"
                  />
                  <div className="checkbox checkbox-psicologo">
                    <label className="label-psicologo">
                      <input
                        type="checkbox"
                        className="input-psicologo"
                        checked={isPsicologo}
                        onChange={(e) => setIsPsicologo(e.target.checked)}
                      />
                      Sou psicólogo
                    </label>
                  </div>
                  <div className="checkbox">
                    <label htmlFor="aceitar" className="aceitar">
                      <input
                        type="checkbox"
                        id="aceitar"
                        name="aceitar"
                        required
                      />
                      <a
                        href="https://www.gov.br/governodigital/pt-br/privacidade-e-seguranca/ppsi/guia_termo_uso_politica_privacidade.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Aceito os termos de uso
                      </a>
                    </label>
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="btn botao-cadastro"
                    type="submit"
                  >
                    <Seta className="seta" />
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
            )}
          </div>
        </div>
      </div>
      <Footer isLogin />
    </>
  );
}
