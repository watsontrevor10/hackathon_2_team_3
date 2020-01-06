import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CommentForm from './CommentForm'
import { Header, Segment, Card, Divider, Button, } from 'semantic-ui-react'

const Comments = () => {
  const [comments, setComments] = useState([])

  
  useEffect( () => {
    axios.get('/api/comments')
    .then(res => {
      setComments(res.data)
    })
  }, [])

  const deleteComment = (id) => {
    axios.delete(`/api/comments/${id}`)
      .then( res => {
        setComments(comments.filter( f => f.id !== id), )
      })
  }
  
  const renderComments = () => {
    return comments.map( comment => (
      <Card.Group itemsPerRow={4} doubling>
        <Card key={comment.id}>
          <Card.Content>
            <Header as='h4' textAlign='center'>Username</Header>
            <Divider />
            {comment.body}
            <Button onClick={() => deleteComment(comment.id)} color='red'>Delete</Button>
          </Card.Content>
        </Card>
      </Card.Group>
    ))
  }
  
  const addComment = (comment) => setComments([ ...comments, comment, ])

  return (
    <div>
      <Segment>
        { renderComments() }
      </Segment>
      <Segment>
        <CommentForm add={addComment} />
      </Segment>
    </div>
  )

}

export default Comments
