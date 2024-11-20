import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, ActivityIndicator } from 'react-native';
import BarraLateral from '../componentes/BarraLateral';
import BarraSuperior from '../componentes/BarraSuperior';
import Post from '../componentes/Post';
import api from '../api'; // Importa el cliente HTTP configurado para tu backend

const Likes = ({ navigation, route }) => {
  const { username } = route.params; // Obtener el nombre de usuario desde las rutas
  const [likedPosts, setLikedPosts] = useState([]); // Estado para almacenar los posts
  const [loading, setLoading] = useState(true); // Estado de carga

  // Función para obtener los posts "likeados" desde el backend
  const fetchLikedPosts = async () => {
    try {
      const trimmedUsername = username.trim(); // Elimina espacios adicionales
      const encodedUsername = encodeURIComponent(trimmedUsername); // Codifica el username
      const url = `posts/user/${encodedUsername}/liked`; // Genera la URL correcta

      const response = await api.get(url); // Llama al endpoint
      const formattedPosts = response.data.map(post => ({
        ...post,
        imagen: `http://192.168.1.19:3000${post.imagen}`, // Construye la URL completa de la imagen
      }));

      setLikedPosts(formattedPosts); // Actualiza el estado con los posts formateados
    } catch (error) {
      console.error('Error al obtener los posts likeados:', error.message);
    } finally {
      setLoading(false); // Finaliza la carga
    }
  };

  useEffect(() => {
    fetchLikedPosts();
  }, []);

  return (
    <View style={styles.container}>
      <BarraSuperior navigation={navigation} />
      <View style={styles.mainContent}>
        <BarraLateral navigation={navigation} username={username} />
        <ScrollView style={styles.feed}>
          <Text style={styles.title}>Posts Likeados por {username}</Text>
          {loading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            likedPosts.map((post) => (
              <Post
                key={post.id}
                author={post.user}
                title={post.titulo}
                description={post.descripcion}
                image={post.imagen} 
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Likes;
