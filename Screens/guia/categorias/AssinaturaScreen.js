import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AssinaturaScreen() {
  return (
    <ScrollView>
      <View>
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


const styles = StyleSheet.create({
  tituloText: {
    fontFamily: "AlbertSans-Regular",
    fontSize: 40,
    paddingTop: 5,
    textAlign: 'center',
    marginBottom: 10
  },

    subtituloText: {
    fontFamily: "AlbertSans-Regular",
    fontSize: 20,
    paddingTop: 5,
    paddingLeft: 5,
    marginBottom: 10
  },

    textoText: {
    fontFamily: "AlbertSans-Regular",
    fontSize: 16,
    paddingTop: 5,
    paddingLeft: 5,
    marginBottom: 10
  },
});
