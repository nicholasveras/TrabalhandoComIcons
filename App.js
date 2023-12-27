import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nicholas Dev</Text>

      <FontAwesome
      name='home'
      size={35}
      color="#11118c"
      />

      <FontAwesome
      name='user'
      size={35}
      color="#54a300"
      />

      <Feather
      name='gift'
      size={35}
      color="#7665ff"
      />

      <TouchableOpacity style={styles.btnYoutube}>
        <FontAwesome
        name='youtube'
        size={35}
        color="#FFF"
        />
        <Text style={styles.btnText}>Acessar canal</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnYoutube: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#FF0000',
    borderRadius: 5,
  },
  btnText: {
    paddingLeft: 10,
    color: "#FFF"
  }
});

// Documentação https://github.com/oblador/react-native-vector-icons

// Todos os icones https://oblador.github.io/react-native-vector-icons/