import { ScrollView, StyleSheet, Text, View } from 'react-native';
import styles from '../../../css/styles';

export default function SaudeScreen() {
  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text style={styles.tituloText}>
            🏥 Saúde
        </Text>
        <Text style={styles.subtituloText}>
            Descrição da Categoria:
        </Text>
        <Text style={styles.textoText}>
            Engloba consultas, exames, medicamentos, plano de saúde, odontologia, terapias, entre outros.
        </Text>
        <Text style={styles.subtituloText}>
            Informações importantes:
        </Text>
        <Text style={styles.textoText}>
          Cuidar da saúde evita gastos ainda maiores no futuro. É uma despesa essencial que deve estar no planejamento mensal.
        </Text>
        <Text style={styles.subtituloText}>
            ✍️ Dicas:
        </Text>
        <Text style={styles.textoText}>
          • Faça check-ups regulares.
        </Text>
        <Text style={styles.textoText}>
          • Use o SUS sempre que possível.
        </Text>
        <Text style={styles.textoText}>
          • Tenha um fundo para emergências médicas.
        </Text>
        <Text style={styles.textoText}>
          • Avalie se o plano de saúde atende suas necessidades.
        </Text>
      </View>
    </ScrollView>
  );
}
