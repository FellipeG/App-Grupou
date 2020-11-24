import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import logo from '../../assets/logo.png';

import { 
    AppContainer,
    LoginContainer,
    Texto,
    BotaoAba,
    BotaoTexto,
    BotaoContainer,
    Input,
    InputTexto } from './styles';

export default function Login({ navigation }) {

    const [currentButton, setCurrentButton] = useState('aluno');

    return (
        <AppContainer>
            <LoginContainer>
                <BotaoContainer>
                    <BotaoAba
                        lastClick={currentButton === 'aluno'}
                        onPress={() => { setCurrentButton('aluno'); navigation.push('Aluno',{ route: 'Cadastro de Aluno' })} }>
                        <BotaoTexto>Aluno</BotaoTexto>
                    </BotaoAba>

                    <BotaoAba
                        lastClick={currentButton === 'professor'}
                        onPress={() =>  { setCurrentButton('professor'); navigation.push('Professor', { route: 'Cadastro de Professor' })} }>
                            <BotaoTexto>Professor</BotaoTexto>
                    </BotaoAba>
                </BotaoContainer>
                <InputTexto>Email</InputTexto>
                <Input />
                <InputTexto>Senha</InputTexto>
                <Input />
            </LoginContainer>
        </AppContainer>
    );
}