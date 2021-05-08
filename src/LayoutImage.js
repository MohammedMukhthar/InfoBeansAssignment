import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
function LayoutImage(props) {
  return (
    <Row>
      <Col md="8" className="ImageLayout">
        <img
          src={props.img.img1}
          style={{
            width: "100%",
            padding: "0px",
            height: "300px",
          }}
        />
      </Col>
      <Col md="4">
        <img
          src={props.img.img2}
          style={{
            width: "100%",
            height: "300px",
            padding: "0px",
          }}
        />
      </Col>
    </Row>
  );
}

export default React.memo(LayoutImage);
