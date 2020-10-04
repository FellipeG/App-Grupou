import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import {createDrawerNavigator } from '@react-navigation/drawer'

import Login from './Login/index'
import LoginForm from './Login/login_form';
import CadastroAluno from './Cadastro/aluno';
import CadastroProfessor from './Cadastro/professor';
import Inicio from './Inicio/index'
import ContaProfessor from './Conta/professor'
import ContaAluno from './Conta/aluno'

import { AuthContext } from './context'

export default function App() {

  const [userToken, setUserToken] = React.useState(null)

  const MainPage = createStackNavigator();
  const Drawer = createDrawerNavigator();

  const authContext = React.useMemo(() => {
    return {
      signInAluno: () => { setUserToken('Aluno') },
      signInProfessor: () => { setUserToken('Professor') },
      signOut: () => { setUserToken(null) }
    }
  })

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>

        { userToken ?
          <Drawer.Navigator>
            <Drawer.Screen name="Início" component={Inicio} />
            { userToken == 'Aluno' ?
                <Drawer.Screen name="Minha Conta" component={ContaAluno} />
              :
              <Drawer.Screen name="Minha Conta" component={ContaProfessor} />
            }
          </Drawer.Navigator>
          :
          <MainPage.Navigator>
            <MainPage.Screen name="Fazer Login" component={Login} />
            <MainPage.Screen name="Aluno" component={LoginForm} />
            <MainPage.Screen name="Professor" component={LoginForm} />
            <MainPage.Screen name="Cadastro de Aluno" component={CadastroAluno} />
            <MainPage.Screen name="Cadastro de Professor" component={CadastroProfessor} />
            <MainPage.Screen name="Página Inicial" component={Inicio} />
          </MainPage.Navigator>
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}