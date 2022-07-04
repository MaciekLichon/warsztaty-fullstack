import EditPostForm from '../../features/EditPostForm/EditPostForm';

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserStatus } from '../../../redux/userRedux';

const EditPost = () => {

  const userStatus = useSelector(getUserStatus);

  if (!userStatus) return <Navigate to="/" />
    return (
      <EditPostForm />
    );
};

export default EditPost;
