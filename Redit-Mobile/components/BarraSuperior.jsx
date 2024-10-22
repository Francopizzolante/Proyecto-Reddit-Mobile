// /components/BarraSuperior.jsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const BarraSuperior = ({ user, logout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola, {user.name}</Text>
      <Button title="Cerrar sesión" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#6200ee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BarraSuperior;
