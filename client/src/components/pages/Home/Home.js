import Posts from '../../features/Posts/Posts';
import SearchForm from '../../features/SearchForm/SearchForm';

import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';

const Home = () => {

  const posts = useSelector(getAllPosts);

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <h1>All adverts</h1>
        <Card.Link as={NavLink} to='/post/add' className="btn btn-outline-info d-flex align-items-center">Advertise now!</Card.Link>
      </div>
      <SearchForm />
      <Posts posts={posts} />
    </>
  );
};

export default Home;
