import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';

export default function SaudeScreen() {
  return (
    <ScrollView style={styles.background} contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Saúde</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>O que entra nessa categoria?</Text>
          <Text style={styles.text}>
            Gastos com <Text style={styles.highlight}>consultas</Text>, <Text style={styles.highlight}>exames</Text>, <Text style={styles.highlight}>medicamentos</Text>, <Text style={styles.highlight}>plano de saúde</Text>, <Text style={styles.highlight}>terapias</Text> e <Text style={styles.highlight}>odontologia</Text>.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Por que controlar?</Text>
          <Text style={styles.text}>
            Manter a saúde em dia previne <Text style={styles.highlight}>problemas futuros</Text> e evita gastos emergenciais altos. É uma despesa essencial que precisa estar no seu <Text style={styles.highlight}>planejamento mensal</Text>.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dicas práticas</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              1. Realize <Text style={styles.highlight}>check-ups</Text> regularmente.
            </Text>
            <Text style={styles.listItem}>
              2. Utilize o <Text style={styles.highlight}>SUS</Text> sempre que possível.
            </Text>
            <Text style={styles.listItem}>
              3. Mantenha um <Text style={styles.highlight}>fundo de emergência</Text> para saúde.
            </Text>
            <Text style={styles.listItem}>
              4. Avalie seu <Text style={styles.highlight}>plano de saúde</Text> periodicamente.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Benefícios</Text>
          <Text style={styles.text}>
            Ao cuidar bem da sua saúde, você <Text style={styles.highlight}>evita surpresas financeiras</Text> e melhora sua <Text style={styles.highlight}>qualidade de vida</Text>.
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
    backgroundColor: '#FFA72655', // marca-texto laranja claro
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
