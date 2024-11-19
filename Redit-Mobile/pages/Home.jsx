import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import BarraLateral from '../componentes/BarraLateral';
import BarraSuperior from '../componentes/BarraSuperior';
import Post from '../componentes/Post';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <BarraSuperior navigation={navigation} />
      <View style={styles.mainContent}>
        <BarraLateral navigation={navigation} />
        <ScrollView style={styles.feed}>
          <Post
            author="TechExpert"
            title="Actualización SSD"
            description="Guía sobre cómo actualizar tu SSD NVMe de manera eficiente."
            image="https://via.placeholder.com/300x200"
            likes={1}
          />
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
});

export default HomeScreen;
