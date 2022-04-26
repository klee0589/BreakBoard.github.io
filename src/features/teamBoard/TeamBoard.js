import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  activeF1Teams,
  activeNflTeams,
  shuffle,
  shuffleNfl,
} from "./teamBoardSlice";
import styles from "./TeamBoard.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { f1_teams, nfl_teams } from "./data";
import Dice from "react-dice-roll";
// import Wheel from "../wheel";

import { Wheel } from "react-custom-roulette";

export function TeamBoard() {
  const sports = [
    { name: "F1", value: "f1", isActive: false },
    { name: "NFL", value: "nfl", isActive: false },
  ];

  const data = [
    { option: "0", style: { backgroundColor: "green", textColor: "black" } },
    { option: "1", style: { backgroundColor: "white" } },
    { option: "2" },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const f1TeamsSelector = useSelector(activeF1Teams);
  const nflTeamsSelector = useSelector(activeNflTeams);
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  const [sport, setSport] = useState("f1");

  const activeSportTeam = sport === "f1" ? f1_teams : nfl_teams;

  const activeSport = sport === "f1" ? f1TeamsSelector : nflTeamsSelector;

  return (
    <Container>
      <Row>
        <Col xs={3}>
          <ListGroup variant="flush">
            {activeSportTeam.map((team) => (
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
            {activeSport.map((team, index) => (
              <ListGroup.Item key={team.id}>
                <div className={styles.teamContainer}>
                  <Form>
                    {}
                    <Form.Group className="mb-6" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder={team.owner ? team.owner : index}
                      />
                    </Form.Group>
                  </Form>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col xs={4}>
          <ButtonGroup>
            <Button
              key={"shuffle"}
              variant="outline-success"
              size="md"
              onClick={() => {
                if (sport === "f1") {
                  dispatch(shuffle());
                }
                if (sport === "nfl") {
                  dispatch(shuffleNfl());
                }
                setCount(count + 1);
              }}
            >
              {count > 0 ? `Randomized ${count}X` : "Randomize"}
            </Button>
            {sports.map((sport, index) => (
              <Button
                key={sport.value}
                variant="outline-primary"
                active={sport.isActive}
                value={sport.value}
                onClick={(e) => {
                  setSport(e.target.value);
                }}
              >
                {sport.name}
              </Button>
            ))}
          </ButtonGroup>
        </Col>
        <Col xs={2}>
          <Row>
            <Col>
              <Dice
                // onRoll={(value) => console.log(value)}
                rollingTime={250}
                size={150}
              />
            </Col>
            <Col>
              <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                onStopSpinning={() => {
                  setMustSpin(false);
                }}
              />
              <button onClick={handleSpinClick}>SPIN</button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
