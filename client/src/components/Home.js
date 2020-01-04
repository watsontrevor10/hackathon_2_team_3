import React, { useState, useEffect } from 'react';
import { Header, } from 'semantic-ui-react';
import axios from 'axios'
import VideoForm from './VideoFrom'

const Home = () => {
  const [ videos, setVideos ] = useState([])
  useEffect( () => {
    axios.get('/api/videos')
    .then( res => {
        setVideos(res.data)
      })
  }, [])

  const renderVideos = () => {
    return videos.map( video => ( 
        <div key={video.id}>
          <iframe
          width="560"
          height="315"
          src={video.trailer}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
          <li >
            {video.title} 
            <br/>
            {video.duration}
          </li>
        </div> 
        )) 
  }
  return (
    <div>
      { renderVideos() }
    </div>
  )
}

export default Home;
