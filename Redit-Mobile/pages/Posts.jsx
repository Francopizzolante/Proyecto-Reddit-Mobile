import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, ActivityIndicator } from 'react-native';
import BarraLateral from '../componentes/BarraLateral';
import BarraSuperior from '../componentes/BarraSuperior';
import Post from '../componentes/Post';
import api from '../api'; // Cliente HTTP configurado

const Posts = ({ navigation, route }) => {
  const { username } = route.params; // Obtener el nombre de usuario desde las rutas
  const [userPosts, setUserPosts] = useState([]); // Estado para almacenar los posts
  const [loading, setLoading] = useState(true); // Estado de carga

  // Función para obtener los posts creados por el usuario desde el backend
  const fetchUserPosts = async () => {
    try {
      const trimmedUsername = username.trim(); // Elimina espacios adicionales
      const encodedUsername = encodeURIComponent(trimmedUsername); // Codifica el username
      const url = `/posts/user/${encodedUsername}`; // Ruta esperada en el backend


      const response = await api.get(url); // Llama al endpoint
      const formattedPosts = response.data.map(post => ({
        ...post,
        imagen: `http://192.168.1.19:3000${post.imagen}`, // Construye la URL completa de la imagen
      }));


      setUserPosts(formattedPosts); // Actualiza el estado con los posts formateados
    } catch (error) {
      console.error('Error al obtener los posts del usuario:', error.message);
    } finally {
      setLoading(false); // Finaliza la carga
    }
  };

  useEffect(() => {
    fetchUserPosts();
  }, []);

  return (
    <View style={styles.container}>
      <BarraSuperior navigation={navigation} />
      <View style={styles.mainContent}>
        <BarraLateral navigation={navigation} username={username} />
        <ScrollView style={styles.feed}>
          <Text style={styles.title}>Posts hechos por {username}</Text>
          {loading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            userPosts.map((post) => (
              <Post
                key={post.id}
                author={post.user}
                title={post.titulo}
                description={post.descripcion}
                image={post.imagen} // Asegúrate de usar "imagen" que ya contiene la URL completa
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

export default Posts;
