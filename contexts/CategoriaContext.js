import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ElementoContext } from "./ElementoProvider";

export const CategoriaContext = createContext();

export const CategoriaProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const { elementosPorCategoria } = useContext(ElementoContext);

  const categoriasPadrao = [
    {
      categoria: "Receita",
      cor: "#3BA844", // verde claro → remete a dinheiro e tem ótimo contraste
      valorTotal: 0,
      ativo: true,
    },
    {
      categoria: "Assinatura",
      cor: "#1565C0", // azul médio → remete a serviços online, tech
      valorTotal: 0,
      ativo: true,
    },
    {
      categoria: "Investimento",
      cor: "#C62828", // vermelho escuro → remete a risco, mercado financeiro
      valorTotal: 0,
      ativo: true,
    },
    {
      categoria: "Lazer",
      cor: "#8E24AA", // roxo médio → vibrante e jovem, associado a diversão
      valorTotal: 0,
      ativo: true,
    },
    {
      categoria: "Mercado",
      cor: "#999705", // marrom claro → tom terroso, lembra alimentos/naturais
      valorTotal: 0,
      ativo: true,
    },
    {
      categoria: "Saúde",
      cor: "#00897B", // verde azulado → remete à área médica e tranquilidade
      valorTotal: 0,
      ativo: true,
    },
    {
      categoria: "Transporte",
      cor: "#5D4037", // marrom escuro → lembra asfalto, estrada, carro
      valorTotal: 0,
      ativo: true,
    },
    {
      categoria: "Vestuário",
      cor: "#37474F", // cinza azulado escuro → elegante, remete à moda
      valorTotal: 0,
      ativo: true,
    },
  ];

  // Carrega do AsyncStorage ao iniciar
  useEffect(() => {
    const carregarCategorias = async () => {
      try {
        const json = await AsyncStorage.getItem("@categorias");
        let categoriasIniciais = categoriasPadrao;

        if (json && JSON.parse(json).categorias.length > 0) {
          const categoriasSalvas = JSON.parse(json).categorias;

          categoriasIniciais = categoriasSalvas.map((catSalva) => {
            const catPadrao = categoriasPadrao.find(
              (c) => c.categoria === catSalva.categoria
            );

            return {
              ...catPadrao,
              ...catSalva,
            };
          });
        }

        setCategorias(categoriasIniciais);
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
        setCategorias(categoriasPadrao);
      }
    };

    carregarCategorias();
  }, []);

  // Atualiza valor total sempre que os elementos mudam
  useEffect(() => {
    const atualizarValoresTotais = () => {
      const novasCategorias = categorias.map((cat) => {
        const elementos = elementosPorCategoria[cat.categoria] || [];
        const total = elementos.reduce((acc, el) => acc + (el.valor || 0), 0);
        // const ativo = total > 0;

        return { ...cat, valorTotal: total };
      });

      setCategorias(novasCategorias);
    };

    if (categorias.length > 0) {
      atualizarValoresTotais();
    }
  }, [elementosPorCategoria]);

  // Salva as categorias no AsyncStorage quando elas mudarem
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
        // if (cat.categoria === "Receita") {
        //   return { ...cat, ativo: true };
        // }

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
