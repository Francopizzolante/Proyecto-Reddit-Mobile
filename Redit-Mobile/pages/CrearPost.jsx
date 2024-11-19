import React from 'react';
import { View, StyleSheet } from 'react-native';
import BarraLateral from '../componentes/BarraLateral';
import BarraSuperior from '../componentes/BarraSuperior';
import FormularioCrearPost from '../componentes/FormularioCrearPost';

const CrearPost = ({ navigation, route }) => {
  const { username } = route.params;
  return (
    <View style={styles.container}>
      {/* Barra Superior */}
      <BarraSuperior navigation={navigation} />
      <View style={styles.mainContent}>
        {/* Barra Lateral */}
        <BarraLateral navigation={navigation} username={username}/>

        {/* Formulario de Crear Post */}
        <FormularioCrearPost />
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
});

export default CrearPost;
