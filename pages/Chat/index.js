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
    Message,
    MessageContainer,
    EmptyContainer,
    RowMessageContainer,
    UserIdentificationView,
    UserIdentificationText,
    HourView,
    HourText } from './styles';

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

    function getTime() {
        const now = new Date();
        const hour = (now.getHours() < 10 ) ? `0${now.getHours()}` : now.getHours();
        const minute = (now.getMinutes() < 10 ) ? `0${now.getMinutes()}` : now.getMinutes();
        return `${hour}:${minute}`;
    }

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
                criado_em: `${date.getHours()}${date.getMinutes()}${date.getSeconds()}`,
                hora: getTime()
            })
            setNewMessage('');
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <AppContainer>
            <ContainerMessages>
                { messages.map(element => (
                    <>
                    { user.email === element.enviado_por 
                    ?
                    <RowMessageContainer>
                        <EmptyContainer></EmptyContainer>
                        <MessageContainer>
                            <UserIdentificationView>
                                <UserIdentificationText>
                                    Você
                                </UserIdentificationText>
                            </UserIdentificationView>
                            <Message key={ element.id }>
                                { element.mensagem }
                            </Message>
                            <HourView>
                                <HourText>{ element.hora }</HourText>
                            </HourView>
                        </MessageContainer>
                    </RowMessageContainer> 
                    : 
                    <RowMessageContainer>
                        <MessageContainer>
                        <   UserIdentificationView>
                                <UserIdentificationText>
                                    { element.enviado_por }
                                </UserIdentificationText>
                            </UserIdentificationView>
                            <Message key={ element.id }>
                                { element.mensagem }
                            </Message>
                            <HourView>
                                <HourText>{ element.hora }</HourText>
                            </HourView>
                        </MessageContainer>
                        <EmptyContainer></EmptyContainer>
                    </RowMessageContainer> 
                    }
                    </>
                )) }
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