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

  // const descricao = categoria?.descricao || "Sem descrição disponível.";

  const [despesas, setDespesas] = useState([]);

  //código que traz as despesas da categoria
  useEffect(() => {
    if (nomeCategoria && elementosPorCategoria[nomeCategoria]) {
      setDespesas(elementosPorCategoria[nomeCategoria]);
    }
  }, [nomeCategoria, elementosPorCategoria]);

  const { removerElementoDaCategoria } = useContext(ElementoContext);

  return (
    <View style={styles.container}>
      {/* <BotaoHelp descricao={descricao} /> */}
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
      {despesas.length > 0 ? (
        <FlatList
          data={despesas}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itensConteiner}>
              <Text
                style={[
                  styles.dataFormatoRedondo,
                  { backgroundColor: categoria.cor },
                ]}
              >
                {item.dataExpiracao}
              </Text>

              <TouchableOpacity
                style={styles.itemConteiner}
                onPress={() =>
                  navigation.navigate("EditarItem", {
                    nomeCategoria: nomeCategoria,
                    nomeElemento: item.nome,
                  })
                }
              >
                <Text style={styles.itemNome}>{item.nome}</Text>
                <MonetaryText style={styles.itemValor} value={item.valor} />
              </TouchableOpacity>

              <BotaoComIcone
                onPress={() =>
                  removerElementoDaCategoria(nomeCategoria, item.nome)
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
          Ainda não há {despesaOuReceita} associadas a essa categoria.
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
    color: "#3C3C3C",
    marginBottom: 8,
    fontFamily: "AlbertSans-Bold",
    fontWeight: "bold",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingTop: 50,
    paddingBottom: 50,
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
    height: 60,
    borderRadius: 8,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#3c3c3c",
  },
  dataFormatoRedondo: {
    fontSize: 14,
    borderRadius: 50,
    padding: 16,
    width: 50,
    height: 50,
    textAlign: "center",
    margin: 10,
    color: "#E9E9E9",
    fontFamily: "AlbertSans-Bold",
  },
  itemNome: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#E9E9E9",
    fontFamily: "AlbertSans-Bold",
    marginLeft: 15,
  },
  itemValor: {
    fontSize: 15,
    color: "#E9E9E9",
    fontFamily: "AlbertSans-Bold",
    marginRight: 15,
  },
  semItens: {
    fontSize: 15,
    textAlign: "center",
    color: "#E9E9E9",
    fontFamily: "AlbertSans-Bold",
    marginTop: 30,
  },
  botaoComIcone: {
    alignSelf: "center",
    padding: 30,
  },
});
