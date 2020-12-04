import React, { createContext, useState, useEffect } from 'react';

import firebase from 'firebase';
import 'firebase/auth';

const UserContext = createContext({});

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const ListenAuth = (userState) => {
        setUser(userState)
    }

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged(ListenAuth);
        return listener;
    }, [])

    const signIn = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            console.warn(res)
        })
        .catch(err => {
            console.error(err)
        })
    }

    const signUp = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            console.warn(res)
        })
        .catch(err => {
            console.error(err)
        })
    }

    const signOut = () => {
        firebase.auth().signOut()
        .then(res => {
            console.warn(res)
        })
        .catch(err => {
            console.error(err)
        })
    }

    return (
        <UserContext.Provider value={{ user, signIn, signOut, signUp }}>
            { children }
        </UserContext.Provider>
    )
}

export { UserContext,UserProvider }