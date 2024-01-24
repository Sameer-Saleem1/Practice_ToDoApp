import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const TodoItem = ({ todoName, todoDate, handleDelete }) => {
  return (
    <center>
      <Container className="mt-3 ">
        <Row>
          <Col xs={12} md={6}>
            <h5>{todoName}</h5>
          </Col>
          <Col xs={12} md={4}>
            <h5>{todoDate}</h5>
          </Col>
          <Col xs={12} md={2}>
            <Button onClick={() => handleDelete(todoName)} variant="danger">
              Delete
            </Button>
          </Col>
        </Row>
      </Container>
    </center>
  );
};

export default TodoItem;
