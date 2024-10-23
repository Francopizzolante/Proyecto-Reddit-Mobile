// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Auth0Provider, useAuth0 } from 'react-native-auth0'; 
import Inicio from './pages/Inicio';
import Home from './pages/Home';
import CrearPostPage from './pages/CrearPostPage';  
import LikesPage from './pages/LikesPage';  
import PostsPage from './pages/PostsPage'; 
import CommentsPage from './pages/CommentsPage';    

const Stack = createStackNavigator();

export default function App() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  if (!isAuthenticated) {
    return <Inicio onLoginClick={loginWithRedirect} />;
  }

  return (
    <Auth0Provider
      domain="dev-jc1gspehd87zds6q.us.auth0.com"
      clientId="UmeXhnj4XL7f3tUtWrgJ0wUcP7Yw9iFY"
      redirectUri={window.location.origin}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CrearPost" component={CrearPostPage} />
          <Stack.Screen name="Likes" component={LikesPage} />
          <Stack.Screen name="Posts" component={PostsPage} />
          <Stack.Screen name="Comments" component={CommentsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Auth0Provider>
  );
}
