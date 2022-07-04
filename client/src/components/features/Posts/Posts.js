import { NavLink } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';

import { dateToStr } from '../../../utils/dateToStr';
import { sortObjByDate } from '../../../utils/sortObjByDate';

const Posts = ({ posts }) => {

  const postsSorted = sortObjByDate(posts);

  return (
    <Row xs={1} sm={2} md={3} className="g-4 mt-1">
      {postsSorted.map(post => (
        <Col key={post.id}>
          <Card>
            <Card.Body style={{height: 550+'px'}}>
              <Card.Img variant="top" className="rounded img-fluid h-75 mb-2" style={{objectFit:'cover'}} src={post.image} />
              <Card.Title>{post.title}</Card.Title>
              <p className="m-0">
                <span className="fw-bold">Location: </span>
                {post.location}
              </p>
              <p className="m-0">
                <span className="fw-bold">Published: </span>
                {dateToStr(post.publishedDate)}
              </p>
              <Card.Link as={NavLink} to={`/post/${post.id}`} className="btn btn-primary mt-2">Read more</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Posts;
