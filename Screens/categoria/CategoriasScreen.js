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
import BotaoComIcone from "../../components/botao/BotaoComIcone";
import MonetaryText from "../../components/monetaryText/MonetaryText";

export default function CategoriasScreen() {
  const navigation = useNavigation();
  const { categorias } = useContext(CategoriaContext);

  const categoriasAtivas = categorias.filter((cat) => cat.ativo === true);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Categorias</Text>

      <ScrollView style={styles.scrollView}>
        {categoriasAtivas.length > 0 ? (
          <View>
            {categoriasAtivas.map((cat) => (
              <TouchableOpacity
                key={cat.categoria}
                onPress={() =>
                  navigation.navigate("ListaCategorias", {
                    nomeCategoria: cat.categoria,
                  })
                }
              >
                <View style={[styles.card, { backgroundColor: cat.cor }]}>
                  <Text style={styles.nome}>{cat.categoria}</Text>
                  <MonetaryText
                    style={styles.valor}
                    value={cat.valorTotal}
                    resize={false}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <Text style={styles.semItens}>
            Adicione algumas categoria para começar.
          </Text>
        )}
      </ScrollView>

      <BotaoComIcone
        onPress={() => navigation.navigate("SelecaoCategorias")}
        color="#FFB056"
        size={50}
        style={styles.botaoComIcone}
      ></BotaoComIcone>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2929",
  },
scrollView: {
  flex: 1,
  backgroundColor: "#2A2929",
},
  titulo: {
    fontSize: 32,
    color: "#3C3C3C",
    marginBottom: 8,
    fontFamily: "AlbertSans-Bold",
    backgroundColor: "#FFB056",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingTop: 70,
    paddingBottom: 30,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  card: {
    borderRadius: 10,
    height: 150,
    width: 300,
    margin: 15,
    justifyContent: "stretch",
    alignSelf: "center",
    alignItems: "center",
  },
  nome: {
    color: "#E9E9E9",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 20,
  },
  semItens: {
    fontSize: 15,
    textAlign: "center",
    color: "#E9E9E9",
    fontFamily: "AlbertSans-Italic",
    marginVertical: 250,
  },
  valor: {
    color: "#E9E9E9",
    fontSize: 32,
    paddingTop: 20,
  },
  botaoComIcone: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
});
