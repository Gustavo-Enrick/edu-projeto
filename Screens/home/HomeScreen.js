import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { CategoriaContext } from "../../contexts/CategoriaContext";
import PieChart from "react-native-pie-chart";
import MonetaryText from "../../components/monetaryText/MonetaryText";
import IconFontAwesome6 from "../../components/iconSvg/IconFontAwesome6";
import { ElementoContext } from "../../contexts/ElementoProvider";

export default function HomeScreen() {
  const { categorias } = useContext(CategoriaContext);

  const categoriasAtivas = categorias.filter(
    (categoria) => categoria.ativo && categoria.valorTotal > 0
  );

  const { elementosPorCategoria } = useContext(ElementoContext);
  const diaAtual = new Date().getDate();

  const elementosDeHoje = categoriasAtivas.flatMap(
    (categoria) =>
      elementosPorCategoria[categoria.categoria]
        ?.filter((el) => el.dia === diaAtual)
        .map((el) => ({
          ...el,
          categoria: categoria.categoria,
          cor: categoria.cor,
        })) || []
  );

  const receita = () => {
    let categoria = categorias.find(
      (categoria) => categoria.categoria === "Receita" && categoria.ativo
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

  const balancoMensal = () => receita() - despesa();

  const addSeries = (categorias) =>
    categorias
      .filter((categoria) => categoria.valorTotal > 0)
      .map((categoria) => ({
        value: categoria.valorTotal,
        color: categoria.cor,
      }));

  const series = addSeries(categoriasAtivas);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Balanço Mensal</Text>
          <MonetaryText
            style={styles.balancoMensal}
            resize={false}
            value={balancoMensal()}
          />

          <View style={styles.resumoContainer}>
            <View style={styles.iconResumo}>
              <IconFontAwesome6
                name="circle-arrow-up"
                color="#3BA844"
                size={35}
              />
            </View>
            <View style={styles.cardResumo}>
              <Text style={styles.textoLabelResumo}>Receitas</Text>
              <MonetaryText style={styles.textoReceita} value={receita()} />
            </View>

            <View style={styles.spaceResumo} />

            <View style={styles.iconResumo}>
              <IconFontAwesome6
                name="circle-arrow-down"
                color="#D6291B"
                size={35}
              />
            </View>
            <View style={styles.cardResumo}>
              <Text style={styles.textoLabelResumo}>Despesas</Text>
              <MonetaryText style={styles.textoDespesa} value={despesa()} />
            </View>
          </View>
        </View>

        <Text style={styles.tituloSecao}>Valor por Categoria</Text>
        <View style={styles.listaHojeContainer1}>
          {series.length > 0 ? (
            <View style={styles.graficoContainer}>
              <PieChart widthAndHeight={110} cover={0.55} series={series} />
              <View style={styles.legenda}>
                {categoriasAtivas.map((item) => (
                  <View style={styles.itemLegenda} key={item.categoria}>
                    <View style={styles.colunaCor}>
                      <View
                        style={[
                          styles.corLegenda,
                          { backgroundColor: item.cor },
                        ]}
                      />
                    </View>
                    <View style={styles.colunaCategoria}>
                      <Text style={styles.textoCategoria}>
                        {item.categoria}
                      </Text>
                    </View>
                    <View style={styles.colunaValor}>
                      <MonetaryText
                        style={styles.textoValor}
                        value={item.valorTotal}
                      />
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ) : (
            <View style={styles.conteinerSemDados}>
              <Text style={styles.textoSemDados}>
                Adicione valores às categorias para os dados serem exibidos.
              </Text>
            </View>
          )}
        </View>

        <Text style={styles.tituloSecao}>Para Hoje</Text>
        <View style={styles.listaHojeContainer}>
          {elementosDeHoje.length > 0 ? (
            <ScrollView
              style={styles.listaHojeScroll}
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}
            >
              {Object.entries(
                elementosDeHoje
                  .sort((a, b) => a.categoria.localeCompare(b.categoria))
                  .reduce((acc, el) => {
                    if (!acc[el.categoria]) acc[el.categoria] = [];
                    acc[el.categoria].push(el);
                    return acc;
                  }, {})
              ).map(([categoria, itens]) => (
                <View key={categoria} style={styles.grupoCategoria}>
                  <Text style={styles.tituloCategoriaHoje}>{categoria}</Text>
                  {itens.map((el, index) => (
                    <View
                      key={index}
                      style={[styles.itemHoje, { backgroundColor: el.cor }]}
                    >
                      <Text style={styles.nomeHoje}>{el.titulo}</Text>
                      <MonetaryText style={styles.valorHoje} value={el.valor} />
                    </View>
                  ))}
                </View>
              ))}
            </ScrollView>
          ) : (
            <View style={styles.conteinerSemDados}>
              <Text style={styles.textoSemDados}>
                Nenhum item previsto para hoje!
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
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
    paddingTop: 70,
    paddingBottom: 30,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    color: "#3C3C3C",
    marginBottom: 8,
    fontFamily: "AlbertSans-Bold",
  },
  balancoMensal: {
    fontSize: 32,
    color: "#3C3C3C",
    fontFamily: "AlbertSans-Bold",
  },
  resumoContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  cardResumo: {
    alignItems: "flex-start",
  },
  iconResumo: {
    paddingRight: 5,
    justifyContent: "center",
  },
  spaceResumo: {
    marginHorizontal: 10,
  },
  textoReceita: {
    color: "#3BA844",
    fontSize: 20,
    fontFamily: "AlbertSans-Bold",
  },
  textoDespesa: {
    color: "#D6291B",
    fontSize: 20,
    fontFamily: "AlbertSans-Bold",
  },
  textoLabelResumo: {
    color: "#3C3C3C",
    fontSize: 15,
    fontFamily: "AlbertSans-Bold",
    marginTop: 4,
  },
  conteinerSemDados: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3C3C3C", // para garantir o fundo cinza
    borderRadius: 16,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    height: 200,
  },
  textoSemDados: {
    flex: 1,
    marginTop: 4,
    fontSize: 15,
    textAlign: "center",
    color: "#6b6b6b",
    fontFamily: "AlbertSans-Bold",
  },
  tituloSecao: {
    fontSize: 20,
    color: "#E9E9E9",
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 30,
    marginBottom: 12,
  },
  graficoContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#3C3C3C",
    borderRadius: 16,
    marginHorizontal: 10,
    paddingVertical: 14,
    paddingHorizontal: 5,
    height: 200,
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
    color: "#E9E9E9",
    fontFamily: "AlbertSans-Bold",
  },
  colunaValor: {
    width: 100,
    alignItems: "flex-start",
  },
  textoValor: {
    color: "#E9E9E9",
    fontFamily: "AlbertSans-Bold",
    fontSize: 14,
  },
  listaHojeContainer: {
    backgroundColor: "#3C3C3C",
    borderRadius: 16,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    height: 200,
  },
  listaHojeContainer1: {
    backgroundColor: "#3C3C3C",
    borderRadius: 16,
    marginHorizontal: 10,
    paddingHorizontal: 10,

    height: 200,
  },
  listaHojeScroll: {
    flex: 1,
  },
  grupoCategoria: {
    marginBottom: 5,
  },
  tituloCategoriaHoje: {
    fontSize: 16,
    fontFamily: "AlbertSans-Bold",
    color: "#E9E9E9",
    marginBottom: 8,
    marginTop: 5,
  },
  itemHoje: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 8,
    flexDirection: "row",
  },
  nomeHoje: {
    fontFamily: "AlbertSans-Regular",
    fontSize: 14,
    color: "#E9E9E9",
    flex: 1,
  },
  valorHoje: {
    fontFamily: "AlbertSans-Regular",
    fontSize: 14,
    color: "#E9E9E9",
  },
});
