import 'react-native-gesture-handler'
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { UserContext } from '../contexts/user'

const Routes = () => {

    const { user } = useContext(UserContext);

    return (
        <NavigationContainer>
            {
                user ? <AppRoutes /> : <AuthRoutes />
            }
        </NavigationContainer>
    )
}

export default Routes;