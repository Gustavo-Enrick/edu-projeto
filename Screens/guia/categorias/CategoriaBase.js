import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../css/styles';
import IconFontAwesome6 from 'react-native-vector-icons/FontAwesome6';

export default function CategoriaBase({ 
  titulo, 
  icone, 
  descricao, 
  informacoes, 
  dicas,
  corTema = '#FFB056' 
}) {
  const navigation = useNavigation();

  return (
    <ScrollView style={estilos.container}>
      <View style={[estilos.header, { backgroundColor: corTema }]}>
        <Text style={estilos.tituloHeader}>{icone} {titulo}</Text>
      </View>
      
      <View style={estilos.conteudo}>
        <View style={estilos.secao}>
          <Text style={estilos.tituloSecao}>📋 Descrição da Categoria:</Text>
          <Text style={styles.textoText}>{descricao}</Text>
        </View>

        <View style={estilos.secao}>
          <Text style={estilos.tituloSecao}>💡 Informações Importantes:</Text>
          <Text style={styles.textoText}>{informacoes}</Text>
        </View>

        <View style={estilos.secao}>
          <Text style={estilos.tituloSecao}>✍️ Dicas Práticas:</Text>
          {dicas.map((dica, index) => (
            <View key={index} style={estilos.dicaContainer}>
              <Text style={estilos.dicaBullet}>•</Text>
              <Text style={styles.textoText}>{dica}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity 
          style={[estilos.botaoAcao, { backgroundColor: corTema }]}
          onPress={() => navigation.navigate('ListaCategorias', { nomeCategoria: titulo })}
        >
          <IconFontAwesome6 name="list" size={20} color="#333" />
          <Text style={estilos.textoBotao}>Ver {titulo}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2929',
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  tituloHeader: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'AlbertSans-Bold',
  },
  conteudo: {
    padding: 20,
  },
  secao: {
    marginBottom: 25,
    backgroundColor: '#3C3C3C',
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFB056',
  },
  tituloSecao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700', // Cor dourada bem clara e visível
    marginBottom: 10,
    fontFamily: 'AlbertSans-Bold',
  },
  dicaContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  dicaBullet: {
    fontSize: 16,
    color: '#FFB056',
    marginRight: 8,
    marginTop: 2,
  },
  botaoAcao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
    gap: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'AlbertSans-Bold',
  },
});