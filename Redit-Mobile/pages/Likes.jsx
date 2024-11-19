import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import BarraLateral from '../componentes/BarraLateral';
import BarraSuperior from '../componentes/BarraSuperior';
import Post from '../componentes/Post';

const Likes = ({ navigation, route }) => {
  const { username } = route.params;
  // Datos estáticos de ejemplo para los posts likeados
  const likedPosts = [
    {
      id: 1,
      author: 'TechExpert',
      title: 'Actualización SSD',
      description: 'Guía sobre cómo actualizar tu SSD NVMe de manera eficiente.',
      image: 'https://via.placeholder.com/300x200',
      likes: 1,
    },
    {
      id: 2,
      author: 'GamerWorld',
      title: 'Mejores Juegos 2024',
      description: 'Descubre cuáles son los mejores juegos que saldrán este año.',
      image: 'https://via.placeholder.com/300x200',
      likes: 10,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Barra Superior */}
      <BarraSuperior navigation={navigation} />
      <View style={styles.mainContent}>
        {/* Barra Lateral */}
        <BarraLateral navigation={navigation} username={username} />

        {/* Lista de posts likeados */}
        <ScrollView style={styles.feed}>
          <Text style={styles.title}>Posts creados por {username}</Text>
          {likedPosts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              title={post.title}
              description={post.description}
              image={post.image}
              likes={post.likes}
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

export default Likes;
