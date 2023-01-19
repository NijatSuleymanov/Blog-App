import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const SingleCard = ({id,photo,title,desc}) => {
  return (
    <Col sm={6} md={4}>
      <Card >
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {desc}
          </Card.Text>
          <Link to={`/blogs/${id}`}><Button variant="warning">Read More</Button></Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCard;
