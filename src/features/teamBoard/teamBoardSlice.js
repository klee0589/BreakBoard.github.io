import { createSlice } from "@reduxjs/toolkit";
import { f1_teams, nfl_teams } from "./data";

const initialState = {
  f1_teams,
  nfl_teams
};

export const teamBoard = createSlice({
  name: "teamBoard",
  initialState,
  reducers: {
    addOwner: (state, action) => {
      const teamId = action.payload.id;
      const newOwner = action.payload.owner;
      const team = state.f1_teams[teamId];
      team.owner = newOwner;
    },
    shuffle: (state) => {
      const { f1_teams } = state;
      let currentIndex = f1_teams.length,
        randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex !== 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [f1_teams[currentIndex], f1_teams[randomIndex]] = [
          f1_teams[randomIndex],
          f1_teams[currentIndex],
        ];
      }
    },
    shuffleNfl: (state) => {
      const { nfl_teams } = state;
      let currentIndex = nfl_teams.length,
        randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex !== 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [nfl_teams[currentIndex], nfl_teams[randomIndex]] = [
          nfl_teams[randomIndex],
          nfl_teams[currentIndex],
        ];
      }
    }
  },
});

export const { addOwner, shuffle, shuffleNfl } = teamBoard.actions;

export const activeF1Teams = (state) => state.teams.f1_teams;
export const activeNflTeams = (state) => state.teams.nfl_teams;

export default teamBoard.reducer;
