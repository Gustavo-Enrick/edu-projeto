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

export default function ListaCategoriaScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { nomeCategoria } = route.params;
  const { elementosPorCategoria } = useContext(ElementoContext);
  const { categorias } = useContext(CategoriaContext);
  const categoria = categorias.find((cat) => cat.categoria === nomeCategoria);
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    if (nomeCategoria && elementosPorCategoria[nomeCategoria]) {
      setDespesas(elementosPorCategoria[nomeCategoria]);
    }
  }, [nomeCategoria, elementosPorCategoria]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Categoria: {nomeCategoria}</Text>
      <Text style={styles.subTitulo}>Valor Mensal</Text>
      <Text style={styles.valorMensal}>
        R$: {categoria?.valorTotal?.toFixed(2) || "0.00"}
      </Text>

      {despesas.length > 0 ? (
        <FlatList
          data={despesas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.despesaContainer}>
              <View style={styles.infoContainer}>
                <Text style={styles.despesaNome}>{item.nome}</Text>
                <Text style={styles.despesaValor}>R$ {item.valor}</Text>
                <Text style={styles.despesaData}>
                  Data de Expiração: {item.dataExpiracao}
                </Text>
              </View>
              <BotaoExcluir nome={item.nome} />
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

      <BotaoVoltar></BotaoVoltar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  despesaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  despesaNome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  despesaValor: {
    fontSize: 16,
    color: "#4A90E2",
  },
  despesaData: {
    fontSize: 14,
    color: "#555",
  },
  semDespesas: {
    fontSize: 16,
    textAlign: "center",
    color: "#888",
  },
  botao: {
    backgroundColor: "#FFA500",
    borderRadius: 30,
    width: 50,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  mais: {
    fontSize: 28,
    color: "#000",
  },
  valorMensal: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  subTitulo: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "600",
  },
  infoContainer: {
    flex: 1,
    paddingRight: 10,
  },
});
