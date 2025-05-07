import React from "react";
import { Image } from "react-native";
import Styles from "./Style";

const imageMap = {
  seta_cima: require('../../assets/icon_seta_cima_circulo.png'),
};

function IconImage({ source }) {
  return <Image style={Styles.iconImage} source={imageMap[source]} />;
}
export default IconImage;
