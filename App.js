import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { useState } from 'react';

import Routes from './routes';

import { UserProvider } from './contexts/user'

import './services/firebase';


export default function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}