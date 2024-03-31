import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
// import  video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'

import Recommend from '../Recommend/Recommend'
import { view_converter } from '../../data'
import { API_KEY } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'
const PlayVideo = () => {
  const {videoID}=useParams()
   const [apiData,setApiData]=useState(null);
   const [channelData,setChannelData]=useState(null);
   const [commentData,setCommentData]=useState(null);


   const fetchVideoData=async()=>{
     const video_details=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=${API_KEY}`;
    await fetch(video_details)
    .then(res=>res.json())
    .then(data=> setApiData(data.items[0]))
   }


   const fetchOtherData=async()=>{
    const channel_details=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData && apiData.snippet.channelId}&key=${API_KEY}`;
   await fetch(channel_details)
   .then(res=>res.json())
   .then(data=> setChannelData(data.items[0]));
   //fetch comments
   const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&textFormat=plainText&videoId=${videoID}&key=${API_KEY}`;
   await fetch(comment_url)
   .then(res=>res.json())
   .then(data=> {setCommentData(data.items);
    // console.log("fetch comments success");
  // console.log(data.items)
});

  }



   useEffect(()=>{fetchVideoData()},
   [videoID])


   useEffect(()=>{
    fetchOtherData()
   },[apiData])


  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay ></video> */}
        <iframe  src={`https://www.youtube.com/embed/${videoID}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"title loading........"}</h3>
        <div className="play-vide-info">
        <p>{apiData?view_converter(apiData.statistics.viewCount):""} views &bull;   { apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
        <div>
          <span><img src={like} alt="" srcset="" />{apiData?view_converter(apiData.statistics.likeCount):""}</span>
          <span><img src={dislike} alt="" srcset="" /> </span>
          <span><img src={share} alt="" srcset="" />share</span>
          <span><img src={save} alt="" srcset="" />save</span>
          {/* <span><img src={like} alt="" srcset="" /></span> */}
        </div>
        </div>
        <hr />
        <div className="publisher">
          <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" srcset="" />
          <div>
            <p>{apiData?apiData.snippet.channelTitle:""}</p>
            <span>{channelData?view_converter(channelData.statistics.subscriberCount):""} subscribers</span>
          </div>
          <button>Subscribe</button>
        </div>
        <div className="video-description">
          <details>
            <summary> {apiData?apiData.snippet.description.slice(0,250):""}</summary>
            <p>
         {apiData?apiData.snippet.description:""}
         </p>
          </details>
        
          <hr />
          <h4>{apiData?view_converter(apiData.statistics.commentCount):""} comments</h4>
          {commentData && commentData.map((val,index)=>{
            return(
              <div   key={index} className="comment">
              <img src={val.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" srcset="" />
              <div>
                <h3>{val.snippet.topLevelComment.snippet.authorDisplayName.slice(1,-1)} <span>1day ag0</span></h3>
                <p>
                {val.snippet.topLevelComment.snippet.textDisplay} 
                </p>
                <div className="comment-action">
                  <img src={like} alt="" srcset="" />
                  <span>{view_converter(val.snippet.topLevelComment.snippet.likeCount)} </span>
                  <img src={dislike} alt="" srcset="" />
                  
                </div>
              </div>
            </div>
            )
          })}
          
         
        </div>
     
        </div>
    
  )
}

export default PlayVideo
