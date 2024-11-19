import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BarraLateral = ({ navigation, username }) => {
  return (
    <View style={styles.sidebar}>
        <Image
            source={{ uri: 'https://via.placeholder.com/80' }} // Cambia por la URL real de la imagen
            style={styles.profilePic}
        />
        <Text style={styles.name}>{username}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home', {username})}>
            <Text style={styles.menuItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CrearPost', {username})}>
            <Text style={styles.menuItem}>Crear post</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Likes', {username})}>
            <Text style={styles.menuItem}>Likes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Posts', {username})}>
            <Text style={styles.menuItem}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Comments', {username})}>
            <Text style={styles.menuItem}>Comments</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    width: '25%',
    backgroundColor: '#2b2b2b',
    alignItems: 'center',
    paddingVertical: 20,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  menuItem: {
    color: '#fff',
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default BarraLateral;
