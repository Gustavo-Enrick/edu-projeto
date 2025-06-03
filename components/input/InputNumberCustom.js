import { View, StyleSheet, Text, TextInput } from "react-native";

export default function InputNumberCustom({
  label,
  onChangeText,
  value,
  placeholder,
  maxLength,
  width = 300,
  required = false,
  errorMessage,
}) {
  return (
    <View>
      <Text style={styles.label}>
        {label} {required ? <Text style={styles.required}>*</Text> : null}
      </Text>

      <TextInput
        style={[styles.input, styles.numberInput, { width }]}
        onChangeText={(text) => {
          const onlyNumbers = text.replace(/[^0-9]/g, "");
          onChangeText(onlyNumbers);
        }}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        keyboardType="numeric"
        inputMode="numeric"
        placeholderTextColor="#9A9A9A"
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
    backgroundColor: "#3C3C3C",
    height: 50,
    borderRadius: 8,
  },
  numberInput: {
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
