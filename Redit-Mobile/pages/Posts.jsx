import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import BarraLateral from '../componentes/BarraLateral';
import BarraSuperior from '../componentes/BarraSuperior';
import Post from '../componentes/Post';

const Posts = ({ navigation }) => {
  // Datos estáticos de ejemplo para los posts del usuario
  const userPosts = [
    {
      id: 1,
      author: 'Franco Pizzolante',
      title: 'Mi foto de perfil',
      description: 'Foto profesional para mi perfil personal.',
      image: 'https://via.placeholder.com/300x200',
      likes: 0,
    },
    {
      id: 2,
      author: 'Franco Pizzolante',
      title: 'Retrato elegante',
      description: 'Un hermoso paisaje natural.',
      image: 'https://via.placeholder.com/300x200',
      likes: 3,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Barra Superior */}
      <BarraSuperior navigation={navigation} />
      <View style={styles.mainContent}>
        {/* Barra Lateral */}
        <BarraLateral navigation={navigation} />

        {/* Lista de posts del usuario */}
        <ScrollView style={styles.feed}>
          <Text style={styles.title}>Posts hechos por Franco Pizzolante</Text>
          {userPosts.map((post) => (
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

export default Posts;
