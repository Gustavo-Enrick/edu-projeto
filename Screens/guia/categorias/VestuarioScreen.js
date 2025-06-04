import { ScrollView, StyleSheet, Text, View } from 'react-native';
import styles from '../../../css/styles';

export default function VestuarioScreen() {
  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text style={styles.tituloText}>
            👕 Vestuário
        </Text>
        <Text style={styles.subtituloText}>
            Descrição da Categoria:
        </Text>
        <Text style={styles.textoText}>
            Compras de roupas, calçados e acessórios entram nessa categoria, tanto itens essenciais quanto por desejo.
        </Text>
        <Text style={styles.subtituloText}>
            Informações importantes:
        </Text>
        <Text style={styles.textoText}>
          Gastos impulsivos com roupas podem prejudicar o orçamento. Avalie a real necessidade de cada compra.
        </Text>
        <Text style={styles.subtituloText}>
            ✍️ Dicas:
        </Text>
        <Text style={styles.textoText}>
          • Compre apenas o que for necessário.
        </Text>
        <Text style={styles.textoText}>
          • Avalie qualidade e durabilidade.
        </Text>
        <Text style={styles.textoText}>
          • Aproveite liquidações e brechós.
        </Text>
        <Text style={styles.textoText}>
          • Organize seu guarda-roupa para evitar compras repetidas.
        </Text>
      </View>
    </ScrollView>
  );
}
