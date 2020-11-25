import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Image } from 'react-native'

import { 
    AppContainer,
    LoginContainer,
    Texto,
    BotaoAba,
    BotaoTexto,
    BotaoContainer,
    Input,
    InputTexto,
    BotaoForm,
    BotaoFormTexto,
    ForgotPassword,
    Logo,
    ViewChamadaGrupou,
    TextoChamadaGrupou,
    TextoGrupou } from './styles';


export default function Login({ navigation }) {

    const [currentButton, setCurrentButton] = useState('aluno');

    return (
        <AppContainer>

            <Logo>
                <Image source={logo} style={{ width: 300, height: 100 }} />
            </Logo>

            <ViewChamadaGrupou>
                <TextoChamadaGrupou>
                    Problemas para formar
                </TextoChamadaGrupou>
                <TextoChamadaGrupou>
                    um grupo de trabalho
                </TextoChamadaGrupou>
                <TextoChamadaGrupou>
                    o <TextoGrupou>Grupou!</TextoGrupou> resolve!
                </TextoChamadaGrupou>
            </ViewChamadaGrupou>

            <LoginContainer>
                <BotaoContainer>
                    <BotaoAba
                        lastClick={currentButton === 'aluno'}
                        onPress={() => { setCurrentButton('aluno'); navigation.push('Aluno', { route: 'Cadastro de Aluno' })} }>
                        <BotaoTexto>Aluno</BotaoTexto>
                    </BotaoAba>

                    <BotaoAba
                        lastClick={currentButton === 'professor'}
                        onPress={() =>  { setCurrentButton('professor'); navigation.push('Professor', { route: 'Cadastro de Professor' })} }>
                            <BotaoTexto>Professor</BotaoTexto>
                    </BotaoAba>
                </BotaoContainer>
                <InputTexto>Email</InputTexto>
                <Input placeholder="Digite seu email" />
                <InputTexto>Senha</InputTexto>
                <Input 
                    placeholder="Digite sua senha"
                    secureTextEntry={true} />
                <ForgotPassword>
                    Esqueci minha senha
                </ForgotPassword>
                <BotaoContainer>
                    <BotaoForm invert={true}>
                        <BotaoFormTexto invert={true}>Cadastre-se</BotaoFormTexto>
                    </BotaoForm>
                    <BotaoForm>
                        <BotaoFormTexto>Entrar</BotaoFormTexto>
                    </BotaoForm>
                </BotaoContainer>
            </LoginContainer>
        </AppContainer>
    );
}