import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';

export default function MoradiaFixasScreen() {
  return (
    <ScrollView style={styles.background} contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Moradia</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>O que são despesas fixas de moradia?</Text>
          <Text style={styles.text}>
            São os gastos mensais recorrentes e previsíveis relacionados ao lugar onde você mora, como{' '}
            <Text style={styles.highlight}>aluguel</Text>,{' '}
            <Text style={styles.highlight}>financiamento do imóvel</Text>,{' '}
            <Text style={styles.highlight}>IPTU</Text>,{' '}
            <Text style={styles.highlight}>condomínio</Text> e{' '}
            <Text style={styles.highlight}>seguros residenciais</Text>.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quanto gastar?</Text>
          <Text style={styles.text}>
            Especialistas recomendam que as despesas fixas de moradia não ultrapassem{' '}
            <Text style={styles.highlight}>30% da sua renda líquida mensal</Text>, pois são gastos essenciais e comprometer mais que isso pode impactar outras áreas do orçamento.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Por que controlar?</Text>
          <Text style={styles.text}>
            Gastos fixos altos podem limitar sua{' '}
            <Text style={styles.highlight}>flexibilidade financeira</Text> e aumentar o risco de endividamento caso ocorra alguma emergência.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Como otimizar?</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              1. Negocie o valor do <Text style={styles.highlight}>aluguel</Text> ou revise seu contrato de financiamento.
            </Text>
            <Text style={styles.listItem}>
              2. Planeje o pagamento do <Text style={styles.highlight}>IPTU</Text> para evitar multas.
            </Text>
            <Text style={styles.listItem}>
              3. Avalie o custo-benefício do <Text style={styles.highlight}>condomínio</Text> e seus serviços.
            </Text>
            <Text style={styles.listItem}>
              4. Contrate seguros residenciais que atendam suas necessidades, sem excessos.
            </Text>
            <Text style={styles.listItem}>
              5. Evite gastos extras desnecessários que impactem suas despesas fixas.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Benefícios do controle</Text>
          <Text style={styles.text}>
            Um bom controle das despesas fixas traz{' '}
            <Text style={styles.highlight}>segurança</Text>,{' '}
            <Text style={styles.highlight}>estabilidade financeira</Text> e liberdade para investir e planejar o futuro.
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
