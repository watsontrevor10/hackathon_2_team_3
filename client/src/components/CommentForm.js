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
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field
        id='body'
        name='body'
        label='Body'
        placeholder='Body'
        value='body'
        onChange={setBody(e.target.value)}
      />
      <Button>Submit</Button>
    </Form>
  )

}

export default CommentForm