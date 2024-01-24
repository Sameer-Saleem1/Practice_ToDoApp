import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const ToDO = ({ handleNewItem }) => {
  const [name, setName] = useState();
  const [date, setDate] = useState();

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    handleNewItem(name, date);
    setName("");
    setDate("");
  };
  return (
    <center>
      <Container>
        <h1 className="my-4">TODO LIST</h1>
        <Row>
          <Col xs={12} md={6}>
            <input
              type="text"
              placeholder="Enter your Task here"
              onChange={handleName}
              value={name}
              className="mb-4"
            />
          </Col>
          <Col xs={12} md={4}>
            <input
              type="date"
              className="mb-4"
              value={date}
              onChange={handleDate}
            />
          </Col>
          <Col xs={12} md={2}>
            <Button variant="success" onClick={handleAddButtonClick}>
              Add
            </Button>
          </Col>
        </Row>
      </Container>
    </center>
  );
};

export default ToDO;
