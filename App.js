import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Login from './pages/Login'
import LoginForm from './pages/Login/Form';
import CadastroAluno from './pages/Cadastro/aluno';
import CadastroProfessor from './pages/Cadastro/professor';
import Inicio from './pages/Inicio'
import ContaProfessor from './pages/Conta/professor'
import ContaAluno from './pages/Conta/aluno'

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