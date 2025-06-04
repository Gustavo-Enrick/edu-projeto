import { ScrollView, StyleSheet, Text, View } from 'react-native';
import styles from '../../../css/styles';

export default function MercadoScreen() {
  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text style={styles.tituloText}>
            🛒 Mercado
        </Text>
        <Text style={styles.subtituloText}>
            Descrição da Categoria:
        </Text>
        <Text style={styles.textoText}>
            Refere-se às compras de alimentos, produtos de limpeza e itens essenciais do dia a dia.
        </Text>
        <Text style={styles.subtituloText}>
            Informações importantes:
        </Text>
        <Text style={styles.textoText}>
          Esse é um dos principais gastos mensais. Planejamento e controle são essenciais para evitar desperdícios.
        </Text>
        <Text style={styles.subtituloText}>
            ✍️ Dicas:
        </Text>
        <Text style={styles.textoText}>
          • Monte uma lista antes de ir às compras.
        </Text>
        <Text style={styles.textoText}>
          • Aproveite promoções, mas evite exageros.
        </Text>
        <Text style={styles.textoText}>
          • Compare preços entre mercados.
        </Text>
        <Text style={styles.textoText}>
          • Evite ir com fome ao mercado.
        </Text>
      </View>
    </ScrollView>
  );
}