import React, { useState, useRef, useEffect, useContext } from 'react';
import { ChatContext, ChatContextProvider } from '../../ChatContext';
import { Typography, Paper, Grid, useTheme, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import Message from './Message';

const msgs = [];

const useStyles = makeStyles((theme) => ({
    container: {
        width: '700px',
        height: '75vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        border: '2px solid black',
        margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            width: '90%'
        }
    },
    paper: {
        width: '90%',
        height: '80%',
        overflowY: 'auto',
        overflowWrap: 'break-word',
        wordWrap: 'break-word',
        border: 'transparent',
        boxShadow: 'none'
    },
    container2: {
        display: 'flex',
        flexDirection: 'column',
        height: '20%',
        width: '90%',
        marginTop: '00px',
        
        justifyContent: 'space-evenly',
        margin: '0 auto'
    },
    messageBox: {
        width: '100%',
        position: 'relative',
        left: '0'
    }


}))
const ChatWindow = ({ children }) => {

    const [send, setSend] = useState('');
    const [flag, setFlag] = useState(false);
    const inputRef = useRef();
    const theme = useTheme();

    const { SendMessage, msg, allMessages } = useContext(ChatContext);
    
    const handleChange = (e) => {
        setSend(e.target.value);
    }

    useEffect(() => {
        setTimeout(() => {
            Refresh();
        }, 1000);
    })

    const handleChangeKey = (e) => {
        if (e.charCode === 13) {
            SendMessage(send);

            setTimeout(() => {
                Refresh();
            }, 500);
            
            
        }
        
    }
    const Refresh = () => {       
        setFlag(!flag);  
    }
    const classes = useStyles();

    return (
        
        <Grid container className={classes.container}>
            <Paper className={classes.paper}>
                   {allMessages.map(ele => {
                       return <><Message msg = {ele} key={ele} /><br/></>
                   })}
            </Paper>
            <Grid container className={classes.container2}>
                <Grid item>
                    <TextField  color="primary" variant="outlined" onKeyPress={handleChangeKey} onChange={handleChange} className={classes.messageBox} placeholder="Type a message" />
                </Grid>
                <Grid item style={{ width: '100%' }}>
                    {/* <Button variant="contained" color="primary" fullWidth startIcon={<SendIcon />} onClick={() => SendMessage(send)}>Send</Button> */}
                    <Button variant="contained" color="primary" fullWidth startIcon={<SendIcon />} onClick={Refresh}>Send</Button>
                </Grid>
            </Grid>

        </Grid>


    )
}
export default ChatWindow;