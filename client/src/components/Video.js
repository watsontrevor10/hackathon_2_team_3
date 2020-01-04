import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, } from 'react-router-dom';
import Segment from 'semantic-ui-react'

const Videos = (props) => {
  const [ video, setVideo ] = useState([])
  
  useEffect( () => {
    axios.get(`/api/videos/${video.id}`)
    .then( res => {
        setVideo(res.data)
      })
  }, [])
  
  return (
    <iframe
      width="560"
      height="315"
      src={video.trailer}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
      {video.title}
      {video.duration}
    </iframe>

  )

}

 export default Videos;