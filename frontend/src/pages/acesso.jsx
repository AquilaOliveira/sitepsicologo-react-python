import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AgendamentoCard from "../pages/pagesAssets/AgendamentoCard"; 
import "./Acesso.css";

function Acesso() {
  const agendamentos = [
    {
      data: "18/04/2025",
      hora: "15:00",
      nomePaciente: "maisa ferreira",
      psicologa: "Letícia Dias",
    },
    {
      data: "27/04/2025",
      hora: "15:00",
      nomePaciente: "maisa ferreira",
      psicologa: "Letícia Dias",
    },
    
  ];

  const handleCancelar = (index) => {
    alert(`Cancelando sessão ${index + 1}...`);
  };

  return (
    <>
      <Header isLogin={true} />
      <main className="acesso-container">
        <h1>Próximos agendamentos</h1>
        <div style={containerStyle}>
          {agendamentos.map((item, index) => (
            <AgendamentoCard
              key={index}
              data={item.data}
              hora={item.hora}
              nomePaciente={item.nomePaciente}
              psicologa={item.psicologa}
              onCancelar={() => handleCancelar(index)}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
  marginTop: "30px"
};

export default Acesso;
