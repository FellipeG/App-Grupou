import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Image } from 'react-native'

import { 
    AppContainer,
    Texto } from './styles';

const Settings = () => {
    return (
        <AppContainer>
            <Texto>Chat</Texto>            
        </AppContainer>
    );
}

export default Settings;