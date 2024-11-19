import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const BarraSuperior = ({ navigation }) => {
  return (
    <View style={styles.topBar}>
      <TextInput
        placeholder="Buscar..."
        placeholderTextColor="#ccc"
        style={styles.searchInput}
      />
      <TouchableOpacity style={styles.searchButton}>
        <Text style={styles.searchButtonText}>Buscar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate('Inicio')} // Navega a la página de inicio
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2b2b2b',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 50,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginRight: 10,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#d9534f',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BarraSuperior;
