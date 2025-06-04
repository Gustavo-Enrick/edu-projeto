import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ElementoContext } from "../../contexts/ElementoProvider";
import BotaoVoltar from "../../components/botao/BotaoVoltar";
import InputTextCustom from "../../components/input/InputTextCustom";
import InputNumberCustom from "../../components/input/InputNumberCustom";
import InputMoneyCustom from "../../components/input/InputMoneyCustom";
import BotaoAcao from "../../components/botao/BotaoAcao";

export default function EditarItemScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { nomeCategoria, id } = route.params;
  const { editarElementoPorId, carregarElementoPorId } =
    useContext(ElementoContext);

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [dia, setDia] = useState("");

  const [erroTitulo, setErroTitulo] = useState("");
  const [erroValor, setErroValor] = useState("");
  const [erroDia, setErroDia] = useState("");

  useEffect(() => {
    const carregarDados = () => {
      const dados = carregarElementoPorId(nomeCategoria, id);
      if (dados) {
        setTitulo(dados.titulo);
        setDescricao(dados.descricao);
        setValor(dados.valor);
        // setDia(dados.dia);
        setDia(String(dados.dia ?? ""));
      }
    };
    carregarDados();
  }, [nomeCategoria, id]);

  const handleEditar = () => {
    let temErro = false;

    if (!titulo.trim()) {
      setErroTitulo("Exigido.");
      temErro = true;
    } else {
      setErroTitulo("");
    }

    if (valor == 0 || !valor.toString().trim()) {
      setErroValor("Exigido.");
      temErro = true;
    } else {
      setErroValor("");
    }

    if (dia == 0 || !dia.toString().trim()) {
      setErroDia("Exigido.");
      temErro = true;
    } else {
      setErroDia("");
    }

    if (temErro) return;

    editarElementoPorId(nomeCategoria, id, {
      titulo,
      descricao,
      valor: parseFloat(valor),
      dia: parseInt(dia),
    });

    setTitulo("");
    setValor("");
    setDescricao("");
    setDia("");

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>
          Editar {nomeCategoria === "Receita" ? "Receita" : "Despesa"}
        </Text>

        <BotaoVoltar />

        <Text style={styles.subtitulo}>{nomeCategoria}</Text>

        <View style={styles.column}>
          <InputTextCustom
            label="Título"
            onChangeText={(text) => {
              setTitulo(text);
              if (text.trim()) setErroTitulo("");
            }}
            value={titulo}
            placeholder="Título..."
            maxLength={30}
            required={true}
            errorMessage={erroTitulo}
          />

          <InputTextCustom
            label="Descrição"
            onChangeText={setDescricao}
            value={descricao}
            placeholder="Descrição..."
            maxLength={50}
          />
        </View>
        <View style={styles.row}>
          <InputMoneyCustom
            label="Valor"
            onChangeText={(text) => {
              setValor(text);
              if (text.trim()) setErroValor("");
            }}
            value={valor}
            placeholder="R$ 0,00"
            maxLength={15}
            width={200}
            required={true}
            errorMessage={erroValor}
          />

          <InputNumberCustom
            label="Dia"
            onChangeText={(text) => {
              setDia(text);
              if (text.trim()) setErroDia("");
            }}
            value={dia}
            placeholder="00"
            maxLength={2}
            width={50}
            required={true}
            errorMessage={erroDia}
          />
        </View>

        <BotaoAcao
          label="Editar"
          style={styles.botaoEditar}
          onPress={handleEditar}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2929",
  },
  titulo: {
    fontSize: 32,
    color: "#3C3C3C",
    fontFamily: "AlbertSans-Bold",
    backgroundColor: "#FFB056",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingTop: 70,
    paddingBottom: 30,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
  },
  subtitulo: {
    fontSize: 32,
    fontFamily: "AlbertSans-Bold",
    textAlign: "center",
    color: "#E9E9E9",
    marginBottom: 30,
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  botaoEditar: {
    alignSelf: "center",
    backgroundColor: "#1B56D6",
    color: "#E9E9E9",
  },
});
