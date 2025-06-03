import { TouchableOpacity, StyleSheet } from "react-native";
import IconFontAwesome6 from "../iconSvg/IconFontAwesome6";

export default function BotaoComIcone({ onPress, color, style, size, icon = "circle-plus" }) {
  return (
    <TouchableOpacity style={[styles.botaoComIcone, style]} onPress={onPress}>
        <IconFontAwesome6 name={icon} size={size} color={color}  />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botaoComIcone: {
  },
});
