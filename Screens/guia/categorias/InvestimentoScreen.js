import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';

export default function InvestimentoScreen() {
  return (
    <ScrollView style={styles.background} contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Investimentos</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>O que são?</Text>
          <Text style={styles.text}>
            São formas de aplicar seu dinheiro para que ele <Text style={styles.highlight}>renda mais com o tempo</Text>. Exemplos incluem:{' '}
            <Text style={styles.highlight}>poupança</Text>, <Text style={styles.highlight}>renda fixa</Text>,{' '}
            <Text style={styles.highlight}>ações</Text>, <Text style={styles.highlight}>fundos imobiliários</Text> e{' '}
            <Text style={styles.highlight}>criptomoedas</Text>.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Por que investir?</Text>
          <Text style={styles.text}>
            Investir permite que você <Text style={styles.highlight}>construa patrimônio</Text>, se prepare para o futuro e conquiste sua{' '}
            <Text style={styles.highlight}>independência financeira</Text>. Também ajuda a proteger seu dinheiro da inflação.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dicas práticas</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              1. Entenda seu <Text style={styles.highlight}>perfil de investidor</Text>: conservador, moderado ou arrojado.
            </Text>
            <Text style={styles.listItem}>
              2. <Text style={styles.highlight}>Diversifique</Text> para reduzir riscos.
            </Text>
            <Text style={styles.listItem}>
              3. Tenha <Text style={styles.highlight}>objetivos claros</Text> antes de investir.
            </Text>
            <Text style={styles.listItem}>
              4. <Text style={styles.highlight}>Estude</Text> os tipos de investimento antes de aplicar.
            </Text>
            <Text style={styles.listItem}>
              5. Revise sua <Text style={styles.highlight}>carteira regularmente</Text>.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Benefícios</Text>
          <Text style={styles.text}>
            Com o tempo, os investimentos certos geram <Text style={styles.highlight}>crescimento financeiro</Text>, maior{' '}
            <Text style={styles.highlight}>estabilidade</Text> e ajudam você a realizar sonhos de médio e longo prazo.
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
