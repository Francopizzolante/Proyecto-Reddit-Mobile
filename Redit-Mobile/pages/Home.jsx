import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import BarraLateral from '../componentes/BarraLateral';
import BarraSuperior from '../componentes/BarraSuperior';
import Post from '../componentes/Post';

const HomeScreen = ({ navigation, route }) => {
  const { username } = route.params; // Obtener el nombre de usuario desde las rutas

  return (
    <View style={styles.container}>
      {/* Pasar el username a BarraSuperior */}
      <BarraSuperior navigation={navigation}/>
      <View style={styles.mainContent}>
        {/* Pasar el username a BarraLateral */}
        <BarraLateral navigation={navigation} username={username} />
        <ScrollView style={styles.feed}>
          {/* Mensaje de bienvenida con el nombre del usuario */}
          <Text style={styles.welcomeText}>Bienvenido, {username}</Text>

          {/* Publicaciones */}
          <Post
            author="TechExpert"
            title="Actualización SSD"
            description="Guía sobre cómo actualizar tu SSD NVMe de manera eficiente."
            image="https://via.placeholder.com/300x200"
            likes={1}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  mainContent: {
    flex: 1,
    flexDirection: 'row',
  },
  feed: {
    flex: 1,
    padding: 10,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
