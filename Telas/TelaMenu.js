import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GastosContext } from "../context/GastosProvider";
import Visibilidade from "../components/visivel/Visibilidade";
import { PieChart } from "react-native-gifted-charts";
import { ScrollView } from "react-native-web";

export default function TelaMenu() {
  const { gastos, loadGastos } = useContext(GastosContext);
  const [balanco, setBalanco] = useState(0);
  const [receita, setReceita] = useState(0);
  const [despesa, setDespesa] = useState(0);
  const [visivel, setVisivel] = useState(false);
  const pieData = [
    { value: 54, color: "#177AD5", text: "54%" },
    { value: 40, color: "#79D2DE", text: "30%" },
    { value: 20, color: "#ED6665", text: "26%" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View>
        <StatusBar style="auto" />
        <View>
          <Text style={styles.title}>Balanço Mensal</Text>
          {/*Muda a visibilidade conforme o clique do olho */}
          {visivel ? <Text>{`R$ ${balanco}`}</Text> : <Text>****</Text>}
          <Visibilidade visivel={visivel} setVisivel={setVisivel} />
          <View>
            <Text>Receitas</Text>
            <Text>{`R$ ${receita}`}</Text>
            <Text>Despesas</Text>
            <Text>{`R$ ${despesa}`}</Text>
          </View>
        </View>
        <View>
          {/*Trazer os dados do Provider */}
          <Text>Valor por categoria</Text>
          <View>
            <PieChart
              showText
              textColor="black"
              radius={150}
              textSize={20}
              showTextBackground
              textBackgroundRadius={26}
              data={pieData}
            />
          </View>
        </View>
        {/*Eliminar se não achar nada de útil*/}
        <Text style={styles.title}>Lista de Gastos</Text>

        {gastos.length === 0 ? (
          <Text style={styles.emptyText}>Nenhum gasto cadastrado.</Text>
        ) : (
          <FlatList
            data={gastos}
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.titulo}</Text>
                <Text>Valor: R$ {item.gasto}</Text>
                <Text>Data Limite: {item.dataLimite}</Text>
                <Text>Categoria: {item.categoria}</Text>
                <Text>Grupo: {item.grupo}</Text>
              </View>
            )}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 18,
    color: "#888",
  },
  list: {
    flexGrow: 1,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
