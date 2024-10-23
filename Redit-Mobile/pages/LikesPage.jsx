// LikesPage.jsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import BarraSuperior from '../components/BarraSuperior';

const LikesPage = ({ likedPosts, user, logout }) => {
  const renderItem = ({ item }) => (
    <View style={styles.post}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <BarraSuperior user={user} logout={logout} />
      <Text style={styles.header}>Tus posts favoritos</Text>
      <FlatList
        data={likedPosts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  post: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    borderRadius: 5,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LikesPage;
