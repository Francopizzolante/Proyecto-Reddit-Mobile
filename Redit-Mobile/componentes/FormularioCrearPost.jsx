import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const FormularioCrearPost = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');

  const handleCrearPost = () => {
    // Aquí puedes implementar la lógica para enviar el post al backend
    console.log({
      titulo,
      descripcion,
      imagen,
    });
    alert('Post creado exitosamente');
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Crear un nuevo post</Text>

      {/* Campo para el título */}
      <Text style={styles.label}>Título del post</Text>
      <TextInput
        style={styles.input}
        value={titulo}
        onChangeText={setTitulo}
        placeholder="Escribe el título aquí"
        placeholderTextColor="#aaa"
      />

      {/* Campo para la imagen */}
      <Text style={styles.label}>Subir imagen</Text>
      <TextInput
        style={styles.input}
        value={imagen}
        onChangeText={setImagen}
        placeholder="Ingresa la URL de la imagen"
        placeholderTextColor="#aaa"
      />

      {/* Campo para la descripción */}
      <Text style={styles.label}>Descripción del post</Text>
      <TextInput
        style={styles.textarea}
        value={descripcion}
        onChangeText={setDescripcion}
        placeholder="Escribe la descripción aquí"
        placeholderTextColor="#aaa"
        multiline
      />

      {/* Botón para crear post */}
      <TouchableOpacity style={styles.button} onPress={handleCrearPost}>
        <Text style={styles.buttonText}>Crear post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  textarea: {
    backgroundColor: '#333',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FormularioCrearPost;
