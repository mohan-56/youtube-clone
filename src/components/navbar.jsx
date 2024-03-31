import React from 'react'
import {Stack} from '@mui/material'
import {Link} from "react-router-dom";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import menu_icon from '../assets/menu.png'
import logo from '../assets/logo.png'
import search_icon from '../assets/search.png'
import upload_icon from "../assets/upload.png"
import more_icon from "../assets/more.png"
import notification_icon from "../assets/notification.png"
import profile_icon from "../assets/jack.png"
import './Navbar.css'
const Navbar = ({setsidebar}) => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
   <img className='menu_icon' onClick={()=>setsidebar(prev=>!prev)} src={menu_icon} alt="menu" />
   {/* <YouTubeIcon/> we can use material UI icons  */}
  <Link to='/'><img className='logo' src={logo} alt="menu" /></Link> 
      </div>
<div className="nav-middle flex-div">
  <div className="search_box flex-div">
  <input type="text" placeholder='search' />
  <img src={search_icon} alt="search_icon" />
  </div>

</div>

<div className="flex-div nav-right">
  <img src={upload_icon} alt="upload" />
  <img src={more_icon} alt="more-btn" />
  <img src={notification_icon} alt="notify" />
  <img src={profile_icon} className="dp" alt="DP" />
</div>
    </nav>
   
  )
}

export default Navbar