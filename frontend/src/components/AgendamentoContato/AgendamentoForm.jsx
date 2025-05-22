import React, { useState } from 'react';
import CalendarioInput from './CalendarioInput';
import './Agendamento.css'; 

const AgendamentoForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
    data: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, data: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
   
    window.location.reload();
  };

  return (
    <section id="contato" className="loeagen">
      <h2>Agendamento e Contato</h2>

      <form className="formagendamento" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="mensagem">Mensagem:</label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          required
        />

        <CalendarioInput
          selectedDate={formData.data}
          onChange={handleDateChange}
        />

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default AgendamentoForm;
