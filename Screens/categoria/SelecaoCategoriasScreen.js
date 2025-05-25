import React, { useContext } from "react";
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
import BotaoSalvar from "../../components/botao/BotaoSalvar";

export default function SelecaoCategoriasScreen() {
  const navigation = useNavigation();
  const { categorias, atualizarCategoria } = useContext(CategoriaContext);

  const alternarAtivo = (nome) => {
    const categoria = categorias.find((c) => c.categoria === nome);
    atualizarCategoria(nome, { ativo: !categoria.ativo });
  };

  const handleSalvar = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.titulo}>Seleção de Categorias</Text>
        <View style={styles.lista}>
          {categorias
            .filter((cat) => cat.categoria !== "Receita")
            .map((cat) => (
              <TouchableOpacity
                key={cat.categoria}
                style={styles.item}
                onPress={() => alternarAtivo(cat.categoria)}
              >
                <View
                  style={[styles.checkbox, cat.ativo && styles.checkboxMarcado]}
                />
                <Text style={styles.nome}>{cat.categoria}</Text>
              </TouchableOpacity>
            ))}
        </View>
        <BotaoSalvar onPress={handleSalvar}></BotaoSalvar>
        <BotaoVoltar></BotaoVoltar>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#222" },
  titulo: {
    backgroundColor: "#FFB14D",
    textAlign: "center",
    fontSize: 22,
    padding: 12,
    fontWeight: "bold",
  },
  scroll: { padding: 16, gap: 16 },
  lista: { padding: 20 },
  item: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: "#FFA500",
    marginRight: 12,
  },
  checkboxMarcado: {
    backgroundColor: "#FFA500",
  },
  nome: { color: "#fff", fontSize: 18 },
});
