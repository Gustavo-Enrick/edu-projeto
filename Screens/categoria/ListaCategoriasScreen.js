import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { ElementoContext } from "../../contexts/ElementoProvider";
import BotaoVoltar from "../../components/botao/BotaoVoltar";
import { CategoriaContext } from "../../contexts/CategoriaContext";
import BotaoComIcone from "../../components/botao/BotaoComIcone";
import MonetaryText from "../../components/monetaryText/MonetaryText";

export default function ListaCategoriaScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { nomeCategoria } = route.params;
  const { elementosPorCategoria } = useContext(ElementoContext);
  const { categorias } = useContext(CategoriaContext);

  const categoria = categorias.find(
    (cat) =>
      cat.categoria.trim().toLowerCase() === nomeCategoria.trim().toLowerCase()
  );

  const despesaOuReceita =
    nomeCategoria === "Receita" ? "Receitas" : "Despesas";

  const [itens, setItens] = useState([]);

  //Traz as itens da categoria
  useEffect(() => {
    if (nomeCategoria && elementosPorCategoria[nomeCategoria]) {
      setItens(elementosPorCategoria[nomeCategoria]);
    }
  }, [nomeCategoria, elementosPorCategoria]);

  const { removerElementoDaCategoriaPorId } = useContext(ElementoContext);

  return (
    <View style={styles.container}>
      <Text style={[styles.titulo, { backgroundColor: categoria.cor }]}>
        {nomeCategoria}
      </Text>

      <BotaoVoltar />

      <Text style={styles.subTitulo}>Valor Mensal</Text>
      <MonetaryText
        style={styles.valorMensal}
        value={categoria.valorTotal}
        resize={false}
      />

      <Text style={styles.itensTitulo}>{despesaOuReceita}</Text>

      {itens.length > 0 ? (
        <FlatList
          data={itens}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itensConteiner}>
              <Text
                style={[
                  styles.dataFormatoRedondo,
                  { backgroundColor: categoria.cor },
                ]}
              >
                {item.dia}
              </Text>

              <TouchableOpacity
                style={styles.itemConteiner}
                onPress={() =>
                  navigation.navigate("EditarItem", {
                    nomeCategoria: nomeCategoria,
                    id: item.id,
                  })
                }
              >
                <View style={styles.itemTextoArea}>
                  <View style={styles.itemHeader}>
                    <Text style={styles.itemNome}>{item.titulo}</Text>
                    <MonetaryText style={styles.itemValor} value={item.valor} />
                  </View>
                  <Text style={styles.itemDescricao}>{item.descricao}</Text>
                </View>
              </TouchableOpacity>

              <BotaoComIcone
                onPress={() =>
                  removerElementoDaCategoriaPorId(nomeCategoria, item.id)
                }
                color="red"
                size={30}
                style={{ padding: 10 }}
                icon="trash"
              ></BotaoComIcone>
            </View>
          )}
        />
      ) : (
        <Text style={styles.semItens}>
          Ainda não há {despesaOuReceita} associadas a esta categoria.
        </Text>
      )}

      <BotaoComIcone
        onPress={() =>
          navigation.navigate("AdicionarItem", { nomeCategoria: nomeCategoria })
        }
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
  titulo: {
    fontSize: 32,
    color: "#E9E9E9",
    fontFamily: "AlbertSans-Bold",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingTop: 70,
    paddingBottom: 30,
    textAlign: "center",
  },
  subTitulo: {
    fontSize: 28,
    fontFamily: "AlbertSans-Bold",
    textAlign: "center",
    color: "#E9E9E9",
  },
  valorMensal: {
    fontSize: 24,
    fontFamily: "AlbertSans-Regular",
    textAlign: "center",
    color: "#E9E9E9",
    paddingTop: 10,
  },
  itensTitulo: {
    fontSize: 24,
    fontFamily: "AlbertSans-Bold",
    color: "#E9E9E9",
    padding: 30,
    paddingLeft: 20,
  },
  itensConteiner: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  itemConteiner: {
    flex: 1,
    borderRadius: 8,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundColor: "#3c3c3c",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  itemTextoArea: {
    flex: 1,
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
  },
  dataFormatoRedondo: {
    fontSize: 17,
    borderRadius: 50,
    padding: 15,
    width: 50,
    height: 50,
    textAlign: "center",
    margin: 10,
    color: "#E9E9E9",
    fontFamily: "AlbertSans-Bold",
  },
  itemNome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#E9E9E9",
    fontFamily: "AlbertSans-Bold",
    flexShrink: 1,
    flexWrap: "wrap",
    maxWidth: "50%",
  },
  itemDescricao: {
    fontSize: 16,
    color: "#C0C0C0",
    fontFamily: "AlbertSans-Regular",
    marginHorizontal: 15,
    paddingTop: 5,
  },
  itemValor: {
    fontSize: 20,
    color: "#E9E9E9",
    fontFamily: "AlbertSans-Bold",
  },
  semItens: {
    fontSize: 15,
    textAlign: "center",
    color: "#E9E9E9",
    fontFamily: "AlbertSans-Italic",
  },
  botaoComIcone: {
    alignSelf: "center",
    padding: 50,
  },
});
