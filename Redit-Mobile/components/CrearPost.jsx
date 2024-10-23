// CrearPost.jsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const CrearPost = ({ onCreatePost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (title && content) {
      onCreatePost({ title, content });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título del post"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Contenido del post"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Button title="Publicar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
  },
});

export default CrearPost;
