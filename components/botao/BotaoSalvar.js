import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BotaoSalvar({ onPress }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.botaoSalvar} onPress={onPress}>
      <Text style={styles.textoSalvar}>Salvar</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botaoSalvar: {
    backgroundColor: "green",
    margin: 20,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  textoSalvar: {
    color: "#fff",
    fontSize: 16,
  },
});
