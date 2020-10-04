import { StatusBar } from 'expo-status-bar';
import React from 'react';
import logo from '../assets/logo.png';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={logo} />

            <TouchableOpacity
                style={styles.btn}
                onPress={() => { navigation.push('Aluno',{ route: 'Cadastro de Aluno' })} }>
                <Text style={styles.btnText}>Login como Aluno</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btn}
                onPress={() =>  { navigation.push('Professor', { route: 'Cadastro de Professor' })} }>
                    <Text style={styles.btnText}>Login como Professor</Text>
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
