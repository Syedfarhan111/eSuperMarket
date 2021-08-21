import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  const [prod, setProd] = useState("");
  const myproducts = useSelector((state) => state.productReducer.product);
  return (
    <Card className="ProductList">
      <Row>
        <Col>
          <ProductItem />
        </Col>
        <Col>
          <ProductItem />
        </Col>
        <Col>
          <ProductItem />
        </Col>
      </Row>
    </Card>
  );
};

export default ProductList;
