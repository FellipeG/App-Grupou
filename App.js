import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './Login/index'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LoginForm from './Login/login_form';

export default function App() {

  const MainPage = createStackNavigator();
  return (
    <NavigationContainer>
      <MainPage.Navigator>
        <MainPage.Screen name="Fazer Login" component={Login} />
        <MainPage.Screen name="Aluno" component={LoginForm} />
        <MainPage.Screen name="Professor" component={LoginForm} />
      </MainPage.Navigator>
    </NavigationContainer>
  );
}