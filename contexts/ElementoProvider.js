import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ElementoContext = createContext();

export const ElementoProvider = ({ children }) => {
  const estruturaPadrao = {
    Assinatura: [
      { nome: "Netflix", valor: 39.9, dataExpiracao: "15" },
      { nome: "Spotify", valor: 19.9, dataExpiracao: "15" },
    ],
    Investimento: [],
    Lazer: [],
    Mercado: [],
    Receita: [],
    Saúde: [],
    Transporte: [],
    Vestuário: [],
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
        setElementosPorCategoria,
      }}
    >
      {children}
    </ElementoContext.Provider>
  );
};
