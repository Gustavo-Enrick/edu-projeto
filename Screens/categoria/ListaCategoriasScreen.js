import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { ElementoContext } from "../../contexts/ElementoProvider";
import BotaoVoltar from "../../components/botao/BotaoVoltar";
import { CategoriaContext } from "../../contexts/CategoriaContext";
import BotaoComIcone from "../../components/botao/BotaoComIcone";
import MonetaryText from "../../components/monetaryText/MonetaryText";
import IconFontAwesome6 from "../../components/iconSvg/IconFontAwesome6";
import IconFontAwesome from "../../components/iconSvg/IconFontAwesome";

export default function ListaCategoriaScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { nomeCategoria } = route.params;
  const { elementosPorCategoria, removerElementoDaCategoriaPorId } =
    useContext(ElementoContext);
  const { categorias } = useContext(CategoriaContext);
  const [modalVisible, setModalVisible] = useState(false);

  const categoria = categorias.find(
    (cat) =>
      cat.categoria.trim().toLowerCase() === nomeCategoria.trim().toLowerCase()
  );

  const despesaOuReceita =
    nomeCategoria === "Receita" ? "Receitas" : "Despesas";

  const [itens, setItens] = useState([]);
  const [modoSelecao, setModoSelecao] = useState(false);
  const [selecionados, setSelecionados] = useState([]);

  useEffect(() => {
    if (nomeCategoria && elementosPorCategoria[nomeCategoria]) {
      const itensOrdenados = [...elementosPorCategoria[nomeCategoria]].sort(
        (a, b) => a.dia - b.dia
      );
      setItens(itensOrdenados);
    }
  }, [nomeCategoria, elementosPorCategoria]);

  const iniciarSelecao = (id) => {
    setModoSelecao(true);
    setSelecionados([id]);
  };

  const toggleSelecionado = (id) => {
    if (selecionados.includes(id)) {
      setSelecionados(selecionados.filter((itemId) => itemId !== id));
    } else {
      setSelecionados([...selecionados, id]);
    }
  };

  const cancelarSelecao = () => {
    setModoSelecao(false);
    setSelecionados([]);
  };

  const toggleSelecionarTodos = () => {
    const todosIds = itens.map((item) => item.id);
    if (selecionados.length === itens.length) {
      setSelecionados([]);
    } else {
      setSelecionados(todosIds);
    }
  };

  const todosSelecionados =
    itens.length > 0 && selecionados.length === itens.length;

  const excluirSelecionados = () => {
    selecionados.forEach((id) =>
      removerElementoDaCategoriaPorId(nomeCategoria, id)
    );
    cancelarSelecao();
  };

  const limitesPorCategoria = {
    Assinatura: 5,
    Investimento: 10,
    Moradia: 30,
    Saúde: 5,
    Transporte: 10,
    Vestuário: 5,
  };

  const descricoesPorCategoria = {
    Assinatura:
      "Evite ultrapassar o limite saudável para esse tipo de despesa.",
    Investimento: "Invista de forma consistente.",
    Moradia:
      "Planeje compras e evite desperdícios para manter o orçamento sob controle.",
    Saúde:
      "Avalie sempre a real necessidade e busque prevenção sempre que possível.",
    Transporte: "Avalie o custo-benefício.",
  };

  const categoriaLimite = limitesPorCategoria[nomeCategoria];
  const descricaoLimite = descricoesPorCategoria[nomeCategoria];

  // Encontra o valor total de receita
  const receita = categorias.find(
    (cat) => cat.categoria.trim().toLowerCase() === "receita"
  );

  const valorRecomendadoCat = receita.valorTotal * (categoriaLimite / 100);

  const totalDespesas = categorias
    .filter((cat) => cat.categoria.toLowerCase() !== "receita" && cat.ativo)
    .reduce((soma, cat) => soma + cat.valorTotal, 0);

  const ultrapassouLimite =
    categoria.categoria.toLowerCase() === "receita"
      ? receita &&
        receita.ativo &&
        receita.valorTotal > 0 &&
        totalDespesas > receita.valorTotal
      : receita &&
        categoriaLimite &&
        receita.valorTotal > 0 &&
        receita.ativo &&
        categoria.valorTotal > valorRecomendadoCat;

  const quantoFalta = totalDespesas - receita.valorTotal;

  return (
    <View style={styles.container}>
      <Text style={[styles.titulo, { backgroundColor: categoria.cor }]}>
        {nomeCategoria}
      </Text>

      <BotaoVoltar />

      <View style={{ alignItems: "center", marginBottom: 10 }}>
        <Text style={styles.subTitulo}>Valor Mensal</Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <MonetaryText
            style={styles.valorMensal}
            value={categoria.valorTotal}
            resize={false}
          />
          {ultrapassouLimite && (
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <IconFontAwesome6
                name="triangle-exclamation"
                color="#FF5050"
                size={24}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.itensTituloArea}>
        <Text style={styles.itensTitulo}>{despesaOuReceita}</Text>

        {modoSelecao && (
          <View style={styles.acoesSelecaoInline}>
            <BotaoComIcone
              onPress={cancelarSelecao}
              icon="times-circle"
              color="#E9E9E9"
              size={24}
            />

            <TouchableOpacity onPress={toggleSelecionarTodos}>
              {todosSelecionados ? (
                <IconFontAwesome
                  name="minus-square"
                  color={categoria.cor}
                  size={28}
                />
              ) : (
                <IconFontAwesome6
                  name="square"
                  color={categoria.cor}
                  size={28}
                />
              )}
            </TouchableOpacity>

            <BotaoComIcone
              onPress={excluirSelecionados}
              icon="trash-can"
              color="red"
              size={24}
            />
          </View>
        )}
      </View>

      {itens.length > 0 ? (
        <FlatList
          data={itens}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            const estaSelecionado = selecionados.includes(item.id);

            return (
              <TouchableOpacity
                onLongPress={() => iniciarSelecao(item.id)}
                onPress={() => {
                  if (modoSelecao) {
                    toggleSelecionado(item.id);
                  } else {
                    navigation.navigate("EditarItem", {
                      nomeCategoria: nomeCategoria,
                      id: item.id,
                    });
                  }
                }}
                style={[
                  styles.itensConteiner,
                  estaSelecionado && { backgroundColor: "#555" },
                ]}
              >
                <Text
                  style={[
                    styles.dataFormatoRedondo,
                    { backgroundColor: categoria.cor },
                  ]}
                >
                  {item.dia}
                </Text>

                <View style={styles.itemConteiner}>
                  <View style={styles.itemTextoArea}>
                    <View style={styles.itemHeader}>
                      <Text style={styles.itemNome}>{item.titulo}</Text>
                      <MonetaryText
                        style={styles.itemValor}
                        value={item.valor}
                      />
                    </View>
                    <Text style={styles.itemDescricao}>{item.descricao}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
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
      />

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <View
            style={{
              backgroundColor: "#3c3c3c",
              borderRadius: 10,
              width: "80%",
              overflow: "hidden",
            }}
          >
            {/* Faixa superior com o título */}
            <View
              style={{
                backgroundColor: categoria.cor,
                paddingVertical: 12,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 22,
                  fontFamily: "AlbertSans-Bold",
                }}
              >
                ATENÇÃO!
              </Text>
            </View>

            {/* Corpo do modal */}
            <View style={{ padding: 20 }}>
              {/* Título descritivo */}
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  fontFamily: "AlbertSans-Bold",
                  // textAlign: "center",
                  marginBottom: 10,
                }}
              >
                {categoria.categoria === "Receita"
                  ? "Valor recomendado"
                  : `Limite recomendado: ${categoriaLimite}%`}
              </Text>

              {/* Valor recomendado */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 16,
                    fontFamily: "AlbertSans-Regular",
                    marginRight: 10,
                  }}
                >
                  Valor:
                </Text>
                <View
                  style={{
                    backgroundColor: "#505050",
                    borderRadius: 8,
                    paddingVertical: 8,
                    paddingHorizontal: 15,
                  }}
                >
                  <MonetaryText
                    digits={valorRecomendadoCat < 0.01 ? 4 : 2}
                    style={{
                      color: "#fff",
                      fontSize: 20,
                      fontFamily: "AlbertSans-Bold",
                    }}
                    value={
                      categoria.categoria === "Receita"
                        ? quantoFalta
                        : valorRecomendadoCat
                    }
                  />
                </View>
              </View>

              {/* Descrição explicativa */}
              <Text
                style={{
                  color: "#fff",
                  fontSize: 16,
                  fontFamily: "AlbertSans-Regular",
                  marginBottom: 20,
                }}
              >
                {categoria.categoria === "Receita"
                  ? "Seus gastos estão superando sua receita. Reveja suas despesas para manter o equilíbrio financeiro."
                  : descricaoLimite}
              </Text>

              {/* Botão de fechar */}
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  backgroundColor: categoria.cor,
                  paddingVertical: 10,
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  Fechar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  },
  itensTituloArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 30,
    marginBottom: 10,
  },
  itensTitulo: {
    fontSize: 24,
    fontFamily: "AlbertSans-Bold",
    color: "#E9E9E9",
    paddingBottom: 30,
  },
  acoesSelecaoInline: {
    flexDirection: "row",
    backgroundColor: "#3c3c3c",
    padding: 15,
    borderRadius: 20,
    gap: 35,
  },
  itensConteiner: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    borderRadius: 8,
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
    marginRight: 20,
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
    padding: 19,
    width: 60,
    height: 60,
    textAlign: "center",
    marginLeft: 20,
    marginRight: 10,
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
    paddingBottom: 50,
    paddingTop: 20,
  },
  acoesSelecao: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
