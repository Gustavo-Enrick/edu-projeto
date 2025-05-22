import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ElementoContext } from "../../contexts/ElementoProvider";
import BotaoVoltar from "../../components/botao/BotaoVoltar";

export default function ExcluirItemScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { nomeCategoria, nomeElemento } = route.params;
  const { removerElementoDaCategoria, carregarElementoPorCategoria } =
    useContext(ElementoContext);

  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const carregarDados = () => {
      const dados = carregarElementoPorCategoria(nomeCategoria, nomeElemento);
      if (dados) {
        setTitulo(dados.nome);
        setValor(dados.valor);
        setData(dados.dataExpiracao);
      }
    };
    carregarDados();
  }, [nomeCategoria, nomeElemento]);

  const handleExcluir = () => {
    removerElementoDaCategoria(nomeCategoria, nomeElemento);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Adicionar{" "}
        {nomeCategoria === "Investimento" || nomeCategoria === "Receita"
          ? "Receita"
          : "Despesa"}
      </Text>
      <Text style={styles.subtitulo}>Categoria: {nomeCategoria}</Text>

      <Text>Título</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTitulo}
        value={titulo}
        placeholder="Título"
      />
      <Text>Valor</Text>
      <TextInput
        style={styles.input}
        onChangeText={setValor}
        value={valor}
        placeholder="Valor"
        keyboardType="numeric"
      />
      <Text>Validade</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Data:</Text>
        <TextInput
          style={[styles.input, styles.inputFlex]}
          onChangeText={setData}
          value={data}
          placeholder="Data de Vencimento"
        />
      </View>

      <TouchableOpacity style={styles.botao} onPress={handleExcluir}>
        <Text style={styles.texto}>Excluir</Text>
      </TouchableOpacity>
      <BotaoVoltar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
    width: 50,
  },
  inputFlex: {
    flex: 1,
    marginBottom: 0,
  },
  botao: {
    backgroundColor: "#FF3B30",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 15,
  },
  texto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
