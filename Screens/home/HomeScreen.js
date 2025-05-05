import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CategoriaContext } from "../../contexts/CategoriaContext";

export default function HomeScreen() {
  const { categorias } = useContext(CategoriaContext);

  const dataFilter = categorias.filter((categoria) => categoria.ativo === true);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>

      <FlatList
        data={dataFilter}
        keyExtractor={(item) => item.categoria}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={[styles.colorIndicator, { backgroundColor: item.cor }]} />
            <View style={styles.textContainer}>
              <Text style={styles.categoria}>{item.categoria}</Text>
              <Text style={styles.valorTotal}>Total: R$ {item.valorTotal.toFixed(2)}</Text>
              <Text style={styles.ativo}>{item.ativo ? "Ativa" : "Inativa"}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  colorIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  categoria: {
    fontSize: 18,
    fontWeight: "bold",
  },
  valorTotal: {
    color: "#555",
  },
  ativo: {
    fontStyle: "italic",
    color: "#888",
  },
});

