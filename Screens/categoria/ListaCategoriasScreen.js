import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { ElementoContext } from "../../contexts/ElementoProvider";
import BotaoVoltar from "../../components/botao/BotaoVoltar";
import { CategoriaContext } from "../../contexts/CategoriaContext";
import BotaoExcluir from "../../components/botao/BotaoExcluir";
import BotaoEditar from "../../components/botao/BotaoEditar";

export default function ListaCategoriaScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { nomeCategoria } = route.params;
  const { elementosPorCategoria } = useContext(ElementoContext);
  const { categorias } = useContext(CategoriaContext);
  const categoria = categorias.find((cat) => cat.categoria === nomeCategoria);
  const [despesas, setDespesas] = useState([]);

  //código que traz as despesas da categoria
  useEffect(() => {
    if (nomeCategoria && elementosPorCategoria[nomeCategoria]) {
      setDespesas(elementosPorCategoria[nomeCategoria]);
    }
  }, [nomeCategoria, elementosPorCategoria]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Categoria: {nomeCategoria}</Text>

      <Text style={styles.textoBranco}>
        Adicionar{" "}
        {nomeCategoria === "Investimento" || nomeCategoria === "Receita"
          ? "Receita"
          : "Despesa"}
      </Text>

      <Text style={styles.subTitulo}>Valor Mensal</Text>
      <Text style={styles.valorMensal}>
        R$: {categoria?.valorTotal?.toFixed(2) || "0,00"}
      </Text>

      {despesas.length > 0 ? (
        <FlatList
          data={despesas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.despesaContainer}>
              <View style={styles.infoContainer}>
                <Text style={styles.despesaNome}>{item.nome}</Text>
                <Text style={styles.despesaValor}>
                  R$ {item.valor.toFixed(2)}
                </Text>
                <Text style={styles.despesaData}>
                  Data de Expiração: {item.dataExpiracao}
                </Text>
              </View>
              <BotaoEditar nomeCategoria={nomeCategoria} nomeItem={item.nome} />
              <BotaoExcluir
                nomeCategoria={nomeCategoria}
                nomeItem={item.nome}
              />
            </View>
          )}
        />
      ) : (
        <Text style={styles.semDespesas}>
          Não há despesas associadas a essa categoria.
        </Text>
      )}

      <TouchableOpacity
        style={styles.botao}
        onPress={() =>
          navigation.navigate("AdicionarItem", { nomeCategoria: nomeCategoria })
        }
      >
        <Text style={styles.mais}>+</Text>
      </TouchableOpacity>

      <BotaoVoltar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2929",
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    color: "#3C3C3C",
    marginBottom: 10,
    fontFamily: "AlbertSans-Bold",
    fontWeight: "bold",
    backgroundColor: "#FFB056",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingTop: 30,
    paddingBottom: 30,
    textAlign: "center",
  },
  subTitulo: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  valorMensal: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    color: "#FFFFFF",
  },
  textoBranco: {
    textAlign: "center",
    color: "#FFFFFF",
    marginBottom: 10,
    fontSize: 16,
  },
  despesaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#3C3C3C",
  },
  infoContainer: {
    flex: 1,
    paddingRight: 10,
  },
  despesaNome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  despesaValor: {
    fontSize: 16,
    color: "#FFA500",
  },
  despesaData: {
    fontSize: 14,
    color: "#DDDDDD",
  },
  semDespesas: {
    fontSize: 16,
    textAlign: "center",
    color: "#CCCCCC",
  },
  botao: {
    backgroundColor: "#FFA500",
    borderRadius: 30,
    width: 50,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 1,
  },
  mais: {
    fontSize: 28,
    color: "#000",
  },
});
