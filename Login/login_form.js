import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import logo from '../assets/logo.png';

export default function LoginForm({ text , route}) {
    return (
        <View style={styles.container}>

            <Image
                source={logo} />
            
            <Text>{ text }</Text>

            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Email"
                placeholderTextColor="silver"
                autoCapitalize="none"
            />

            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Senha"
                placeholderTextColor="silver"
                autoCapitalize="none"
            />

            <TouchableOpacity
                style={styles.btn}
                onPress={() => { alert('botão pressionado')}}>
                    <Text style={styles.btnText}>Fazer Login</Text>
            </TouchableOpacity>

            <Text>Ainda não possui cadastro?</Text>
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
    }
});
