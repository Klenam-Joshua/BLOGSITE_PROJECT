import React from 'react'
import { BrowserRouter as Router, Routes , Route, BrowserRouter, Navigate } from 'react-router-dom'

//======css ======

import "./assets/styles/global.css"


// components

import Sidebar from './Components/Sidebar/Sidebar'

//pages
import Comments from './pages/Comments/Comments'
import Posts from './pages/Posts/Posts'
import Login from './pages/Login/Login'


//context
import { useAuthContext } from './Hooks/useAuthContext'
import CreatePost from './pages/CreatePost/CreatePost'


const App = () => {
   const {user,authIsReady} = useAuthContext()
  return (
   <>
   {! authIsReady && <p>loading application</p> }
     <Router> 

          {user && <Sidebar />}
              {
               authIsReady &&
              <Routes>
                       <Route path="/create-post"  element={!user ?<Navigate to="/login"/> :<CreatePost/>} />
                       <Route path='/login' element={user ? <Navigate to="/"/> : <Login />  }/>
                       <Route path='/' element={ !user?  <Navigate to="/login"/> : <Posts/>} />
                       <Route  path ="/comments"  element={!user ?  <Navigate to="/login"/> : <Comments/>}/>
                       
                </Routes>
               
           
              }
        
     
     </Router>
     </>
  )
}

export default App
