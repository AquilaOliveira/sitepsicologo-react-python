import React from 'react';
import AgendamentoForm from './AgendamentoForm';
import LocalSection from '../LocalSection/LocalSection'; 
import './Agendamento.css'


const AgendamentoContato = () => {
  return (
    <div id="localeagendamento">
      <AgendamentoForm />
      <LocalSection />
    </div>
    
  );
};

export default AgendamentoContato;
