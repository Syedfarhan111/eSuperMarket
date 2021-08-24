import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export const ProductDetails = () => {
  return (
    <div>
      <Card>
        <Row>
          <Col md={4}>Image</Col>
          <Col md={8}>Description</Col>
        </Row>
        <Link>
          <Button variant="success">Back</Button>
        </Link>
      </Card>
    </div>
  );
};
