import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';

import { UserContext } from '../../contexts/user';

import { 
    AppContainer,
    Texto,
    BotaoContainer,
    BotaoForm,
    BotaoFormTexto } from './styles';

const Settings = () => {

    const { signOut } = useContext(UserContext);


    return (
        <AppContainer>
            <BotaoContainer>
                <BotaoForm 
                    invert={true}
                    onPress={ () => { signOut() } }>
                    <BotaoFormTexto invert={true}>Sair</BotaoFormTexto>
                </BotaoForm>
            </BotaoContainer>      
        </AppContainer>
    );
}

export default Settings;