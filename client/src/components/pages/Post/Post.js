import { useParams } from 'react-router';
import { Navigate, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getPostById, removePost } from '../../../redux/postsRedux';
import { getUserStatus } from '../../../redux/userRedux';
import { dateToStr } from '../../../utils/dateToStr';

import { Card, Button } from 'react-bootstrap';

const Post = () => {

  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));
  const userStatus = useSelector(getUserStatus);

  const dispatch = useDispatch();
  const removeSelectedPost = () => {
    dispatch(removePost(postData.id));
  };

  if (!postData) return <Navigate to="/" />
    return (
      <div className="col-6 m-auto">
        <div className="d-flex justify-content-between mb-4">
          <h1 className="m-0">{postData.title}</h1>
          { userStatus &&
            <div className="d-flex gap-2">
              <Card.Link as={NavLink} to={`/post/edit/${postData.id}`} className="btn btn-outline-info d-flex align-items-center">Edit</Card.Link>
              <Button variant="outline-danger" onClick={removeSelectedPost}>Delete</Button>
            </div>
          }
        </div>
        <div>
          <div style={{height: 300+'px'}} className="mb-3">
            <img src={postData.image} className="rounded img-fluid h-100 w-100" style={{objectFit:'cover'}} alt="..."></img>
          </div>
          <p className="m-0">
            <span className="fw-bold">Author: </span>
            {postData.author}
          </p>
          <p className="m-0">
            <span className="fw-bold">Published: </span>
            {dateToStr(postData.publishedDate)}
          </p>
          <p className="mt-4" dangerouslySetInnerHTML={{ __html: postData.content }} />
        </div>
      </div>
    );
};

export default Post;
