import '../App.css';
import { Typography, AppBar, Button } from '@material-ui/core';
import VideoPlayer from './VideoPlayer';
import { BrowserRouter as Router, Link, Switch, Route, useHistory } from 'react-router-dom';
import Options from './Options';
import Notifications from './Notifications';
import { makeStyles } from '@material-ui/core/styles';
import ChatScreen from './Chat/ChatScreen';
import { ContextProvider, SocketContext } from '../SocketContext';
import { useContext } from 'react';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  but: {
    marginBottom: '20px'
  }


}))

const Main = () => {
  const classes = useStyles();
  const history = useHistory();

  const {deleteConnection} = useContext(SocketContext)

  const Nav = () => {
    history.push('/chat')
    deleteConnection();
  }



  return (
    <Router>
      
        <div className={classes.wrapper}>
          <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography variant="h2" align="center" >Video Call!</Typography>
          </AppBar>
          <VideoPlayer />
          <Options>
            <Notifications />
          </Options>
          <Button variant="contained" color="primary" onClick={Nav} className={classes.but} >Go to chat
        </Button>
        </div>
      
    </Router>
  )
}

export default Main;
