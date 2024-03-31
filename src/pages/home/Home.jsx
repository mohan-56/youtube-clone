import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar'
import Feed from '../../components/feed/Feed'
const Home = ({sidebar}) => {
  const [category,setcategory]=useState(0);
  return (
    <>
    <Sidebar sidebar={sidebar}  category={category} setcategory={setcategory}/>
    <div className={`container${sidebar?"":' large-container'}`}>
        <Feed category={category}/>
    </div>
    </>
  )
}

export default Home