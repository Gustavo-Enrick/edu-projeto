import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import styles from '../../../css/styles';

export default function AssinaturaScreen() {
  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text style={styles.tituloText}>
            📺 Assinatura
        </Text>
        <Text style={styles.subtituloText}>
            Descrição da Categoria:
        </Text>
        <Text style={styles.textoText}>
            Assinaturas mensais incluem serviços como streaming (Netflix, Spotify), softwares (Adobe, Microsoft 365), clubes de assinatura (livros, vinhos, cosméticos), academias, entre outros.
        </Text>
        <Text style={styles.subtituloText}>
            Informações importantes:
        </Text>
        <Text style={styles.textoText}>
          Este tipo de gasto, muitas vezes considerado pequeno por ser recorrente, pode representar uma parcela significativa do orçamento ao final do mês. O principal problema é que muitas pessoas mantêm assinaturas que não utilizam com frequência, o que gera desperdício de dinheiro.
        </Text>
        <Text style={styles.subtituloText}>
            ✍️ Dicas:
        </Text>
        <Text style={styles.textoText}>
          • Revise suas assinaturas mensalmente.
        </Text>
        <Text style={styles.textoText}>
          • Cancele o que não está usando.
        </Text>
        <Text style={styles.textoText}>
          • Verifique se há planos compartilhados mais econômicos.
        </Text>
        <Text style={styles.textoText}>
          • Considere alternativas gratuitas ou mais baratas.
        </Text>
      </View>
    </ScrollView>
    
  );
}
