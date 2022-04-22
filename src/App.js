import React from "react";
// import logo from './logo.svg';
import { TeamBoard } from "./features/teamBoard/TeamBoard";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Col>
            <TeamBoard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
