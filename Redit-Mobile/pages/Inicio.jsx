import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const InicioScreen = ({ navigation }) => {
  const [username, setUsername] = useState(''); // Estado para almacenar el nombre de usuario

  const handleIngresar = () => {
    if (username.trim() === '') {
      alert('Por favor, ingresa tu nombre de usuario.');
      return;
    }
    navigation.navigate('Home', { username }); // Pasar el nombre de usuario a la página Home
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/Logo.png')}
        style={styles.logo}
      />

      {/* Campo para el nombre de usuario */}
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu nombre de usuario"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />

      {/* Botón Ingresar */}
      <TouchableOpacity style={styles.button} onPress={handleIngresar}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100,
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    width: '80%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#28a745', // Verde
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InicioScreen;
