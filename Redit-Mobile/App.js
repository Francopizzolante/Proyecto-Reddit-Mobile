// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Auth0Provider, useAuth0 } from 'react-native-auth0';
import { Button, Text, View } from 'react-native';
import Inicio from './pages/Inicio';
import Home from './pages/Home';
import CrearPostPage from './pages/CrearPostPage';  
import LikesPage from './pages/LikesPage';  
import PostsPage from './pages/PostsPage'; 
import CommentsPage from './pages/CommentsPage';  

const Stack = createStackNavigator();

export default function App() {
  return (
    <Auth0Provider
      domain="dev-jc1gspehd87zds6q.us.auth0.com"
      clientId="UmeXhnj4XL7f3tUtWrgJ0wUcP7Yw9iFY"
      redirectUri="https://auth.expo.io/franco.pizzolante/Redit-Mobile"
    >
    <MainApp />
    </Auth0Provider>
  );
}

export const MainApp = () => {

  //const { login, logout, user, isAuthenticated } = useAuth();
  const { isAuthenticated } = useAuth0();
  const handleLogin=()=>{
    console.log('entro al handle')
    console.log('login auth 0', loginWithRedirect())
    loginWithRedirect()
  }

  return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {isAuthenticated ? (
        <>
        <Text>Welcome, {user.name}</Text>
        <Button title="Logout" onPress={logout} />
        </>
        ) : (
        <Button title="Login" onPress={handleLogin} />
        )}
        </View>
        );
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="CrearPost" component={CrearPostPage} />
    //     <Stack.Screen name="Likes" component={LikesPage} />
    //     <Stack.Screen name="Posts" component={PostsPage} />
    //     <Stack.Screen name="Comments" component={CommentsPage} />
    //   </Stack.Navigator>
    // </NavigationContainer>
};