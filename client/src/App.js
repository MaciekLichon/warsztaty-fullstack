import Home from './components/pages/Home/Home';
import Post from './components/pages/Post/Post';
import AddPost from './components/pages/AddPost/AddPost';
import EditPost from './components/pages/EditPost/EditPost';
import Searched from './components/pages/Searched/Searched';
import NotFound from './components/pages/NotFound/NotFound';
import SignUp from './components/pages/SignUp/SignUp';
import SignIn from './components/pages/SignIn/SignIn';

import Header from './components/views/Header/Header';

import { Container } from 'react-bootstrap';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form/signUp" element={<SignUp />} />
          <Route path="/form/signIn" element={<SignIn />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="/post/edit/:id" element={<EditPost />} />
          <Route path="/search/:searchPhrase" element={<Searched />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
