import React, { useState, useEffect } from 'react';
import { CardGroup, Card, Grid, Image } from 'semantic-ui-react';
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
      <Grid>
      <Grid.Row columns={3}>
        <Grid.Column>
        <iframe 
          width="560" 
          height="315" 
          src={video.trailer}
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
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


export default Home;
