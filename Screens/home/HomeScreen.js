import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native";
import { CategoriaContext } from "../../contexts/CategoriaContext";
import PieChart from "react-native-pie-chart";
import IconImage from "../../components/iconImage/IconImage";

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
        <Text style={styles.balancoMensal}>
          R$ {balancoMensal().toFixed(2)}
        </Text>

        <View style={styles.resumoContainer}>
          <View style={styles.cardResumo}>
            <IconImage source="seta_cima"></IconImage>
            <Text style={styles.textoLabelResumo}>Receitas</Text>
            <Text style={styles.textoReceita}>R$ {receita().toFixed(2)}</Text>
          </View>       
          <View style={styles.cardResumo}>
            <Text style={styles.textoLabelResumo}>Despesas</Text>
            <Text style={styles.textoDespesa}>R$ {despesa().toFixed(2)}</Text>
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
                  <Text style={styles.textoValor}>
                    R$ {item.valorTotal.toFixed(2)}
                  </Text>
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
    paddingHorizontal: 16,
  },
  header: {
    backgroundColor: "#FFB056",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    padding: 24,
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
    justifyContent: "space-around",
    marginTop: 16,
  },
  cardResumo: {
    alignItems: "start",
    marginHorizontal: 40,
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
    fontWeight: "bold",
    marginTop: 4,
  },
  tituloSecao: {
    fontSize: 20,
    color: "#E9E9E9",
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 12,
    marginHorizontal: 10,
  },
  graficoContainer: {
    backgroundColor: "#FFB056",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 7,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  legenda: {
    flex: 1,
  },
  itemLegenda: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  colunaCor: {
    alignItems: "center",
    width: 20,
    marginHorizontal: 5,
  },
  corLegenda: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  colunaCategoria: {
    flex: 1,
  },
  textoCategoria: {
    color: "#3C3C3C",
    fontWeight: "bold",
  },
  colunaValor: {
    width: 100,
    alignItems: "flex-start",
    marginHorizontal: 1,
  },
  textoValor: {
    color: "#3C3C3C",
    fontWeight: "bold",
    fontSize: 14,
  },
});
