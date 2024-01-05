import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProCard({data}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height="300px" src={data.img} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Button variant="primary">Add to Cart : {data.cost}</Button>
      </Card.Body>
    </Card>
  );
}

export default ProCard;