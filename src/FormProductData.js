import React from 'react'
import { Form,Button } from 'react-bootstrap'
export default function FormProductData() {
  return (
        <Form className="w-50 m-auto">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Shoes Name</Form.Label>
            <Form.Control type="text" placeholder="Enter product name" />
            
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image url</Form.Label>
            <Form.Control type="text" placeholder="url" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Cost</Form.Label>
            <Form.Control type="number" placeholder="Eg: 4500" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
  )
}
