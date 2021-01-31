import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import firebase from './firebase/firebase'
import { startSetNotes } from './redux/actions/notes';
import {logout, startSetLogin } from './redux/actions/auth';


import {history} from './router/AppRouter'

import "semantic-ui-css/semantic.min.css";
import { startShowTrashNotes } from './redux/actions/trash';




// weiter 4:30

const renderApp = () => {
  store.dispatch(startSetNotes())
store.dispatch(startShowTrashNotes()).then(()=>{
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
})}



firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(startSetLogin(user.uid));
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/metapad');
    };
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});