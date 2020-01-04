import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Form, Button, } from 'semantic-ui-react'

const CommentForm = (props) => {
  const [body, setBody] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/comments', { body, })
    .then(res => {
        props.add(res.data);
      })
  }

  const handleBodyChange = (e) => {
    setBody(e.target.value)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        id='body'
        name='body'
        label='Body'
        placeholder='Body'
        value={body}
        onChange={handleBodyChange}
      />
      <Button>Submit</Button>
    </Form>
  )

}

export default CommentForm