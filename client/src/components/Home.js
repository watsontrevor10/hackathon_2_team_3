import React, { useState, useEffect } from 'react';
import { Header, } from 'semantic-ui-react';

const Home = () => {
  const [ video, setVideo ] = useState([])

  useEffect( () => {
    axios.get('/api/videos')
      .then( res => {
        setVideo(res.data)
      })
  }, [])

  

  return (
    <Header as="h3" textAlign="center">Videos</Header>
    
  )
}

export default Home;
