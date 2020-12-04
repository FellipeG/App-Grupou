import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext, useEffect } from 'react';

import { UserContext } from '../../contexts/user';

import { 
    AppContainer,
    Texto,
    BotaoContainer,
    BotaoForm,
    BotaoFormTexto,
    Input,
    ContainerMessages,
    Message } from './styles';

import firebase from 'firebase';
import 'firebase/firestore';

const Chat = () => {

    const date = new Date();

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const { user } = useContext(UserContext);

    const updateMessagesListener = (snapshot) => {
        const data = snapshot.docs.map(document => {
            return {
                id: document.id,
                ...document.data()
            }
        })

        setMessages(data);
    };

    useEffect(() => {
        const listener = firebase.firestore()
            .collection('mensagens').orderBy('criado_em', 'asc').onSnapshot(updateMessagesListener)
    }, []);

    const handleAddMessages = () => {
        if (newMessage.length === 0) {
            console.warn('Preencha o campo');
            return;
        }

        try {
            firebase.firestore().collection('mensagens').add({
                mensagem: newMessage,
                lida: false,
                enviado_por: user.email,
                criado_em: `${date.getHours}${date.getMinutes()}${date.getSeconds()}` 
            })
            setNewMessage('');
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <AppContainer>
            <ContainerMessages>
                { messages.map(element => (<Message key={ element.id }>{ element.mensagem }</Message>)) }
            </ContainerMessages>
            <BotaoContainer>
                <Input
                    placeholder="Mensagem..."
                    onChangeText={ text => setNewMessage(text) }
                    value={ newMessage }
                />
                <BotaoForm 
                    invert={true}
                    onPress={ () => { handleAddMessages() } }>
                    <BotaoFormTexto invert={true}>Enviar</BotaoFormTexto>
                </BotaoForm>
            </BotaoContainer>          
        </AppContainer>

    );
}

export default Chat;