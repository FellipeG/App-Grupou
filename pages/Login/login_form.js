import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Button } from 'react-native';
import logo from '../../assets/logo.png';

import { AuthContext } from '../../context'

export default function LoginForm({ route , navigation}) {

    const routeTo = route.params.route;

    const { signInAluno, signInProfessor } = React.useContext(AuthContext);


    return (
        <View style={styles.container}>

            <Image
                source={logo} />

            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Email"
                placeholderTextColor="silver"
                autoCapitalize="none"
            />

            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Senha"
                secureTextEntry={true}
                placeholderTextColor="silver"
                autoCapitalize="none"
            />

            <TouchableOpacity
                style={styles.btn}
                onPress={() => { { routeTo == 'Cadastro de Aluno' ? signInAluno() : signInProfessor() } }}>
                    <Text style={styles.btnText}>Fazer Login</Text>
            </TouchableOpacity>

            <Text style={styles.cadastroMsg}>Ainda não possui cadastro?</Text>
            <Button title="Cadastrar" onPress={() => { navigation.push(routeTo) }} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btn: {
        borderRadius: 30,
        backgroundColor: '#1c90ce',
        width: '70%',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 10
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    },
    input: {
        width: '90%',
        backgroundColor: '#fff',
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 10,
        marginTop: 5,
        paddingLeft: 10,
        borderColor: 'silver',
        borderWidth: 1
    },
    cadastroMsg: {
        marginTop: 60,
        fontSize: 18
    }
});
