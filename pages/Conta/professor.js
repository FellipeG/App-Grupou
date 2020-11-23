import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import logo from '../../assets/logo.png';

import { AuthContext } from '../../context'

export default function ContaProfessor({ navigation }) {

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
                value="Nome Professor"
            />

            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Email"
                placeholderTextColor="silver"
                autoCapitalize="none"
                value="email.professor@email.com"
            />

            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="CPF"
                placeholderTextColor="silver"
                autoCapitalize="none"
                value="111.111.111-11"
            />

            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Senha"
                secureTextEntry={true}
                placeholderTextColor="silver"
                autoCapitalize="none"
                value="SenhaProfessor"
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
