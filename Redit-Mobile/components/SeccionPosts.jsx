// /components/SeccionPosts.jsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const SeccionPosts = ({ posts }) => {
  const renderItem = ({ item }) => (
    <View style={styles.post}>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text>{item.content}</Text>
    </View>
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  post: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default SeccionPosts;
