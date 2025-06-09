import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';

export default function AssinaturaScreen() {
  return (
    <ScrollView style={styles.background} contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Assinaturas</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>O que são assinaturas?</Text>
          <Text style={styles.text}>
            Serviços pagos mensalmente, como{' '}
            <Text style={styles.highlight}>Netflix</Text>,{' '}
            <Text style={styles.highlight}>Spotify</Text>, academias ou softwares. Você paga enquanto quiser usar.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Por que controlar?</Text>
          <Text style={styles.text}>
            Assinaturas podem parecer{' '}
            <Text style={styles.highlight}>baratas</Text>, mas somam um valor considerável no final do mês. Muitas vezes, você paga por serviços que{' '}
            <Text style={styles.highlight}>não utiliza</Text>.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Como controlar?</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              1. <Text style={styles.highlight}>Liste todas</Text> as assinaturas ativas.
            </Text>
            <Text style={styles.listItem}>
              2. Pergunte: “Estou <Text style={styles.highlight}>usando</Text> isso?”
            </Text>
            <Text style={styles.listItem}>
              3. <Text style={styles.highlight}>Cancele</Text> as que não usa ou quase não usa.
            </Text>
            <Text style={styles.listItem}>
              4. Verifique <Text style={styles.highlight}>planos familiares</Text> ou combos para reduzir custos.
            </Text>
            <Text style={styles.listItem}>
              5. Prefira <Text style={styles.highlight}>alternativas gratuitas</Text> quando possível.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Benefícios</Text>
          <Text style={styles.text}>
            Controlar suas assinaturas gera{' '}
            <Text style={styles.highlight}>economia real</Text>, liberando dinheiro para{' '}
            <Text style={styles.highlight}>investimentos</Text>, lazer ou emergências.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#2A2929',
  },
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#3c3c3c',
    borderRadius: 12,
    padding: 24,
    width: width * 0.9,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFA726',
    marginBottom: 24,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFA726',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: '#E0E0E0',
    lineHeight: 24,
  },
  highlight: {
    backgroundColor: '#FFA72655', // laranja claro semi-transparente
    borderRadius: 8,
    paddingHorizontal: 6,
  },
  list: {
    paddingLeft: 12,
  },
  listItem: {
    fontSize: 16,
    color: '#E0E0E0',
    lineHeight: 26,
    marginBottom: 6,
  },
});
