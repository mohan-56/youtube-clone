// import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import {box} from '@mui/material'

// import './App.css'
import Navbar from './components/Navbar'
import  Home from './pages/home/Home'
import Video from './pages/video/Video'
function App() {
 

  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/video/:category_id:video_id' element={<Video/>}></Route>


    </Routes>
   </div>
  )
}

export default App
