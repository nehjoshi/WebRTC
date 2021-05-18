import './App.css';
import { Typography, AppBar, Button } from '@material-ui/core';
import VideoPlayer from './Components/VideoPlayer';
import { BrowserRouter as Router, Link, Switch, Route, useHistory } from 'react-router-dom';
import Options from './Components/Options';
import Notifications from './Components/Notifications';
import { makeStyles } from '@material-ui/core/styles';
import ChatScreen from './Components/Chat/ChatScreen';
import Main from './Components/Main';


const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/chat" component={ChatScreen} />
      </Switch>
      
    </Router>
  )
}

export default App;
