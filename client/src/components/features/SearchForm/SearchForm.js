import { Form, Button, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateSearchstring } from '../../../redux/searchStringRedux';

const SearchForm = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSearchstring(''));
  }, []);

  const [phrase, setPhrase] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchstring(phrase));
    console.log(phrase)
    setPhrase('');
  };

  return (
    <Row xs={1} sm={2} md={3} className="g-4">
      <Form className="mb-3" onSubmit={handleSubmit} value={phrase} onChange={e => setPhrase(e.target.value)}>
        <Form.Group className="mb-2">
          <Form.Control type="text" placeholder="Search adverts" />
        </Form.Group>
        <Button variant="primary" type="submit" as={NavLink} to={`/search/${phrase}`}>
          Submit
        </Button>
      </Form>
    </Row>
  );
};

export default SearchForm;
