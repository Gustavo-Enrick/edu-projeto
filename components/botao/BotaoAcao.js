import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function BotaoAcao({ label, style, onPress }) {
  return (
    <TouchableOpacity style={[styles.botaoAcao, style]} onPress={onPress}>
      <Text style={[styles.label, style]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botaoAcao: {
    width: 300,
    height: 60,
    margin: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontFamily: "AlbertSans-Regular",
    fontSize: 20,
  },
});
