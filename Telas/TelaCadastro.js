import React, { useState, useContext } from "react";
import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GastosContext } from "../context/GastosProvider";
import BolaSelecao from "../components/BolaSelecao/BolaSelecao";

export default function TelaCadastro() {
  const { addGasto } = useContext(GastosContext);
  const [titulo, setTitulo] = useState("");
  const [gasto, setGasto] = useState("");
  const [dataLimite, setDataLimite] = useState("");
  const [categoria, setCategoria] = useState(null);
  const [grupo, setGrupo] = useState("Despesa");

  // Função para salvar o gasto
  //Colocar em uma classe separada depois
  const salvarGasto = async () => {
    if (!titulo || !gasto || !dataLimite || !categoria) {
      Alert.alert("Preencha todos os campos!");
      return;
    }

    // Define o grupo com base na categoria
    const grupoFinal =
      categoria === "Investimento" || categoria === "Salario"
        ? "Receita"
        : "Despesa";

    //Seguir essa estrutura de objeto para chamadas
    const novoGasto = {
      titulo,
      gasto,
      dataLimite,
      categoria,
      grupo: grupoFinal,
    };

    await addGasto(novoGasto);

    // Limpa os campos
    setTitulo("");
    setGasto("");
    setDataLimite("");
    setCategoria(null);
    setGrupo("Despesa");

    Alert.alert("Gasto salvo com sucesso!");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Cadastro de Gasto</Text>

      <BolaSelecao setCategoria={setCategoria} />

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
      {/*Colocar um picker de dia ?*/}
      <TextInput
        style={styles.input}
        placeholder="Data Limite (DD)"
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
});
