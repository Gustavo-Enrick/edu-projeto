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

  const categoriasAtivas = categorias.filter((cat) => cat.ativo);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Text style={styles.titulo}>Categorias</Text>
      <ScrollView contentContainerStyle={styles.scroll}>
        {categoriasAtivas.map((cat) => (
          <TouchableOpacity
            key={cat.categoria}
            onPress={() =>
              navigation.navigate("ListaCategoriaScreen", {
                nomeCategoria: cat.categoria,
              })
            }
          >
            <View style={[styles.card, { backgroundColor: cat.cor }]}>
              <Text style={styles.nome}>{cat.categoria}</Text>
              <Text style={styles.valor}>R$ {cat.valorTotal.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("SelecaoCategorias")}
      >
        <Text style={styles.mais}>+</Text>
      </TouchableOpacity>
    </ScrollView>
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
    marginBottom: 8,
    fontFamily: "AlbertSans-Bold",
    fontWeight: "bold",
    backgroundColor: "#FFB056",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingTop: 50,
    paddingBottom: 50,
    textAlign: "center",
  },
  card: { borderRadius: 10, padding: 30, alignItems: "center", margin: 15 },
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
  },
  mais: { fontSize: 28, color: "#000" },
});
