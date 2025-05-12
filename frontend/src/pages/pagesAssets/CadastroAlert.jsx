import React from "react";
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import {name} from './Cadastro'

function CadastroAlert(props) {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Cadastro realizado com sucesso!</Alert.Heading>
        <p>
          Olá {name}, seu cadastro foi realizado com sucesso, para continuar, acesse a página de login.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Fechar
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Mostrar alerta.</Button>}
    </>
  );
}

export default CadastroAlert;