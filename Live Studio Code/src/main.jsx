import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    //<React.StrictMode>
    <App />
    //</React.StrictMode>
    
    //i am using codemirror, which is not compatible with latest react version
    //<React.StrictMode> is a part of latest version, which is giving double screen for one html screen and creating problem
    //so we need to comment <React.StrictMode>
)
