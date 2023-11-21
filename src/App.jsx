import React from 'react'
import { BrowserRouter as Router, Routes , Route, BrowserRouter } from 'react-router-dom'

//======css ======

import "./assets/styles/global.css"

// components

import Sidebar from './Components/Sidebar/Sidebar'

//pages
import Comments from './pages/Comments/Comments'
import Posts from './pages/Posts/Posts'

const App = () => {
  return (
     <Router> 

     <Sidebar>
           <Routes>
                  <Route path='posts' element={<Posts/>} />
                     <Route  path ="/comments"  element={<Comments/>}/>
           </Routes>
     </Sidebar>
     
     </Router>
  )
}

export default App
