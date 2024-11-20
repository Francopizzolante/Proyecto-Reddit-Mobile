import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, ActivityIndicator } from 'react-native';
import BarraLateral from '../componentes/BarraLateral';
import BarraSuperior from '../componentes/BarraSuperior';
import Post from '../componentes/Post';
import api from '../api'; // Importa el cliente HTTP

const HomeScreen = ({ navigation, route }) => {
  const { username } = route.params; // Obtener el nombre de usuario desde las rutas
  const [posts, setPosts] = useState([]); // Estado para almacenar los posts
  const [loading, setLoading] = useState(true); // Estado de carga

  // Función para obtener los posts desde el backend
  const fetchPosts = async () => {
    try {
      const response = await api.get('/posts');
      // Construye las URLs completas para las imágenes
      const formattedPosts = response.data.map(post => ({
        ...post,
        imagen: `http://192.168.1.19:3000${post.imagen}`, // Agregar URL base
      }));
      setPosts(formattedPosts);
    } catch (error) {
      console.error('Error al obtener los posts:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <View style={styles.container}>
      <BarraSuperior navigation={navigation} />
      <View style={styles.mainContent}>
        <BarraLateral navigation={navigation} username={username} />
        <ScrollView style={styles.feed}>
          <Text style={styles.welcomeText}>Bienvenido, {username}</Text>
          {loading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            posts.map((post) => (
              <Post
                key={post.id}
                author={post.user}
                title={post.titulo}
                description={post.descripcion}
                image={post.imagen} // Aquí ya tiene la URL completa
                likes={post.likescount}
              />
            ))
          )}
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
