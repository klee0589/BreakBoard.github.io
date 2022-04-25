import React from "react";
import { TeamBoard } from "./features/teamBoard/TeamBoard";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function App() {
  const sports = [
    { name: "F1", value: "f1" },
    { name: "NFL", value: "nfl" },
    { name: "SOCCER", value: "soc" },
  ];

  return (
    <div className="App">
      <Navbar variant="dark" expand="lg" className={"navbar"}>
        <Container>
          <Navbar.Brand href="#home">Breaker Board 5000</Navbar.Brand>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown" onSelect={() => console.log("CHANGE SPORT")}>
            {sports.map((sport) => (
              <NavDropdown.Item key={sport.value}>
                {sport.name}
              </NavDropdown.Item>
            ))}
            {/* <NavDropdown.Item onSelect={() => console.log('CHANGE SPORT')}>F1</NavDropdown.Item> */}
          </NavDropdown>
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
