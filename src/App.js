import React, { Component } from "react";
import "./App.css";
import logo from "./pisc-1.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import LayoutImage from "./LayoutImage";
import himage from "./himage.jpg";
import Pagination from "./Pagination";

export default class App extends Component {
  state = {
    headerImage: "",
    img: {
      img1: "",
      img2: "",
    },
  };

  loadItems = (url) => {
    axios.get(url).then(
      (response) => {
        this.setState({
          img: {
            img1: response.data[0].download_url,
            img2: response.data[1].download_url,
          },
        });
        document.querySelector("body").classList.remove("pause");
      },
      (err) => {
        console.log("Err", err);
      }
    );
  };

  onPageChange = (evt) => {
    document.querySelector("body").classList.add("pause");
    let page = parseInt(evt.target.outerText);
    let dm = document.querySelector(".Pagination").childNodes;

    dm.forEach((node) => {
      node.classList.remove("active");
    });
    evt.target.classList.add("active");
    this.loadItems("https://picsum.photos/v2/list?page=" + page + "&limit=2");
  };

  componentDidMount() {
    this.loadItems("https://picsum.photos/v2/list?page=1&limit=2");
  }
  render() {
    const { img } = this.state;
    return (
      <div>
        <Container className="App">
          <Row className="Header">
            <Col xs="4" className="Logo">
              <img
                src={logo}
                style={{
                  height: "90px",
                  width: "90px",
                  position: "absolute",
                  top: "15px",
                }}
              />
            </Col>
            <Col xs="8" className="Title">
              <h1 className="H1">PICS APP</h1>
            </Col>
          </Row>
          <Row className="HeaderImage">
            <img src={himage} />
          </Row>
          <div className="Content">
            <LayoutImage img={img} />
          </div>
          <Row>
            <Pagination onClick={this.onPageChange} />
          </Row>
        </Container>
      </div>
    );
  }
}
