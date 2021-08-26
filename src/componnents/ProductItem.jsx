import React from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Card, Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
export const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  console.log("Item====>", item);
  return (
    <Card className="productitem">
      <Row>
        <Image src={`${item.image}`} width="100px" height="300px" />
      </Row>
      <Row>
        <Form.Label>{item.title}</Form.Label>
      </Row>
      <Row>
        <Form.Label>${item.price}</Form.Label>
      </Row>
      <Row>
        <Col>
          <Button
            onClick={() =>
              dispatch({
                type: "REMOVE_PRODUCT",
                data: "Soap",
              })
            }
          >
            -
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() =>
              dispatch({
                type: "ADD_PRODUCT",
                data: ["Soap", "Tata Namak"],
              })
            }
          >
            +
          </Button>
        </Col>
      </Row>
      <Row>
        <Link to="/detail">
          <Button
            variant="primary"
            style={{ width: "100" }}
            onClick={() =>
              dispatch({
                type: "SLECTED-PROD-ID",
                data: item.dispatch,
              })
            }
          >
            View
          </Button>
        </Link>
      </Row>
    </Card>
  );
};
