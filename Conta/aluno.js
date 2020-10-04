import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import logo from '../assets/logo.png';

import { AuthContext } from '../context'

export default function ContaAluno({ navigation }) {

    const { signOut } = React.useContext(AuthContext);

    return (
        <View style={styles.container}>

            <Image
                source={logo} />

            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Nome"
                placeholderTextColor="silver"
                autoCapitalize="none"
                value="Nome Aluno"
            />

            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Email"
                placeholderTextColor="silver"
                autoCapitalize="none"
                value="email.aluno@email.com"
            />

            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Matrícula"
                placeholderTextColor="silver"
                autoCapitalize="none"
                value="2017000000"
            />

            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Senha"
                secureTextEntry={true}
                placeholderTextColor="silver"
                autoCapitalize="none"
                value="SenhaAluno"
            />

            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Curso"
                placeholderTextColor="silver"
                autoCapitalize="none"
                value="Ciência da Computação"
            />

            <TouchableOpacity
                style={styles.btn}
                onPress={() => { signOut() }}>
                    <Text style={styles.btnText}>Deslogar</Text>
            </TouchableOpacity>

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
        backgroundColor: '#c50000',
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
    }
});
