import React, { useState, useRef, useEffect, useContext } from 'react';
import { io } from 'socket.io-client';
import { ChatContext, ChatContextProvider } from '../../ChatContext';
import { Typography, Paper, Grid, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChatWindow from './ChatWindow';
import '../../App.css';
const useStyles = makeStyles((theme) => ({
    container: {
        background: 'white',
        margin: '20px auto',
        width: '600px',
        border: '4px solid black',
        borderRadius: '10px',
        boxShadow: '0 2px 2px 2px #28292b',
        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
    },
    paper: {
        justifyContent: 'center',
        textAlign: 'center',

    }
}))

const ChatScreen = () => {

    useEffect(() => {
        document.title = 'Chat!';
    }, [])

    const theme = useTheme();
    const classes = useStyles()
    return (
        <ChatContextProvider>
            <Grid container className={classes.container}>
                <Grid item xs={12} md={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h2">Chat Room!</Typography>
                    </Paper>
                </Grid>

            </Grid>

            <ChatWindow>

</ChatWindow>

        </ChatContextProvider>

    )
}
export default ChatScreen;