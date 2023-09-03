import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { fetchMoviesBySearch } from '../store/search'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from "react";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState(""); // Step 2: Create a state variable

 

  useEffect(() => {
    dispatch(fetchMoviesBySearch(searchValue));
  }, [searchValue]);

  // Step 3: Attach an event handler to update the state variable
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchValue} // Step 4: Use the state variable
              onChange={handleInputChange} // Attach the event handler
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
