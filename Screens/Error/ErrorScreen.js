import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Image } from 'react-native';


export default function ErrorScreen({ navigation, route }) {
  const mensagem = route?.params?.mensagem || 'Algo deu errado.';

  return (
    <View style={styles.container}>
      <Image
        source={require("../images/tenor.gif")} // ou './tenor.gif', depende da estrutura
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
      />
      <Text style={styles.title}>Ops!</Text>
      <Text style={styles.message}>{mensagem}</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation?.goBack()}
      >
        <Text style={styles.botaoTexto}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  gif: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
  },
});
