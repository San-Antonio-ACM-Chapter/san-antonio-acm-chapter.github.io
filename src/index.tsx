import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as auth from './env/google_auth_secrets.json';
import {GoogleOAuthProvider} from "@react-oauth/google";

/* import error: https://stackoverflow.com/questions/68225719/error-should-not-import-the-named-export */
let intermediateJson = auth as any;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <GoogleOAuthProvider clientId={intermediateJson.web.client_id}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//todo: keep following this guide: https://blog.logrocket.com/guide-adding-google-login-react-app/