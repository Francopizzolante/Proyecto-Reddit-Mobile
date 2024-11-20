import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, ActivityIndicator, Alert } from 'react-native';
import BarraLateral from '../componentes/BarraLateral';
import BarraSuperior from '../componentes/BarraSuperior';
import Comment from '../componentes/Comment';
import api from '../api'; // Cliente HTTP configurado

const Comments = ({ navigation, route }) => {
  const { username } = route.params; // Obtener el nombre de usuario desde las rutas
  const [comments, setComments] = useState([]); // Estado para almacenar los comentarios
  const [loading, setLoading] = useState(true); // Estado de carga

  // Función para obtener comentarios desde el backend
  const fetchComments = async () => {
    try {
      const trimmedUsername = username.trim(); // Elimina espacios adicionales
      const encodedUsername = encodeURIComponent(trimmedUsername); // Codifica el username
      const url = `/comments/user/${encodedUsername}`; // Ruta para obtener comentarios
  
      const response = await api.get(url); // Llama al endpoint para obtener los comentarios
      const commentsWithTitles = await Promise.all(
        response.data.map(async (comment) => {
          try {
            // Llama al endpoint para obtener el título del post por ID
            const postResponse = await api.get(`posts/title/${comment.postId}`);
            return {
              ...comment,
              title: postResponse?.data?.titulo || 'Post no encontrado', // Añade el título al comentario
              created_at: new Date(comment.created_at).toLocaleDateString('es-ES'), // Formatea la fecha
            };
          } catch (err) {
            console.error(`Error al obtener el título para postId ${comment.postId}:`, err.message);
            return {
              ...comment,
              title: 'Error al obtener título', // Manejo de errores para el título
              created_at: new Date(comment.created_at).toLocaleDateString('es-ES'), // Formatea la fecha
            };
          }
        })
      );
  
      setComments(commentsWithTitles); // Actualiza el estado con los comentarios formateados
    } catch (error) {
      console.error('Error al obtener los comentarios:', error.message);
    } finally {
      setLoading(false); // Finaliza la carga
    }
  };
  
  
  

  // Función para eliminar un comentario
  const handleDelete = async (id) => {
    try {
      console.log(`Intentando eliminar comentario con ID: ${id}`);
      await api.delete(`/comments/${id}`); // Llama al endpoint para eliminar el comentario
      setComments((prevComments) => prevComments.filter((comment) => comment.id !== id)); // Elimina el comentario del estado
      Alert.alert('Comentario eliminado');
    } catch (error) {
      console.error('Error al eliminar el comentario:', error.message);
      Alert.alert('Error', 'No se pudo eliminar el comentario.');
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <View style={styles.container}>
      <BarraSuperior navigation={navigation} />
      <View style={styles.mainContent}>
        <BarraLateral navigation={navigation} username={username} />
        <ScrollView style={styles.feed}>
          <Text style={styles.title}>Comentarios hechos por {username}</Text>
          {loading ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            comments.map((comment) => (
              <Comment
                key={comment.id}
                title={comment.title}
                content={comment.content}
                date={comment.created_at}
                onDelete={() => handleDelete(comment.id)} // Llama a la función para eliminar
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

export default Comments;
