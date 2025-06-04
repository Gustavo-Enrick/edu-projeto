import { ScrollView, StyleSheet, Text, View } from 'react-native';
import styles from '../../../css/styles';

export default function TransporteScreen() {
  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text style={styles.tituloText}>
            🚗 Transporte
        </Text>
        <Text style={styles.subtituloText}>
            Descrição da Categoria:
        </Text>
        <Text style={styles.textoText}>
            Inclui combustível, transporte público, aplicativos de corrida, manutenção de veículo, seguro, etc.
        </Text>
        <Text style={styles.subtituloText}>
            Informações importantes:
        </Text>
        <Text style={styles.textoText}>
          Pequenos trajetos diários geram grandes custos mensais. Planejamento e escolhas conscientes ajudam a reduzir gastos.
        </Text>
        <Text style={styles.subtituloText}>
            ✍️ Dicas:
        </Text>
        <Text style={styles.textoText}>
          • Agrupe compromissos para economizar trajetos.
        </Text>
        <Text style={styles.textoText}>
          • Use transporte público sempre que possível.
        </Text>
        <Text style={styles.textoText}>
          • Mantenha o veículo revisado.
        </Text>
        <Text style={styles.textoText}>
          • Considere alternativas como bicicleta ou carona.
        </Text>
      </View>
    </ScrollView>
  );
}
