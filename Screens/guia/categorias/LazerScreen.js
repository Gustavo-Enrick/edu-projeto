import { ScrollView, StyleSheet, Text, View } from 'react-native';
import styles from '../../../css/styles';

export default function LazerScreen() {
  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text style={styles.tituloText}>
            🎉 Lazer
        </Text>
        <Text style={styles.subtituloText}>
            Descrição da Categoria:
        </Text>
        <Text style={styles.textoText}>
            Inclui cinema, shows, viagens, hobbies, bares, restaurantes e qualquer atividade recreativa.
        </Text>
        <Text style={styles.subtituloText}>
            Informações importantes:
        </Text>
        <Text style={styles.textoText}>
          O lazer é essencial para o bem-estar, mas deve ser equilibrado com a saúde financeira. Gastos excessivos podem comprometer o orçamento.
        </Text>
        <Text style={styles.subtituloText}>
            ✍️ Dicas:
        </Text>
        <Text style={styles.textoText}>
          • Defina um limite mensal para lazer.
        </Text>
        <Text style={styles.textoText}>
          • Busque opções gratuitas ou com desconto.
        </Text>
        <Text style={styles.textoText}>
          • Planeje com antecedência eventos maiores.
        </Text>
        <Text style={styles.textoText}>
          • Prefira qualidade a quantidade.
        </Text>
      </View>
    </ScrollView>
  );
}

