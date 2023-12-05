// index.js or wherever you render your app
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css'
import App from './App.jsx'
import {store} from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);







/* import { persistor, store } from './redux/store.js';

import { PersistGate } from 'redux-persist/integration/react'; */




/*    {<PersistGate loading={null} persistor={persistor}> } */
/* {</PersistGate> } */