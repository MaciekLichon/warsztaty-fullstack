import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import UserSwitch from '../UserSwitch/UserSwitch';

import { useSelector } from 'react-redux';
import { getUserStatus } from '../../../redux/userRedux';

const NavBar = () => {

  const userStatus = useSelector(getUserStatus);

  return (
    <Navbar bg="primary" variant="dark" className="d-flex justify-content-between my-4 rounded">
      <Navbar.Brand as={NavLink} to="/" className="px-3">Advert.app</Navbar.Brand>
      <UserSwitch />
      <Nav>
        {!userStatus && <Nav.Link as={NavLink} to="/form/signUp">Sign up</Nav.Link>}
        {!userStatus && <Nav.Link as={NavLink} to="/form/signIn" className="px-3">Sign in</Nav.Link>}
        {userStatus && <Nav.Link>My posts</Nav.Link>}
        {userStatus && <Nav.Link className="px-3">Sign out</Nav.Link>}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
