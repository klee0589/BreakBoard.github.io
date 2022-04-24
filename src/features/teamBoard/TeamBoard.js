import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addOwner,
  activeTeams,
  shuffle
} from "./counterSlice";
import styles from "./Counter.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function TeamBoard() {
  const teams = useSelector(activeTeams);
  const dispatch = useDispatch();

  return (
    <ul className="mb-6">
      {teams.map((team) => (
        <li key={team.id}>
          <div className={styles.teamContainer}>
            <Form>
              <Form.Group className="mb-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder={team.owner}
                  onChange={(e) => dispatch(addOwner({ id: team.id, owner: e.target.value }))}
                />
              </Form.Group>
            </Form>
          </div>
        </li>
      ))}
      <Button onClick={() => dispatch(shuffle())}>SHUFFLE!!!</Button>
    </ul>
  );
}
