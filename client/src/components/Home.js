import React, { useState, useEffect } from 'react';
import { Header, } from 'semantic-ui-react';
import axios from 'axios'

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
