// /pages/Inicio.jsx
import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const Inicio = ({ onLoginClick }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Logo.png')} style={styles.logo} />
      <Text style={styles.title}>Bienvenido a la App</Text> 
      <Button title="Ingresar" onPress={onLoginClick} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', 
  },
  logo: {
    width: 150,
    height: 150, 
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', 
    marginBottom: 20,
  },
});

export default Inicio;
