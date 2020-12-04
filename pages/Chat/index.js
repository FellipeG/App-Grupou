import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';

import { UserContext } from '../../contexts/user';

import { 
    AppContainer,
    Texto } from './styles';

const Chat = () => {

    const { user } = useContext(UserContext);

    return (
        <AppContainer>
            <Texto>{ user.email }</Texto>            
        </AppContainer>
    );
}

export default Chat;