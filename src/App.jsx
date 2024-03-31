import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import {box} from '@mui/material'

// import './App.css'
import Navbar from './components/Navbar'
import  Home from './pages/home/Home'
import Video from './pages/video/Video'
function App() {
 
const [sidebar,setsidebar]=useState(true);
  return (
   <div>
    <Navbar setsidebar={setsidebar}/>
    <Routes>
      <Route path='/' element={<Home sidebar={sidebar}/>}/>
      <Route path='/video/:categoryID/:videoID' element={<Video/>}></Route>


    </Routes>
   </div>
  )
}

export default App
