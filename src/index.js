import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import {ContextProvider} from './SocketContext';

ReactDOM.render(

<ContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ContextProvider>
,
  document.getElementById('root')
);


