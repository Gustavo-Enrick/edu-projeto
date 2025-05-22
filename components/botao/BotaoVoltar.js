import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BotaoVoltar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoVoltar}>←</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  botaoVoltar: {
    backgroundColor: "#FFA500",
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
