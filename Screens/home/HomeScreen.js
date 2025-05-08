import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CategoriaContext } from "../../contexts/CategoriaContext";
import PieChart from "react-native-pie-chart";
import IconImage from "../../components/iconImage/IconImage";
import MonetaryText from "../../components/monetaryText/MonetaryText";

export default function HomeScreen() {
  const { categorias } = useContext(CategoriaContext);

  const categoriasAtivas = categorias.filter((categoria) => categoria.ativo);

  const receita = () => {
    let categoria = categorias.find(
      (categoria) => categoria.categoria === "Receita"
    );
    return categoria ? categoria.valorTotal : 0;
  };

  const despesa = () => {
    let soma = categorias
      .filter(
        (categoria) => categoria.categoria !== "Receita" && categoria.ativo
      )
      .reduce((acc, curr) => acc + curr.valorTotal, 0);
    return soma ? soma : 0;
  };

  let balancoMensal = () => {
    let subtracao = receita() - despesa();

    return subtracao ? subtracao : 0;
  };

  const addSeries = (categorias) => {
    return categorias
      .filter((categoria) => categoria.valorTotal > 0)
      .map((categoria) => ({
        value: categoria.valorTotal,
        color: categoria.cor,
      }));
  };

  const series = addSeries(categoriasAtivas);

  if (categoriasAtivas.length === 0) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Balanço Mensal</Text>
        <MonetaryText
          style={styles.balancoMensal}
          resize={false}
          value={balancoMensal()}
        ></MonetaryText>

        <View style={styles.resumoContainer}>
          <View style={styles.iconResumo}>
            <IconImage source="seta_cima"></IconImage>
          </View>
          <View style={styles.cardResumo}>
            <Text style={styles.textoLabelResumo}>Receitas</Text>
            <MonetaryText
              style={styles.textoReceita}
              value={receita()}
            ></MonetaryText>
          </View>

          <View style={styles.spaceResumo}></View>

          <View style={styles.iconResumo}>
            <IconImage source="seta_baixo"></IconImage>
          </View>
          <View style={styles.cardResumo}>
            <Text style={styles.textoLabelResumo}>Despesas</Text>
            <MonetaryText
              style={styles.textoDespesa}
              value={despesa()}
            ></MonetaryText>
          </View>
        </View>
      </View>

      <Text style={styles.tituloSecao}>Valor por Categoria</Text>
      <View style={styles.graficoContainer}>
        <PieChart widthAndHeight={120} cover={0.55} series={series} />
        <View style={styles.legenda}>
          <FlatList
            data={categoriasAtivas}
            keyExtractor={(item) => item.categoria}
            renderItem={({ item }) => (
              <View style={styles.itemLegenda}>
                <View style={styles.colunaCor}>
                  <View
                    style={[styles.corLegenda, { backgroundColor: item.cor }]}
                  />
                </View>
                <View style={styles.colunaCategoria}>
                  <Text style={styles.textoCategoria}>{item.categoria}</Text>
                </View>
                <View style={styles.colunaValor}>
                  <MonetaryText
                    style={styles.textoValor}
                    value={item.valorTotal}
                  ></MonetaryText>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2A2929",
  },
  header: {
    backgroundColor: "#FFB056",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingTop: 50,
    paddingBottom: 50,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    color: "#3C3C3C",
    marginBottom: 8,
    fontWeight: "bold",
  },
  balancoMensal: {
    fontSize: 32,
    color: "#000",
    fontWeight: "bold",
  },
  resumoContainer: {
    flexDirection: "row",
    marginTop: 55,
  },
  cardResumo: {
    alignItems: "flex-start",
  },
  spaceResumo: {
    marginHorizontal: 10,
  },
  textoReceita: {
    color: "#3BA844",
    fontSize: 20,
    fontWeight: "bold",
  },
  textoDespesa: {
    color: "#D6291B",
    fontSize: 20,
    fontWeight: "bold",
  },
  textoLabelResumo: {
    color: "#3C3C3C",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 4,
  },
  tituloSecao: {
    fontSize: 20,
    color: "#E9E9E9",
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 50,
    marginBottom: 12,
  },
  graficoContainer: {
    backgroundColor: "#FFB056",
    borderRadius: 16,
    marginHorizontal: 10,
    paddingVertical: 14,
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  legenda: {
    flex: 1,
  },
  itemLegenda: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  colunaCor: {
    alignItems: "center",
    width: 20,
    marginLeft: 5,
  },
  corLegenda: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  colunaCategoria: {
    flex: 1,
  },
  textoCategoria: {
    color: "#3C3C3C",
    fontWeight: "bold",
  },
  colunaValor: {
    width: 115,
    alignItems: "flex-start",
  },
  textoValor: {
    color: "#3C3C3C",
    fontWeight: "bold",
    fontSize: 14,
  },
});
