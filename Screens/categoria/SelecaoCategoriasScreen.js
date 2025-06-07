import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CategoriaContext } from "../../contexts/CategoriaContext";
import BotaoVoltar from "../../components/botao/BotaoVoltar";
import BotaoAcao from "../../components/botao/BotaoAcao";
import IconFontAwesome from "../../components/iconSvg/IconFontAwesome";
import IconFontAwesome6 from "../../components/iconSvg/IconFontAwesome6";

export default function SelecaoCategoriasScreen() {
  const navigation = useNavigation();
  const { categorias, atualizarCategoria } = useContext(CategoriaContext);
  const [selecoes, setSelecoes] = useState([]);

  useEffect(() => {
    setSelecoes(categorias);
  }, [categorias]);

  const alternarAtivo = (nome) => {
    setSelecoes((prev) =>
      prev.map((cat) =>
        cat.categoria === nome ? { ...cat, ativo: !cat.ativo } : cat
      )
    );
  };

  const handleSalvar = () => {
    selecoes.forEach((cat) => {
      atualizarCategoria(cat.categoria, { ativo: cat.ativo });
    });

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Seleção de Categorias</Text>

        <BotaoVoltar />

        <View style={styles.lista}>
          {selecoes.map((cat) => (
            <TouchableOpacity
              key={cat.categoria}
              style={styles.item}
              onPress={() => alternarAtivo(cat.categoria)}
            >
              {cat.ativo ? (
                <IconFontAwesome
                  name="check-square"
                  color="#FC9E07"
                  size={31}
                />
              ) : (
                <IconFontAwesome6 name="square" color="#FC9E07" size={30} />
              )}

              <Text style={styles.nome}>{cat.categoria}</Text>
            </TouchableOpacity>
          ))}
        </View>
      <BotaoAcao
        label="Salvar"
        style={styles.botaoSalvar}
        onPress={handleSalvar}
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
  },
  lista: {
    paddingHorizontal: 40,
    marginTop: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  nome: {
    fontFamily: "AlbertSans-Regular",
    color: "#E9E9E9",
    fontSize: 20,
    marginHorizontal: 20,
  },
  botaoSalvar: {
    alignSelf: "center",
    backgroundColor: "#2E7D32",
    color: "#E9E9E9",
  },
});
