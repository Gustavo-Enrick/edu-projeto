import { Text } from "react-native";

function getFontSize(textoFormatado, style) {
  const comprimento = textoFormatado.length;

  if (comprimento > 12) return 14;

  return style.fontSize;
}

function MonetaryText({ value, style, resize = true, digits = 2 }) {
  const formatado = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: digits,
  });

  const fontSize = getFontSize(formatado, style);

  if (resize) return <Text style={[style, { fontSize }]}>{formatado}</Text>;

  return <Text style={style}>{formatado}</Text>;
}

export default MonetaryText;
