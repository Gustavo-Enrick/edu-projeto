import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ElementoContext } from "../../contexts/ElementoProvider";
import { TextInput } from "react-native-gesture-handler";

const CategoriaScreen = () => {
  const route = useRoute();
  const { nomeCategoria } = route.params;
  const { elementosPorCategoria } = useContext(ElementoContext);
  const [despesas, setDespesas] = useState([]);

  console.log(nomeCategoria);

  useEffect(() => {
    if (nomeCategoria && elementosPorCategoria[nomeCategoria]) {
      setDespesas(elementosPorCategoria[nomeCategoria]);
    }
  }, [nomeCategoria, elementosPorCategoria]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Categoria: {nomeCategoria}</Text>

      {despesas.length > 0 ? (
        <FlatList
          data={despesas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.despesaContainer}>
              <Text style={styles.despesaNome}>{item.nome}</Text>
              <Text style={styles.despesaValor}>R$ {item.valor}</Text>
              <Text style={styles.despesaData}>
                Data de Expiração: {item.dataExpiracao}
              </Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.semDespesas}>
          Não há despesas associadas a essa categoria.
        </Text>
      )}
    </View>
  );
};

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
});

export default CategoriaScreen;
