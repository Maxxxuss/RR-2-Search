import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import './firebase/firebase'
import { startSetNotes } from './redux/actions/notes';





store.dispatch(startSetNotes()).then(()=>{
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
})