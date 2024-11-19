import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import BarraLateral from '../componentes/BarraLateral';
import BarraSuperior from '../componentes/BarraSuperior';
import Comment from '../componentes/Comment';

const Comments = ({ navigation, route }) => {
  const { username } = route.params;
  // Datos estáticos de ejemplo para los comentarios
  const comments = [
    {
      id: 1,
      title: 'Mi foto de perfil',
      content: '¡Gracias! Me alegra que te guste.',
      date: '14/11/2024',
    },
    {
      id: 2,
      title: 'Retrato elegante',
      content: '¡Muchas gracias! Fue un reto divertido.',
      date: '14/11/2024',
    },
    {
      id: 3,
      title: 'Ritmos abstractos',
      content: 'Comentario desde Postman',
      date: '17/11/2024',
    },
  ];

  const handleDelete = (id) => {
    // Lógica para eliminar un comentario
    console.log(`Eliminar comentario con ID: ${id}`);
    alert('Comentario eliminado');
  };

  return (
    <View style={styles.container}>
      {/* Barra Superior */}
      <BarraSuperior navigation={navigation} />
      <View style={styles.mainContent}>
        {/* Barra Lateral */}
        <BarraLateral navigation={navigation} username={username} />

        {/* Lista de comentarios */}
        <ScrollView style={styles.feed}>
          <Text style={styles.title}>Comentarios hechos por {username}</Text>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              title={comment.title}
              content={comment.content}
              date={comment.date}
              onDelete={() => handleDelete(comment.id)}
            />
          ))}
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
