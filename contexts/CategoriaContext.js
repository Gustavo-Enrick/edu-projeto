import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CategoriaContext = createContext();

export const CategoriaProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

  const categoriasPadrao = [
    { categoria: "Receita", cor: "#7ED321", valorTotal: 2000, ativo: true }, //Sempre ficará true
    { categoria: "Assinatura", cor: "#4A90E2", valorTotal: 80, ativo: true },
    { categoria: "Investimento", cor: "#F93535", valorTotal: 220, ativo: true },
    { categoria: "Lazer", cor: "#BD10E0", valorTotal: 120, ativo: true },
    { categoria: "Mercado", cor: "#50E3C2", valorTotal: 600, ativo: true },
    { categoria: "Saúde", cor: "#AAA130", valorTotal: 100, ativo: true },
    { categoria: "Transporte", cor: "#7300D9", valorTotal: 260, ativo: true },
    { categoria: "Vestuário", cor: "#4B1212", valorTotal: 400, ativo: true },
  ];

  // Carrega do AsyncStorage ao iniciar
  useEffect(() => {
    const carregarCategorias = async () => {
      const json = await AsyncStorage.getItem("@categorias");

      try {
        if (JSON.parse(json).categorias.length > 0) {
          setCategorias(JSON.parse(json).categorias);
        } else {
          setCategorias(categoriasPadrao);
          await AsyncStorage.setItem(
            "@categorias",
            JSON.stringify({ categorias: categoriasPadrao })
          );
        }
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      }

      // setCategorias(categoriasPadrao);
      // await AsyncStorage.setItem(
      //   "@categorias",
      //   JSON.stringify({ categorias: categoriasPadrao })
      // );
    };

    carregarCategorias();
  }, []);

  // Salva no AsyncStorage toda vez que as categorias mudarem
  useEffect(() => {
    const salvarCategorias = async () => {
      try {
        const json = JSON.stringify({ categorias });
        await AsyncStorage.setItem("@categorias", json);
      } catch (error) {
        console.error("Erro ao salvar categorias:", error);
      }
    };

    salvarCategorias();
  }, [categorias]);

  const atualizarCategoria = (nome, novosDados) => {
    setCategorias((prev) =>
      prev.map((cat) =>
        cat.categoria === nome ? { ...cat, ...novosDados } : cat
      )
    );
  };

  return (
    <CategoriaContext.Provider
      value={{
        categorias,
        atualizarCategoria,
      }}
    >
      {children}
    </CategoriaContext.Provider>
  );
};
