// CrearPostPage.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import BarraSuperior from '../components/BarraSuperior';

const CrearPostPage = ({ user, logout }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    // Aquí puedes manejar el envío del post
    console.log('Nuevo post creado:', { title, content });
  };

  return (
    <View style={styles.container}>
      <BarraSuperior user={user} logout={logout} />
      <Text style={styles.header}>Crear una nueva publicación</Text>
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
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
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

export default CrearPostPage;
