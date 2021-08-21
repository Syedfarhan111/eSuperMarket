import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

export const TopNav = () => {
  const Products = useSelector((state) => state.productReducer.product);
  console.log(Products);
  return (
    <Card className="TopNav">
      <Row>
        <Col md={10}></Col>
        <Col md={2}>
          <h3>Card:{Products.length}</h3>
        </Col>
      </Row>
    </Card>
  );
};
                                            