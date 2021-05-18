import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const ChatContext = createContext();


const ChatContextProvider = ({children}) => {

    const [msg, setMsg] = useState('');


    const socket = io('https://webrtc-bnd.herokuapp.com/');
    const [id, setId] = useState('')
    const allMessages = [];
    useEffect(() => {

        
        socket.on('me', (id) => {
            setId(id);

   
        })
    }, [])

    const SendMessage = (msg) => {

        socket.emit('sendMessage', msg);

    }

    socket.on('sent', msg => {

        allMessages.push(msg);

    })

    return (
        <ChatContext.Provider value={{
            id,
            msg,
            allMessages,
            SendMessage
        }}>
            {children}
        </ChatContext.Provider>
    )
}
export {ChatContextProvider, ChatContext}