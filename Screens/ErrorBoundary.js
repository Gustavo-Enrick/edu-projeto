import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Image } from 'react-native';


export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message || 'Erro desconhecido' };
  }

  componentDidCatch(error, info) {
    console.error('Erro capturado pelo ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>❌ Algo deu errado</Text>
          <Text style={styles.message}>{this.state.errorMessage}</Text>
          <Image
            source={require("../images/tenor.gif")} // ou './tenor.gif', depende da estrutura
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
          />
          <Button
            title="Tentar Novamente"
            onPress={() => this.setState({ hasError: false })}
          />
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  message: { fontSize: 16, color: '#333', textAlign: 'center', marginBottom: 20 },
  gif: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});