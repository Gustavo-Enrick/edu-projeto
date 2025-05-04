// screens/TelaCadastro.js
import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GastosContext } from "../context/GastosProvider";

export default function TelaCadastro() {
  const { addGasto } = useContext(GastosContext);
  const [titulo, setTitulo] = useState("");
  const [gasto, setGasto] = useState("");
  const [dataLimite, setDataLimite] = useState("");

  const salvarGasto = async () => {
    if (!titulo || !gasto || !dataLimite) {
      Alert.alert("Preencha todos os campos!");
      return;
    }

    const novoGasto = { titulo, gasto, dataLimite };
    await addGasto(novoGasto);

    setTitulo("");
    setGasto("");
    setDataLimite("");
    Alert.alert("Gasto salvo com sucesso!");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Cadastro de Gasto</Text>

      <TextInput
        style={styles.input}
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        style={styles.input}
        placeholder="Gasto (R$)"
        keyboardType="numeric"
        value={gasto}
        onChangeText={setGasto}
      />

      <TextInput
        style={styles.input}
        placeholder="Data Limite (DD/MM/AAAA)"
        value={dataLimite}
        onChangeText={setDataLimite}
      />

      <Button title="Salvar Gasto" onPress={salvarGasto} color="#4CAF50" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
