import React from "react";
import { Image } from "react-native";
import Styles from "./Style";

const imageMap = {
  home: require("../../assets/icons/icon_home.png"),
  seta_cima: require("../../assets/icons/icon_seta_cima_circulo.png"),
  seta_baixo: require("../../assets/icons/icon_seta_baixo_circulo.png"),
};

function IconImage({ source, style }) {
  return <Image style={[Styles.iconImage, style]} source={imageMap[source]} />;
}
export default IconImage;
