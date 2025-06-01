import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ElementoContext } from "../../contexts/ElementoProvider";
import BotaoVoltar from "../../components/botao/BotaoVoltar";

export default function EditarItem() {
  const route = useRoute();
  const navigation = useNavigation();
  const { nomeCategoria, nomeElemento } = route.params;
  const { editarElemento, carregarElementoPorCategoria } =
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

  const handleEditar = () => {
    editarElemento(nomeCategoria, nomeElemento, {
      nome: titulo,
      valor: parseFloat(valor),
      dataExpiracao: data,
    });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.titulo}>
          Editar{" "}
          {nomeCategoria === "Investimento" || nomeCategoria === "Receita"
            ? "Receita"
            : "Despesa"}
        </Text>
        <Text style={styles.subtitulo}>Categoria: {nomeCategoria}</Text>

        <Text style={styles.textoBranco}>Título</Text>
        <TextInput
          style={styles.input}
          onChangeText={setTitulo}
          value={titulo}
          placeholder="Título"
        />
        <Text style={styles.textoBranco}>Valor</Text>
        <TextInput
          style={styles.input}
          onChangeText={setValor}
          value={valor}
          placeholder="Valor"
          keyboardType="numeric"
        />
        <Text style={styles.textoBranco}>Validade</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Data:</Text>
          <TextInput
            style={[styles.input, styles.inputFlex]}
            onChangeText={setData}
            value={data}
            placeholder="Data de Vencimento"
          />
        </View>

        <TouchableOpacity style={styles.botao} onPress={handleEditar}>
          <Text style={styles.texto}>Editar</Text>
        </TouchableOpacity>
        <BotaoVoltar />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#2A2929",
  },
  titulo: {
    fontSize: 26,
    color: "#3C3C3C",
    marginBottom: 8,
    fontFamily: "AlbertSans-Bold",
    fontWeight: "bold",
    backgroundColor: "#FFB056",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingTop: 30,
    paddingBottom: 30,
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 18,
    color: "#FFF",
    marginBottom: 20,
    textAlign: "center",
  },
  textoBranco: {
    color: "#FFF",
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    color: "#FFF",
    backgroundColor: "#3C3C3C",
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
    color: "#FFF",
  },
  inputFlex: {
    flex: 1,
    marginBottom: 0,
  },
  botao: {
    backgroundColor: "#FFFF00",
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
