// /pages/Home.jsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BarraSuperior from '../components/BarraSuperior';
import BarraLateral from '../components/BarraLateral';
import SeccionPosts from '../components/SeccionPosts';

const Home = ({ user, logout }) => {
  return (
    <View style={styles.container}>
      <BarraSuperior user={user} logout={logout} />
      <View style={styles.content}>
        <BarraLateral user={user} />
        <View style={styles.postsSection}>
          <Text style={styles.welcomeText}>Bienvenido {user.name}</Text>
          <SeccionPosts />
        </View>
      </View>
      <Button title="Cerrar sesión" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexDirection: 'row', 
    flex: 1,
  },
  postsSection: {
    flex: 1,
    padding: 10,
  },
  welcomeText: {
    fontSize: 20,
    marginVertical: 15,
  },
});

export default Home;
