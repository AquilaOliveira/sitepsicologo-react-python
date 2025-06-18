import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function CadastroAlert({ name }) {
  const [show] = useState(true);
  const navigate = useNavigate();

  if (!show) return null;

  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <Alert show={show} variant="success">
      <Alert.Heading>Cadastro realizado com sucesso!</Alert.Heading>
      <p>
        Olá {name}, seu cadastro foi realizado com sucesso. Para continuar, clique no botão abaixo para ir para a página de login.
      </p>
      <div className="d-flex justify-content-end">
        <Button variant="outline-success" size="sm" onClick={handleGoToLogin}>
          Login
        </Button>
      </div>
    </Alert>
  );
}

export default CadastroAlert;
