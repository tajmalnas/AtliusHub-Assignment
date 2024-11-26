import React, { useEffect } from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './Pages/Login'
import Profile from './Pages/profile'
import TaskPage from './Pages/TaskPage'
import Signup from './Pages/Signup'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3000"


const App = () => {

  useEffect(()=>{
    if(!localStorage.getItem('email')){
      
    }
  },[]);

  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/task" element={<TaskPage/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}

export default App