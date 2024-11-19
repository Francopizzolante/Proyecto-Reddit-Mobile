import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const InicioScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/Logo.png')} // Asegúrate de que el archivo exista en la ruta correcta
        style={styles.logo}
      />

      {/* Botón Ingresar */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Fondo negro
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200, // Ajusta el tamaño del logo según sea necesario
    height: 200,
    resizeMode: 'contain', // Escala la imagen para que se ajuste dentro de los límites
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#28a745', // Verde
    paddingVertical: 15, // Espaciado vertical dentro del botón
    paddingHorizontal: 30, // Espaciado horizontal dentro del botón
    borderRadius: 5, // Bordes redondeados
    alignItems: 'center', // Centrar el texto horizontalmente
  },
  buttonText: {
    color: '#fff', // Texto blanco
    fontSize: 16, // Tamaño del texto
    fontWeight: 'bold', // Texto en negrita
  },
});

export default InicioScreen;
