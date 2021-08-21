import React from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Button, Card } from "react-bootstrap";

export const ProductItem = () => {
  const dispatch = useDispatch();
  return (
    <Card className="ProductItem">
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
            <h3>-</h3>
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() =>
              dispatch({
                type: "ADD_PRODUCT",
                data: ["Soap", "Tata Namak", "Suger"],
              })
            }
          >
            <h3>+</h3>
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
