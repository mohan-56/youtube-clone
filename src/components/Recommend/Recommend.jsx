import React, { useEffect,useState } from 'react'
import './Recommend.css'
import { API_KEY } from '../../data'
import { view_converter } from '../../data'
import { Link } from 'react-router-dom'

const Recommend = ({categoryId}) => {
    const [apiData,setApiData]=useState(null);

    const fetchData=async()=>{
        const relatedVideoDetails=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
       await fetch(relatedVideoDetails)
       .then(res=>res.json())
       .then(data=> setApiData(data.items))
      }
      useEffect(()=>{
        fetchData()
      },[])
  return (
    <div className="recommended">
        {apiData && apiData.map((item,index)=>{
            return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-vide-list">
            <img src={item.snippet.thumbnails.medium.url} alt=""  />
            <div className="vid-info">
                 <h4>{item.snippet.title}</h4>
                 <p>{item.snippet.channelTitle}</p>
                 <p>{view_converter(item.statistics.viewCount)} views </p>
            </div>
        </Link>
            )
        })}
       
       
    </div>
  )
}

export default Recommend
