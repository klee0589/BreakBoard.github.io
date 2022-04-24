// import React from "react";
// import logo from './logo.svg';
import { TeamBoard } from "./features/teamBoard/TeamBoard";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Dice from "react-dice-roll";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" className={'navbar'}>
        <Container>
          <Navbar.Brand href="#home">Breaker Board 5000</Navbar.Brand>
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
