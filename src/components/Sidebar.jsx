import React from 'react'
import './Sidebar.css'
import home from  "../assets/home.png"
import game_icon from  "../assets/game_icon.png"
import automobiles from   "../assets/automobiles.png"
import sports from  "../assets/sports.png"
import entertainent from     "../assets/entertainment.png"
import tech from     "../assets/tech.png"
import music from     "../assets/music.png"
import blogs from     "../assets/blogs.png"
import simon from     "../assets/simon.png"
import news from     "../assets/news.png"
import jack from     "../assets/jack.png"
import tom from     "../assets/tom.png"
import megan from     "../assets/megan.png"
import cameron from     "../assets/cameron.png"

const Sidebar = ({sidebar,category,setcategory}) => {
  return (
<div className={`sidebar ${sidebar?"":"small_sidebar"} `}>
  <div className="shortcut_links">
   
    <div className={`side_link ${category==0?"active":""}`} onClick={()=>setcategory(0)}>
      <img src={home} alt="" /><p>Home</p>
    </div>
    <div className={`side_link ${category==20?"active":""}`} onClick={()=>setcategory(20)}>
      <img src={game_icon} alt="" /><p>Gaming</p>
    </div>
    <div className={`side_link ${category==2?"active":""}`} onClick={()=>setcategory(2)}>
      <img src={automobiles} alt="" /><p>AutoMobiles</p>
    </div>
    <div className={`side_link ${category==17?"active":""}`} onClick={()=>setcategory(17)}>
      <img src={sports} alt="" /><p>Sports</p>
    </div>
    <div className={`side_link ${category==24?"active":""}`} onClick={()=>setcategory(24)}>
      <img src={entertainent} alt="" /><p>Entertainment</p>
    </div>
    <div className={`side_link ${category==28?"active":""}`} onClick={()=>setcategory(28)}>
      <img src={tech} alt="" /><p>Technology</p>
    </div>
    <div className={`side_link ${category==10?"active":""}`} onClick={()=>setcategory(10)}>
      <img src={music} alt="" /><p>Music</p>
    </div>
    <div className={`side_link ${category==22?"active":""}`} onClick={()=>setcategory(22)}>
      <img src={blogs} alt="" /><p>Blogs</p>
    </div>
    <div className={`side_link ${category==25?"active":""}`} onClick={()=>setcategory(25)}>
      <img src={news} alt="" /><p>News</p>
    </div>
    <hr />
  </div>
  <div className="subscribed_list">
    <h3>Subscribed</h3>
    <div className="side_link">
      <img src={jack} alt="" /><p>PewDiePie</p>
    </div>
    <div className="side_link">
      <img src={simon} alt="" /><p>Mr.Beast</p>
    </div>
    <div className="side_link">
      <img src={tom} alt="" /><p>Justin Bieber</p>
    </div>
    <div className="side_link">
      <img src={megan} alt="" /><p>5_min carft</p>
    </div>
    <div className="side_link">
      <img src={cameron} alt="" /><p>Nas daily</p>
    </div>
  </div>
</div>
  )
}

export default Sidebar