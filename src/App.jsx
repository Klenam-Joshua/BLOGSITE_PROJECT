import React from 'react'
import { BrowserRouter as Router, Routes , Route, BrowserRouter, Navigate } from 'react-router-dom'

//======css ======

import "./assets/styles/global.css"

//==================== images ====

import aLogo from './assets/images/aLogo.png'


// components

import Sidebar from './Components/Sidebar/Sidebar'

//pages
import Comments from './pages/Comments/Comments'
import Posts from './pages/Posts/Posts'
import Login from './pages/Login/Login'


//context
import { useAuthContext } from './Hooks/useAuthContext'
import CreatePost from './pages/CreatePost/CreatePost'
import InvoiceVerification from './pages/Invoice/Invoice'


const App = () => {
   const {user,authIsReady} = useAuthContext()
  return (
   <>
   {! authIsReady && <div  className="row justify-center align-center" 
    style={{height:"100%"}}>
        <div   className='dim' >
            <img src={aLogo}   alt='brand_logo'/>
         </div>
        </div>
       }
     <Router> 

          {user && <Sidebar />}
              {
               authIsReady &&
              <Routes>
                     <Route  path='/invoice' element={<InvoiceVerification/>}/>
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
