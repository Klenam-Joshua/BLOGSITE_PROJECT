import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SettingsContextProvider from './Context/SettingsContext'
import AuthContextProvider from './Context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <AuthContextProvider>
      <SettingsContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </SettingsContextProvider>
   </AuthContextProvider>
  ,
)
