import React from "react";
import { TeamBoard } from "./features/teamBoard/TeamBoard";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar variant="dark" expand="lg" className={"navbar"}>
        <Container>
          <Navbar.Brand>Breaker Board 5000</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <TeamBoard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
