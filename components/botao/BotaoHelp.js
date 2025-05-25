import React, { useState } from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const BotaoHelp = ({ descricao }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ position: 'absolute', top: 40, right: 20, zIndex: 10 }}>
      <Pressable onPress={() => setVisible(true)}>
        <AntDesign name="questioncircleo" size={24} color="gray" />
      </Pressable>

      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={styles.text}>{descricao}</Text>
            <Pressable onPress={() => setVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BotaoHelp;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});
