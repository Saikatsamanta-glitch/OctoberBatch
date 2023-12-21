import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProCard({data}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height="300px" src={data.image} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
        {data.description}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProCard;