import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Routes from './routes';


export default function App() {
  return (
    <Routes />
  );
}