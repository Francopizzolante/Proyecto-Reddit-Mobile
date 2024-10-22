// /components/BarraLateral.jsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const BarraLateral = ({ user }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.picture }} style={styles.profilePic} />
      <Text style={styles.userName}>{user.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    padding: 20,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BarraLateral;
