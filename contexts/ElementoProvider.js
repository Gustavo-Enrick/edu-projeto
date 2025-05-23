import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ElementoContext = createContext(null);

export const ElementoProvider = ({ children }) => {
  const estruturaPadrao = {
    Assinatura: [
      { nome: "Netflix", valor: 39.9, dataExpiracao: "15" },
      { nome: "Spotify", valor: 19.9, dataExpiracao: "15" },
    ],
    Investimento: [
      { nome: "Ações XYZ", valor: 500.0, dataExpiracao: "15" },
      { nome: "Fundo Imobiliário ABC", valor: 1000.0, dataExpiracao: "15" },
    ],
    Lazer: [
      { nome: "Cinema", valor: 50.0, dataExpiracao: "22" },
      { nome: "Viagem", valor: 1200.0, dataExpiracao: "15" },
    ],
    Mercado: [
      { nome: "Compras do mês", valor: 400.0, dataExpiracao: "30" },
      { nome: "Frutas e verduras", valor: 150.0, dataExpiracao: "7" },
    ],
    Receita: [
      { nome: "Salário", valor: 5000.0, dataExpiracao: "5" },
      { nome: "Freelance", valor: 1200.0, dataExpiracao: "10" },
    ],
    Saúde: [
      { nome: "Plano de saúde", valor: 300.0, dataExpiracao: "28" },
      { nome: "Medicamentos", valor: 120.0, dataExpiracao: "15" },
    ],
    Transporte: [
      { nome: "Combustível", valor: 250.0, dataExpiracao: "15" },
      { nome: "Transporte público", valor: 200.0, dataExpiracao: "30" },
    ],
    Vestuário: [
      { nome: "Tênis esportivo", valor: 299.9, dataExpiracao: "15" },
      { nome: "Camisa social", valor: 149.9, dataExpiracao: "15" },
    ],
  };

  const [elementosPorCategoria, setElementosPorCategoria] =
    useState(estruturaPadrao);

  // Carrega do AsyncStorage ao iniciar
  useEffect(() => {
    const carregarElemento = async () => {
      try {
        const json = await AsyncStorage.getItem("@elementos");
        if (json) {
          setElementosPorCategoria(JSON.parse(json));
        } else {
          setElementosPorCategoria(estruturaPadrao);
          await AsyncStorage.setItem(
            "@elementos",
            JSON.stringify(estruturaPadrao)
          );
        }
      } catch (error) {
        console.error("Erro ao carregar elementos:", error);
      }
    };

    carregarElemento();
  }, []);

  // Salva no AsyncStorage toda vez que os elementos mudarem
  useEffect(() => {
    const salvarElementos = async () => {
      try {
        const json = JSON.stringify(elementosPorCategoria);
        await AsyncStorage.setItem("@elementos", json);
      } catch (error) {
        console.error("Erro ao salvar elementos:", error);
      }
    };

    salvarElementos();
  }, [elementosPorCategoria]);

  // Adiciona ou atualiza uma entrada em uma categoria
  const adicionarElementoNaCategoria = (nomeCategoria, novoElemento) => {
    setElementosPorCategoria((prev) => ({
      ...prev,
      [nomeCategoria]: [...prev[nomeCategoria], novoElemento],
    }));
  };

  // Carrega um elemento por nome dentro de uma categoria
  const carregarElementoPorCategoria = (nomeCategoria, nomeElemento) => {
    const elemento = elementosPorCategoria[nomeCategoria].find(
      (el) => el.nome === nomeElemento
    );
    return elemento || null;
  };

  // Adicionar elemento para editar

  // Remove um elemento por nome
  const removerElementoDaCategoria = (nomeCategoria, nomeElemento) => {
    setElementosPorCategoria((prev) => ({
      ...prev,
      [nomeCategoria]: prev[nomeCategoria].filter(
        (el) => el.nome !== nomeElemento
      ),
    }));
  };

  return (
    <ElementoContext.Provider
      value={{
        elementosPorCategoria,
        adicionarElementoNaCategoria,
        removerElementoDaCategoria,
        carregarElementoPorCategoria,
        setElementosPorCategoria,
      }}
    >
      {children}
    </ElementoContext.Provider>
  );
};
