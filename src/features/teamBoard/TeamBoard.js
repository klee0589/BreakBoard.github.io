import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addOwner, activeTeams, shuffle } from "./teamBoardSlice";
import styles from "./TeamBoard.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { f1_teams } from "./data";
import Dice from "react-dice-roll";

export function TeamBoard() {
  const teams = useSelector(activeTeams);
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  return (
    <Container>
      <Row>
        <Col xs={3}>
          <ListGroup variant="flush">
            {f1_teams.map((team) => (
              <ListGroup.Item key={team.id}>
                <div className={styles.teamContainer}>
                  <img className={styles.logo} src={team.logo} alt="logo" />
                  <div>{team.name}</div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col xs={3}>
          <ListGroup variant="flush">
            {teams.map((team, index) => (
              <ListGroup.Item key={team.id}>
                <div className={styles.teamContainer}>
                  <Form>
                    {}
                    <Form.Group className="mb-6" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder={team.owner ? team.owner : index}
                        onChange={(e) =>
                          dispatch(
                            addOwner({ id: team.id, owner: e.target.value })
                          )
                        }
                      />
                    </Form.Group>
                  </Form>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col xs={2}>
          <Button
            size="lg"
            onClick={() => {
              dispatch(shuffle());
              setCount(count + 1);
            }}
          >
            {count > 0 ? `Randomized ${count}X` : "Randomize"}
          </Button>
        </Col>
        <Col xs={4}>
          <Row>
            <Col>
              <Dice
                onRoll={(value) => console.log(value)}
                rollingTime={250}
                size={150}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
