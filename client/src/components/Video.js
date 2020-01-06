import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, } from 'react-router-dom';
import { Segment, Button, Icon, Divider, } from 'semantic-ui-react'
import Comments from './Comments'


const Videos = ({location}) => {
  const [ video, setVideo ] = useState(location.state.video)

  const deleteVideo = (id) => {
    axios.delete(`/api/videos/${id}`)
    .then( res => setVideo(video.filter( f => f.id !== id), ))
  }
  
  useEffect( () => {
    axios.get(`/api/videos/${video.id}`)
    .then( res => {
        setVideo(res.data)
      })
  }, [])
  
  return (
    <>
    <br/>
      <iframe
        width="1120"
        height="630"
        src={video.trailer}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
        {video.title}
        {video.duration}
      </iframe>
      <br/>
      <Button onClick={() => deleteVideo(video.id)}>
        <Icon name="trash alternate" />
      </Button>
      <Divider />
      <Comments />
    </>
  )
}
 export default Videos;