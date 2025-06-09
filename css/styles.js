// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  tituloText: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 20,
    color: '#333',
  },
 subtituloText: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#FFB056', // Mudança: cor mais clara e destacada
  marginBottom: 10,
  fontFamily: 'AlbertSans-Bold',
},
textoText: {
  fontSize: 16,
  color: '#E0E0E0', // Mudança: cor mais clara para melhor legibilidade
  lineHeight: 24,
  textAlign: 'justify',
  fontFamily: 'AlbertSans-Regular',
},
});

export default styles;
