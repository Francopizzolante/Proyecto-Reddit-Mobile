import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Post = ({ author, title, description, image, likes }) => {
  return (
    <View style={styles.post}>
      <Text style={styles.postAuthor}>{author}</Text>
      <Text style={styles.postTitle}>{title}</Text>
      <Image source={{ uri: image }} style={styles.postImage} />
      <Text style={styles.postDescription}>{description}</Text>
      <View style={styles.postFooter}>
        <Text style={styles.likes}>❤️ {likes}</Text>
        <TouchableOpacity style={styles.commentButton}>
          <Text style={styles.commentButtonText}>Mostrar Comentarios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  postAuthor: {
    color: '#aaa',
    fontSize: 14,
  },
  postTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  postDescription: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 10,
  },
  postFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  likes: {
    color: '#fff',
    fontSize: 16,
  },
  commentButton: {
    backgroundColor: '#000',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  commentButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Post;
