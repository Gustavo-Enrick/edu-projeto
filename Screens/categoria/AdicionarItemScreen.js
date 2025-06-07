import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ElementoContext } from "../../contexts/ElementoProvider";
import uuid from "react-native-uuid";
import BotaoVoltar from "../../components/botao/BotaoVoltar";
import InputTextCustom from "../../components/input/InputTextCustom";
import InputNumberCustom from "../../components/input/InputNumberCustom";
import InputMoneyCustom from "../../components/input/InputMoneyCustom";
import BotaoAcao from "../../components/botao/BotaoAcao";

export default function AdicionarItemScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { nomeCategoria } = route.params;
  const { adicionarElementoNaCategoria } = useContext(ElementoContext);

  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dia, setDia] = useState("");

  const [erroTitulo, setErroTitulo] = useState("");
  const [erroValor, setErroValor] = useState("");
  const [erroDia, setErroDia] = useState("");

  const handleSalvar = () => {
    let temErro = false;

    if (!titulo.trim()) {
      setErroTitulo("Exigido.");
      temErro = true;
    } else {
      setErroTitulo("");
    }

    if (isNaN(parseFloat(valor)) || parseFloat(valor) <= 0) {
      setErroValor("Exigido.");
      temErro = true;
    } else {
      setErroValor("");
    }

    if (isNaN(parseInt(dia))) {
      setErroDia("Exigido.");
      temErro = true;
    } else {
      if (parseInt(dia) > 31) {
        setErroDia("1 - 31");
        temErro = true;
      } else {
        setErroDia("");
      }
    }

    if (temErro) return;

    adicionarElementoNaCategoria(nomeCategoria, {
      id: uuid.v4(),
      titulo,
      descricao,
      valor: parseFloat(valor),
      dia: parseInt(dia),
    });

    setTitulo("");
    setDescricao("");
    setValor("");
    setDia("");

    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 150 : 0}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>
          Adicionar {nomeCategoria === "Receita" ? "Receita" : "Despesa"}
        </Text>
        
        <BotaoVoltar />

        <Text style={styles.subtitulo}>{nomeCategoria}</Text>

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 150,
            backgroundColor: "#3A3A3A",
            borderRadius: 20,
          }}
        >
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
            label="Adicionar"
            style={styles.botaoAdicionar}
            onPress={handleSalvar}
          />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
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
    marginBottom: 15,
  },
  column: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  botaoAdicionar: {
    alignSelf: "center",
    backgroundColor: "#2E7D32",
    color: "#E9E9E9",
  },
});
