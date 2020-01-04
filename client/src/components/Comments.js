import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CommentForm from './CommentForm'
import { Header, Segment, } from 'semantic-ui-react'

const Comments = () => {
  const [comments, setComments] = useState([])

  
  useEffect( () => {
    axios.get('/api/comments')
    .then(res => {
      setComments(res.data)
    })
  }, [])
  
  const renderComments = () => {
    return comments.map( comment => (
      <div key={comment.id}>
        {comment.body}
      </div>
    ))
  }
  
  const addComment = (comments) => setComments([ ...comments, comment, ])

  return (
    <Segment>
      Comments
      { renderComments() }

      <CommentForm add={addComment} />
    </Segment>
  )

}

export default Comments