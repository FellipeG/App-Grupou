import { StatusBar } from 'expo-status-bar';
import React from 'react';
import logo from '../../assets/logo.png';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import { AppContainer, LoginContainer, Texto } from './styles';

export default function Login({ navigation }) {
    return (
        <AppContainer>
            <LoginContainer>
                <TouchableOpacity
                    onPress={() => { navigation.push('Aluno',{ route: 'Cadastro de Aluno' })} }>
                    <Text>Login como Aluno</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() =>  { navigation.push('Professor', { route: 'Cadastro de Professor' })} }>
                        <Text>Login como Professor</Text>
                </TouchableOpacity>
            </LoginContainer>
        </AppContainer>
    );
}