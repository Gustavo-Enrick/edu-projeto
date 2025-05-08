import React from "react";
import Icon from "react-native-vector-icons/FontAwesome6";
import Styles from "./Style";

function IconSvg({ name, size, color = "black" }) {
  return <Icon name={name} size={Styles.iconSvg.size} color={color} />;
}

export default IconSvg;
