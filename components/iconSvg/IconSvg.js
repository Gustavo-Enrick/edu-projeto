import { FontAwesome6 } from "react-native-vector-icons";
import Styles from "./Style";

function IconSvg({ name, size = Styles.iconSvg.size, color = "black" }) {
  return <FontAwesome6 name={name} size={size} color={color} />;
}

export default IconSvg;
