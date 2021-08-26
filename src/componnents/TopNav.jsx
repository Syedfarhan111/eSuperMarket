import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Card, Form } from "react-bootstrap";

export const TopNav = ({ setSearchTxt }) => {
  const products = useSelector((state) => state.productReducer.product);
  console.log("TopNav========>", products);
  // useEffect(() =>{
  //   console.log("SearcgTxt------->", searchTxt);
  // }, [searchTxt]);
  return (
    <Card className="topnav">
      <Row>
        <Col md={7}> </Col>
        <Col md={3}>
          <Form.Control
            type="text"
            onChange={(e) => setSearchTxt(e.target.value)}
          />
        </Col>
        <Col md={2}>
          <h3>Cart: {products.length}</h3>
        </Col>
      </Row>
    </Card>
  );
};
