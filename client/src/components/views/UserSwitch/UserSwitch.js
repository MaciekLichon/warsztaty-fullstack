import { Nav, Button } from 'react-bootstrap';

import clsx from 'clsx';

import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateUser, getUserStatus } from '../../../redux/userRedux';

const UserSwitch = () => {

  const dispatch = useDispatch();
  const userStatus = useSelector(getUserStatus);

  const [userLoggedIn, setUserLoggedIn] = useState(userStatus);

  useEffect(() => {
    dispatch(updateUser(userLoggedIn));
  }, [userLoggedIn, dispatch]);

  const logIn = e => {
    e.preventDefault();
    setUserLoggedIn(true);
    dispatch(updateUser(userLoggedIn));
  };

  const logOut = e => {
    e.preventDefault();
    setUserLoggedIn(false);
    dispatch(updateUser(userLoggedIn));
  };

  return (
    <Nav>
      <Button className={clsx("btn btn-outline-light mx-1", userLoggedIn && "active" )} onClick={logIn}>User</Button>
      <Button className={clsx("btn btn-outline-light mx-1", !userLoggedIn && "active" )} onClick={logOut}>Visitor</Button>
    </Nav>
  );
};

export default UserSwitch;
