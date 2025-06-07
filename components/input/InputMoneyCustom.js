import { View, StyleSheet, Text, TextInput } from "react-native";

export default function InputMoneyCustom({
  label,
  onChangeText,
  value,
  placeholder,
  maxLength,
  width = 300,
  required = false,
  errorMessage,
}) {
  const formatMoney = (text) => {
    const number = parseFloat(text);
    if (isNaN(number)) return "";

    return number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleChange = (text) => {
    const onlyNumbers = text.replace(/[^0-9]/g, "");

    const number = parseInt(onlyNumbers, 10);
    if (isNaN(number)) {
      onChangeText("");
      return;
    }

    const valorDecimal = (number / 100).toFixed(2);

    onChangeText(valorDecimal);
  };

  return (
    <View>
      <Text style={styles.label}>
        {label} {required ? <Text style={styles.required}>*</Text> : null}
      </Text>

      <TextInput
        style={[styles.input, styles.moneyInput, { width }]}
        onChangeText={handleChange}
        value={formatMoney(value)}
        placeholder={placeholder}
        placeholderTextColor="#9A9A9A"
        maxLength={maxLength}
        keyboardType="numeric"
        inputMode="numeric"
      />
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: "AlbertSans-Bold",
    color: "#E9E9E9",
    fontSize: 24,
  },
  input: {
    marginTop: 10,
    marginBottom: 60,
    backgroundColor: "#2A2929",
    height: 50,
    borderRadius: 8,
  },
  moneyInput: {
    fontFamily: "AlbertSans-Regular",
    color: "#E9E9E9",
    fontSize: 18,
    paddingHorizontal: 14,
  },
  errorText: {
    color: "#FF6B6B",
    fontSize: 14,
    marginTop: -50,
    marginBottom: 40,
    paddingLeft: 4,
    fontFamily: "AlbertSans-Regular",
  },
  required: {
    color: "red",
  },
});
