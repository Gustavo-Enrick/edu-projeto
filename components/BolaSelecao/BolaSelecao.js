import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// Ele cria as bolinhas de seleção,mudar só a cor depois

export default function BolaSelecao({ setCategoria }) {
  const [selecionado, setSelecionado] = useState(null);

  const categorias = [
    "Saúde",
    "Assinatura",
    "Vestuária",
    "Transporte",
    "Alimentação",
    "Investimento",
    "Salario",
  ];

  return (
    <View style={styles.listaContainer}>
      {categorias.map((categoria, index) => (
        <TouchableOpacity
          key={index}
          style={styles.container}
          onPress={() => {
            setSelecionado(categoria);
            setCategoria(categoria);
          }}
        >
          <View
            style={[
              styles.bolinha,
              selecionado === categoria && styles.bolinhaPreenchida,
            ]}
          />
          <Text style={styles.texto}>{categoria}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listaContainer: {
    marginTop: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  bolinha: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#4caf50",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  bolinhaPreenchida: {
    backgroundColor: "#4caf50", // Cor da bola preenchida
    borderColor: "#fff", // Cor da borda da bola preenchida
  },
  texto: {
    fontSize: 16,
  },
});
