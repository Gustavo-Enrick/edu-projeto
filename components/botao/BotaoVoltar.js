import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IconFontAwesome6 from "../iconSvg/IconFontAwesome6";

export default function BotaoVoltar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <IconFontAwesome6 name="arrow-left-long" size={30} color="#E9E9E9" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: "#4c4c4c",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 50,
    height: 50,
  },
  botaoVoltar: {
    width: 30,
  },
});
