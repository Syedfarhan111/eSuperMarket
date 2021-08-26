import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProductDetails = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const myProducts = useSelector((state) => state.ProductReducer.product);
  const selectedId = useSelector((state) => state.ProductReducer.selectedid[0]);
  useEffect(() => {
    console.log(selectedId);
    const filteredProd = myProducts.filter((item) => item.id === selectedId);
    setSelectedProduct([...filteredProd]);
    console.log(filteredProd);
  }, [selectedId]);
  return (
    <div>
      <Card>
        <Row>
          <Col md={4}>Image</Col>
          <Col md={8}>Description</Col>
        </Row>
        <Link to="Details">
          <Button variant="success">Back</Button>
        </Link>
      </Card>
    </div>
  );
};
