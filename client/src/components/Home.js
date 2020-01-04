import React, { useState, useEffect } from 'react';
import { CardGroup, Card, Grid, Image } from 'semantic-ui-react';
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
      <Grid>
      <Grid.Row columns={3}>
        <Grid.Column>
        <Image src='https://www.techadvisor.co.uk/cmsdata/features/3511087/how-to-fix-youtube-videos-that-wont-play_thumb800.jpg' />
          <Card>
            { video.title }
            <br />
            { video.genre }
            <br />
            { video.duration }
            <br />
            { video.description }
            <br />
            { video.trailer }
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            { video.title }
            { video.genre }
            { video.duration }
            { video.description }
            { video.trailer }
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            { video.title }
            { video.genre }
            { video.duration }
            { video.description }
            { video.trailer }
          </Card>
        </Grid.Column>
      </Grid.Row>
      </Grid>
        )) 
  }
  return (
    <div>
      { renderVideos() }
    </div>
  )
}

export default Home;
