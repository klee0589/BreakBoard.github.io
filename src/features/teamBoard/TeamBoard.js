// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
  // decrement,
  // increment,
  // incrementByAmount,
  // incrementAsync,
  // incrementIfOdd,
  // selectCount,
// } from "./counterSlice";
import styles from "./Counter.module.css";

const f1_teams = [
  {
    id: "f1_ferrari",
    name: "Ferrari",
    isSelected: false,
    logo: "https://www.formula1.com/content/dam/fom-website/teams/2022/ferrari-logo.png.transform/2col/image.png",
  },
  {
    id: "f1_mercedes",
    name: "Mercedes",
    isSelected: false,
    logo: "https://www.formula1.com/content/dam/fom-website/teams/2022/mercedes-logo.png.transform/2col/image.png",
  },
  {
    id: "f1_red_bull_racing",
    name: "Red Bull Racing",
    isSelected: false,
    logo: "https://www.formula1.com/content/dam/fom-website/teams/2022/red-bull-racing-logo.png.transform/2col/image.png",
  },
  {
    id: "f1_mcclaren",
    name: "McClaren",
    isSelected: false,
    logo: "https://www.formula1.com/content/dam/fom-website/teams/2022/mclaren-logo.png.transform/2col/image.png",
  },
  {
    id: "f1_alpine",
    name: "Alpine",
    isSelected: false,
    logo: "https://www.formula1.com/content/dam/fom-website/teams/2022/alpine-logo.png.transform/2col/image.png",
  },
  {
    id: "f1_alfa_romeo",
    name: "Alfa Romeo",
    isSelected: false,
    logo: "https://www.formula1.com/content/dam/fom-website/teams/2022/alfa-romeo-logo.png.transform/2col/image.png",
  },
  {
    id: "f1_haas",
    name: "Haas F1 Team",
    isSelected: false,
    logo: "https://www.formula1.com/content/dam/fom-website/teams/2022/haas-f1-team-logo.png.transform/2col/image.png",
  },
  {
    id: "f1_alphatauri",
    name: "AlphaTauri",
    isSelected: false,
    logo: "https://www.formula1.com/content/dam/fom-website/teams/2022/alphatauri-logo.png.transform/2col/image.png",
  },
  {
    id: "f1_williams",
    name: "Williams",
    isSelected: false,
    logo: "https://www.formula1.com/content/dam/fom-website/teams/2022/williams-logo.png.transform/2col/image.png",
  },
  {
    id: "f1_aston_martin",
    name: "Aston Martin",
    isSelected: false,
    logo: "https://www.formula1.com/content/dam/fom-website/teams/2022/aston-martin-logo.png.transform/2col/image.png",
  },
  {
    id: "f1_f2",
    name: "F2",
    isSelected: false,
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Formula_2_logo.svg/440px-Formula_2_logo.svg.png",
  },
];

export function TeamBoard() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState("2");

  // const incrementValue = Number(incrementAmount) || 0;

  return (
    <ul>
      {f1_teams.map((team) => (
        <li key={team.id}>
          <img className={styles.logo} src={team.logo} alt="logo" />
          {team.name}
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
  //         onClick={() => dispatch(increment())}
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
