import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { CategoriaContext } from "../../contexts/CategoriaContext";
import PieChart from "react-native-pie-chart";

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

  const widthAndHeight = 250;

  const addSeries = (categorias) => {
    const seriesData = categorias
      .filter((categoria) => categoria.valorTotal > 0)
      .map((categoria) => ({
        value: categoria.valorTotal,
        color: categoria.cor,
      }));

    return seriesData;
  };
  const series = addSeries(categoriasAtivas);

  if (categoriasAtivas.length === 0) {
    return;
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Balanço Mensal</Text>
        <Text style={styles.title}>R${balancoMensal()}</Text>

        <Text style={styles.title}>Receitas</Text>
        <Text style={styles.title}>R${receita()}</Text>

        <Text style={styles.title}>Despesas</Text>
        <Text style={styles.title}>R${despesa()}</Text>

        <Text style={styles.title}>Categorias</Text>
        <FlatList
          data={categoriasAtivas}
          keyExtractor={(item) => item.categoria}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View
                style={[styles.colorIndicator, { backgroundColor: item.cor }]}
              />
              <View style={styles.textContainer}>
                <Text style={styles.categoria}>{item.categoria}</Text>
                <Text style={styles.valorTotal}>
                  Total: R$ {item.valorTotal.toFixed(2)}
                </Text>
                <Text style={styles.ativo}>
                  {item.ativo ? "Ativa" : "Inativa"}
                </Text>
              </View>
            </View>
          )}
        />

        <View>
          <Text style={styles.title}>Doughnut</Text>
          <PieChart widthAndHeight={200} cover={0.55} series={series} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  colorIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  categoria: {
    fontSize: 18,
    fontWeight: "bold",
  },
  valorTotal: {
    color: "#555",
  },
  ativo: {
    fontStyle: "italic",
    color: "#888",
  },
});
