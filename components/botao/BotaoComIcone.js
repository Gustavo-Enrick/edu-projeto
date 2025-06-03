import { TouchableOpacity, StyleSheet } from "react-native";
import IconSvg from "../iconSvg/IconSvg";

export default function BotaoComIcone({ onPress, color, style, size, icon = "circle-plus" }) {
  return (
    <TouchableOpacity style={[styles.botaoComIcone, style]} onPress={onPress}>
        <IconSvg name={icon} size={size} color={color}  />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botaoComIcone: {
  },
});
