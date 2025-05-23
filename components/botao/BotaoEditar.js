import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IconSvg from "../iconSvg/IconSvg";

export default function BotaoEditar({ nomeCategoria, nomeItem }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() =>
          navigation.navigate("EditarItem", {
            nomeCategoria: nomeCategoria,
            nomeElemento: nomeItem,
          })
        }
      >
        <IconSvg name="edit" color="#FFFF00" size={20}></IconSvg>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  botaoVoltar: {
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textoVoltar: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});
