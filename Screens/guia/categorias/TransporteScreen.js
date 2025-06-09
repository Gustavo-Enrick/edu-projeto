import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';

export default function TransporteScreen() {
  return (
    <ScrollView style={styles.background} contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Transporte</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>O que entra nessa categoria?</Text>
          <Text style={styles.text}>
            Gastos com <Text style={styles.highlight}>combustível</Text>, <Text style={styles.highlight}>transporte público</Text>, <Text style={styles.highlight}>aplicativos de corrida</Text>, <Text style={styles.highlight}>manutenção</Text>, <Text style={styles.highlight}>seguro</Text> e outros relacionados ao deslocamento.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Por que controlar?</Text>
          <Text style={styles.text}>
            Deslocamentos diários acumulam custos. Com escolhas conscientes, é possível <Text style={styles.highlight}>economizar</Text> sem comprometer a mobilidade.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dicas práticas</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              1. Agrupe compromissos para <Text style={styles.highlight}>reduzir trajetos</Text>.
            </Text>
            <Text style={styles.listItem}>
              2. Prefira o <Text style={styles.highlight}>transporte público</Text> sempre que possível.
            </Text>
            <Text style={styles.listItem}>
              3. Mantenha o <Text style={styles.highlight}>veículo revisado</Text> para evitar surpresas.
            </Text>
            <Text style={styles.listItem}>
              4. Use <Text style={styles.highlight}>bicicleta</Text> ou <Text style={styles.highlight}>caronas</Text> como alternativas sustentáveis.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Benefícios</Text>
          <Text style={styles.text}>
            Planejando bem, você reduz gastos, contribui com o meio ambiente e <Text style={styles.highlight}>ganha mais tempo e liberdade</Text>.
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
    backgroundColor: '#FFA72655',
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
