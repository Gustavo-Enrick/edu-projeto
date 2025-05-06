import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CategoriaContext } from "../../contexts/CategoriaContext"; // Corrigido para importar o contexto

const GuiaScreen = () => {
  const { categorias } = useContext(CategoriaContext); // Acessa o contexto correto
  const navigation = useNavigation();
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");

  // Função para obter o nome da categoria com base na posição
  const getCategoriaNome = (posicao) => {
    switch (posicao) {
      case 0:
        return "Assinatura";
      case 1:
        return "Investimento";
      case 2:
        return "Lazer";
      case 3:
        return "Mercado";
      case 4:
        return "Receita";
      case 5:
        return "Saúde";
      case 6:
        return "Transporte";
      case 7:
        return "Vestuário";
      default:
        return "Categoria Desconhecida";
    }
  };

  // Função para navegar até a tela de CategoriaDetalhes
  const handleIrParaCategoria = () => {
    if (categoriaSelecionada !== "") {
      const nomeCategoria = getCategoriaNome(categoriaSelecionada); // Obtém o nome da categoria com base na posição
      console.log(nomeCategoria);
      navigation.navigate("CategoriaScreen", {
        nomeCategoria: nomeCategoria, // Passa o nome da categoria
      });
    } else {
      alert("Selecione uma categoria!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Selecione uma categoria:</Text>

      {/* Mapeia as categorias e cria as bolinhas de "checkout" */}
      <View style={styles.checkboxesContainer}>
        {Object.keys(categorias).map((categoria, index) => {
          // Acessando o objeto da categoria completa
          const categoriaDetalhes = categorias[categoria];

          return (
            <TouchableOpacity
              key={categoria}
              style={styles.checkboxContainer}
              onPress={() => setCategoriaSelecionada(index)} // Seleciona a posição da categoria ao clicar
            >
              <View
                style={[
                  styles.checkbox,
                  categoriaSelecionada === index && styles.checkedCheckbox,
                ]}
              >
                {/* Marca a bolinha se a categoria foi selecionada */}
              </View>
              <Text style={styles.label}>{categoriaDetalhes.categoria}</Text>{" "}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Botão para navegar para a página de categoria detalhada */}
      <Button title="Ir para categoria" onPress={handleIrParaCategoria} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  titulo: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  checkboxesContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Permite que as bolinhas se alinhem em várias linhas
    justifyContent: "space-between",
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    width: "45%", // Controla o tamanho das bolinhas (2 por linha)
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#555",
    borderRadius: 12, // Faz a bolinha ser redonda
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkedCheckbox: {
    backgroundColor: "#4A90E2", // Cor quando a bolinha está selecionada
  },
  label: {
    fontSize: 16,
  },
});

export default GuiaScreen;
