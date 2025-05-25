import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CategoriaContext = createContext();

export const CategoriaProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

  const categoriasPadrao = [
    {
      categoria: "Receita",
      cor: "#7ED321",
      valorTotal: 2000,
      ativo: true,
      descricao: "Receitas mensais, como salário, freelas, etc.",
    },
    {
      categoria: "Assinatura",
      cor: "#4A90E2",
      valorTotal: 80,
      ativo: true,
      descricao: "Despesas com assinaturas, como Netflix, Spotify, etc.",
    },
    {
      categoria: "Investimento",
      cor: "#F93535",
      valorTotal: 220,
      ativo: true,
      descricao: "Despesas com investimentos, como ações, fundos, etc.",
    },
    {
      categoria: "Lazer",
      cor: "#BD10E0",
      valorTotal: 120,
      ativo: true,
      descricao: "Despesas com lazer, como cinema, shows, etc.",
    },
    {
      categoria: "Mercado",
      cor: "#AAA130",
      valorTotal: 600,
      ativo: true,
      descricao: "Despesas com supermercado e compras de mercado.",
    },
    {
      categoria: "Saúde",
      cor: "#50E3C2",
      valorTotal: 100,
      ativo: true,
      descricao: "Despesas com saúde, como consultas médicas, medicamentos, etc.",
    },
    {
      categoria: "Transporte",
      cor: "#7300D9",
      valorTotal: 260,
      ativo: true,
      descricao: "Veja aqui as despesas com transporte, como aplicativo de transporte, ônibus, táxis, etc.",
    },
    {
      categoria: "Vestuário",
      cor: "#4B1212",
      valorTotal: 400,
      ativo: true,
      descricao: "Despesas com roupas e acessórios.",
    },
  ];

  // Carrega do AsyncStorage ao iniciar
  useEffect(() => {
    const carregarCategorias = async () => {
      try {
        const json = await AsyncStorage.getItem("@categorias");

        if (json && JSON.parse(json).categorias.length > 0) {
          const categoriasSalvas = JSON.parse(json).categorias;

          const categoriasComDescricao = categoriasSalvas.map((catSalva) => {
            const catPadrao = categoriasPadrao.find(
              (c) => c.categoria === catSalva.categoria
            );

            return {
              ...catPadrao,
              ...catSalva,
              descricao:
                catSalva.descricao || (catPadrao ? catPadrao.descricao : "Sem descrição."),
            };
          });

          setCategorias(categoriasComDescricao);
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
      prev.map((cat) => {
        if (cat.categoria === "Receita") {
          return { ...cat, ativo: true };
        }

        return cat.categoria === nome ? { ...cat, ...novosDados } : cat;
      })
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