import Posts from '../../features/Posts/Posts';

import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getFilteredPosts } from '../../../redux/postsRedux';

const Searched = () => {

  const { searchPhrase } = useParams();
  const filteredPosts = useSelector(state => getFilteredPosts(state, searchPhrase));

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <h1>Search: '{searchPhrase}'</h1>
      </div>
      <Posts posts={filteredPosts} />
    </>
  );
};

export default Searched;
