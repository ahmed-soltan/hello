import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App';
import { AuthProvider } from './Context/Auth.jsx'
import { Provider } from 'react-redux';
import { store } from './Store';
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from './Store/index.jsx'
import 'react-toastify/dist/ReactToastify.css';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
         <PersistGate persistor={persistor}>

        <App />
         </PersistGate>
      </AuthProvider>
    </Provider>

  </React.StrictMode>
);


