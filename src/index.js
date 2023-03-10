import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'; //CHAKRA
import { BrowserRouter } from "react-router-dom"; //CHAKRA
import { configureStore } from '@reduxjs/toolkit'; //REDUX
import rootReducer from './redux/store'; //REDUX
import { Provider } from 'react-redux'; //REDUX
import AuthProvider from './hoc/authProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({ reducer: rootReducer }); //STORE REDUX

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <ChakraProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ChakraProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
