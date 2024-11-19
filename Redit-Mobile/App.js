import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InicioScreen from './pages/Inicio';
import HomeScreen from './pages/Home';
import CrearPost from './pages/CrearPost';
import Likes from './pages/Likes';
import Posts from './pages/Posts';
import Comments from './pages/Comments';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicio" component={InicioScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CrearPost" component={CrearPost} />
        <Stack.Screen name="Likes" component={Likes} />
        <Stack.Screen name="Posts" component={Posts} />
        <Stack.Screen name="Comments" component={Comments} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
