import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CategoriaContext } from "../../contexts/CategoriaContext";

export default function CategoriasScreen() {
  const navigation = useNavigation();
  const { categorias } = useContext(CategoriaContext);

  const categoriasAtivas = categorias.filter((cat) => cat.ativo === true);

  console.log(categorias);
  console.log(categoriasAtivas);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Categorias</Text>
      <ScrollView contentContainerStyle={styles.scroll}>
        {categoriasAtivas.map((cat) => (
          <View
            key={cat.categoria}
            style={[styles.card, { backgroundColor: cat.cor }]}
          >
            <Text style={styles.nome}>{cat.categoria}</Text>
            <Text style={styles.valor}>R$ {cat.valorTotal.toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("SelecaoCategorias")}
      >
        <Text style={styles.mais}>+</Text>
      </TouchableOpacity>
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
  card: { borderRadius: 10, padding: 20, alignItems: "center" },
  nome: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  valor: { color: "#fff", fontSize: 20 },
  botao: {
    backgroundColor: "#FFA500",
    borderRadius: 30,
    width: 50,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  mais: { fontSize: 28, color: "#000" },
});
