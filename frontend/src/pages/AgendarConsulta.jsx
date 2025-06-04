import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AgendamentoForm from "../components/AgendamentoContato/AgendamentoForm";

const AgendarConsulta = () => {
  return (
    <>
      <Header isLogin={true} />
      <main>
        <AgendamentoForm />
      </main>
      <Footer />
    </>
  );
};

export default AgendarConsulta;
