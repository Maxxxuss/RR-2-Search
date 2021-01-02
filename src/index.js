import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import firebase from './firebase/firebase'
import { startSetNotes, login, logout } from './redux/actions/notes';
import {history} from './router/AppRouter'

import "semantic-ui-css/semantic.min.css";




// weiter 4:30

const renderApp = () => {
store.dispatch(startSetNotes()).then(()=>{
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
})}



firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetNotes()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/metapad');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});