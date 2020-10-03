import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function LoginForm({ text , route}) {
    return (
        <View style={styles.container}>
            
            <Text>{ JSON.stringify(text) }</Text>

            <TextInput />

            <TextInput />

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
        marginTop: 5
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    }
});
