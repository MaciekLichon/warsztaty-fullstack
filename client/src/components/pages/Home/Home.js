import Posts from '../../features/Posts/Posts';
import SearchForm from '../../features/SearchForm/SearchForm';

import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { getUserStatus } from '../../../redux/userRedux';

const Home = () => {

  const posts = useSelector(getAllPosts);
  const userStatus = useSelector(getUserStatus);

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <h1>All adverts</h1>
        {userStatus && <Card.Link as={NavLink} to='/post/add' className="btn btn-outline-info d-flex align-items-center">Advertise now!</Card.Link>}
      </div>
      <SearchForm />
      <Posts posts={posts} />
    </>
  );
};

export default Home;
