// CommentsPage.jsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import BarraSuperior from '../components/BarraSuperior';

const CommentsPage = ({ userComments, user, logout }) => {
  const renderItem = ({ item }) => (
    <View style={styles.comment}>
      <Text style={styles.commentText}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <BarraSuperior user={user} logout={logout} />
      <Text style={styles.header}>Tus comentarios</Text>
      <FlatList
        data={userComments}
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
  comment: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 5,
  },
  commentText: {
    fontSize: 16,
  },
});

export default CommentsPage;
