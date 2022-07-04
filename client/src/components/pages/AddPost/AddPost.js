import AddPostForm from '../../features/AddPostForm/AddPostForm';

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserStatus } from '../../../redux/userRedux';

const AddPost = () => {

  const userStatus = useSelector(getUserStatus);

  if (!userStatus) return <Navigate to="/" />
    return (
      <AddPostForm />
    );
};

export default AddPost;
