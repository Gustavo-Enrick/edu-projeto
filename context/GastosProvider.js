import React, { createContext, useState, useEffect } from "react";
import AsyncStore from "./Store/AsyncStore";

export const GastosContext = createContext();

export function GastosProvider({ children }) {
  const [gastos, setGastos] = useState([]);
  const store = new AsyncStore();

  // Carrega os gastos do armazenamento
  const loadGastos = async () => {
    const dados = (await store.getItem("gastos")) || [];
    setGastos(dados);
  };

  // Adiciona um gasto novo e persiste
  const addGasto = async (novoGasto) => {
    const atualizado = [...gastos, novoGasto];
    setGastos(atualizado);
    await store.setItem("gastos", atualizado);
  };

  // Na montagem, carrega de cara
  useEffect(() => {
    loadGastos();
  }, []);

  return (
    <GastosContext.Provider value={{ gastos, loadGastos, addGasto }}>
      {children}
    </GastosContext.Provider>
  );
}
