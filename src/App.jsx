import React from 'react'
import { BrowserRouter as Router, Routes , Route, BrowserRouter } from 'react-router-dom'

//======css ======

import "./assets/styles/global.css"


// components

import Sidebar from './Components/Sidebar/Sidebar'

//pages
import Comments from './pages/Comments/Comments'
import Posts from './pages/Posts/Posts'
import Login from './pages/Login/Login'


//context
import SettingsContextProvider from './Context/SettingsContext'

const App = () => {
  return (
     <Router> 
          <SettingsContextProvider>
                 <Routes>
                     <Route path='/login' element={<Login/>} /> 
                 </Routes>
          <Sidebar>
              <Routes>
                    
                       <Route path='/' element={<Posts/>} />
                       <Route  path ="/comments"  element={<Comments/>}/>
                </Routes>
              </Sidebar>
          </SettingsContextProvider>
     
     </Router>
  )
}

export default App
