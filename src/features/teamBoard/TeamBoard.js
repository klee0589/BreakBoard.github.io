import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addOwner,
  activeTeams
} from "./counterSlice";
import styles from "./Counter.module.css";
import Form from "react-bootstrap/Form";

export function TeamBoard() {
  const teams = useSelector(activeTeams);
  const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState("2");

  // const incrementValue = Number(incrementAmount) || 0;

  return (
    <ul className="mb-6">
      {teams.map((team) => (
        <li key={team.id}>
          <div className={styles.teamContainer}>
            <img className={styles.logo} src={team.logo} alt="logo" />
            <div>{team.name}</div>
            <Form>
              <Form.Group className="mb-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder={team.owner}
                  onChange={(e) => dispatch(addOwner(teams, e.target.value))}
                />
              </Form.Group>
            </Form>
          </div>
        </li>
      ))}
    </ul>
  );

  // return (
  //   <div>
  //     <div className={styles.row}>
  //       <button
  //         className={styles.button}
  //         aria-label="Decrement value"
  //         onClick={() => dispatch(decrement())}
  //       >
  //         -
  //       </button>
  //       <span className={styles.value}>{count}</span>
  //       <button
  //         className={styles.button}
  //         aria-label="Increment value"
  //         onClick={() => dispatch(addOwner())}
  //       >
  //         +
  //       </button>
  //     </div>
  //     <div className={styles.row}>
  //       <input
  //         className={styles.textbox}
  //         aria-label="Set increment amount"
  //         value={incrementAmount}
  //         onChange={(e) => setIncrementAmount(e.target.value)}
  //       />
  //       <button
  //         className={styles.button}
  //         onClick={() => dispatch(incrementByAmount(incrementValue))}
  //       >
  //         Add Amount
  //       </button>
  //       <button
  //         className={styles.asyncButton}
  //         onClick={() => dispatch(incrementAsync(incrementValue))}
  //       >
  //         Add Async
  //       </button>
  //       <button
  //         className={styles.button}
  //         onClick={() => dispatch(incrementIfOdd(incrementValue))}
  //       >
  //         Add If Odd
  //       </button>
  //     </div>
  //   </div>
  // );
}
