import React from 'react'
import './Video.css'
import PlayVideo from '../../components/PlayVideo/PlayVideo'
import Recommend from '../../components/Recommend/Recommend'
import { useParams } from 'react-router-dom'
const Video = () => {
  const {videoID,categoryID}=useParams();

  return (
   <div className="play-container">
        <PlayVideo />
        <Recommend categoryId={categoryID}/>
   </div>
  )
}

export default Video