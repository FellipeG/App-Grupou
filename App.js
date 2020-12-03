import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { useState } from 'react';

import Routes from './routes';

import './services/firebase';


export default function App() {
  return (
    <Routes />
  );
}