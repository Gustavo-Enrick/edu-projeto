import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ElementoContext = createContext(null);

export const ElementoProvider = ({ children }) => {
  const estruturaPadrao = {
    Receita: [],
    Assinatura: [],
    Investimento: [],
    Moradia: [],
    Saúde: [],
    Transporte: [],
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
  const editarElemento = (nomeCategoria, nomeElemento, novosDados) => {
    setElementosPorCategoria((prev) => ({
      ...prev,
      [nomeCategoria]: prev[nomeCategoria].map((el) =>
        el.nome === nomeElemento ? { ...el, ...novosDados } : el
      ),
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

  // Carrega um elemento por nome dentro de uma categoria
  const carregarElementoPorId = (nomeCategoria, id) => {
    const elemento = elementosPorCategoria[nomeCategoria].find(
      (el) => el.id === id
    );
    return elemento || null;
  };

  // Adicionar elemento para editar por id
  const editarElementoPorId = (nomeCategoria, id, novosDados) => {
    setElementosPorCategoria((prev) => ({
      ...prev,
      [nomeCategoria]: prev[nomeCategoria].map((el) =>
        el.id === id ? { ...el, ...novosDados } : el
      ),
    }));
  };

  // Remove um elemento por id
  const removerElementoDaCategoriaPorId = (nomeCategoria, idElemento) => {
    setElementosPorCategoria((prev) => ({
      ...prev,
      [nomeCategoria]: prev[nomeCategoria].filter((el) => el.id !== idElemento),
    }));
  };

  return (
    <ElementoContext.Provider
      value={{
        elementosPorCategoria,
        adicionarElementoNaCategoria,
        removerElementoDaCategoria,
        carregarElementoPorCategoria,
        carregarElementoPorId,
        editarElementoPorId,
        removerElementoDaCategoriaPorId,
        editarElemento,
        setElementosPorCategoria,
      }}
    >
      {children}
    </ElementoContext.Provider>
  );
};
