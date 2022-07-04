import { getPostById, editPost } from '../../../redux/postsRedux';

import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';

import PostForm from '../PostForm/PostForm';

const EditPostForm = () => {

  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = post => {
    dispatch(editPost({ id, ...post }));
    navigate('/');
  };

  if(!postData) return <Navigate to="/" />
  return (
    <PostForm action={handleSubmit} actionText='Edit post' {...postData} />
  );
};

export default EditPostForm;
