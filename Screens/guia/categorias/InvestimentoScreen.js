import { ScrollView, StyleSheet, Text, View } from 'react-native';
import styles from '../../../css/styles';

export default function InvestimentoScreen() {
  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text style={styles.tituloText}>
            📈 Investimento
        </Text>
        <Text style={styles.subtituloText}>
            Descrição da Categoria:
        </Text>
        <Text style={styles.textoText}>
            Envolve aplicações financeiras como poupança, renda fixa, ações, fundos imobiliários, criptomoedas, entre outros.
        </Text>
        <Text style={styles.subtituloText}>
            Informações importantes:
        </Text>
        <Text style={styles.textoText}>
          Investimentos são importantes para construir patrimônio e garantir segurança financeira. É fundamental entender seu perfil de risco.
        </Text>
        <Text style={styles.subtituloText}>
            ✍️ Dicas:
        </Text>
        <Text style={styles.textoText}>
          • Diversifique seus investimentos.
        </Text>
        <Text style={styles.textoText}>
          • Estude sobre o mercado antes de aplicar.
        </Text>
        <Text style={styles.textoText}>
          • Invista com objetivos claros.
        </Text>
        <Text style={styles.textoText}>
          • Revise sua carteira periodicamente.
        </Text>
      </View>
    </ScrollView>
  );
}
