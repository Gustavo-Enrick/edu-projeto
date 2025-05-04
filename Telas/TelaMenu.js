// screens/TelaMenu.js
import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GastosContext } from "../context/GastosProvider";

export default function TelaMenu() {
  const { gastos, loadGastos } = useContext(GastosContext);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Lista de Gastos</Text>

      {gastos.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum gasto cadastrado.</Text>
      ) : (
        <FlatList
          data={gastos}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.titulo}</Text>
              <Text>Valor: R$ {item.gasto}</Text>
              <Text>Data Limite: {item.dataLimite}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 18,
    color: "#888",
  },
  list: {
    flexGrow: 1,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
