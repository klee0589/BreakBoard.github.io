import { createSlice } from "@reduxjs/toolkit";
import { f1_teams } from "./data";

const initialState = {
  f1_teams
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
      const { f1_teams } = state
      let currentIndex = f1_teams.length,  randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex !== 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [f1_teams[currentIndex], f1_teams[randomIndex]] = [
          f1_teams[randomIndex], f1_teams[currentIndex]];
      }
    }
  }
});

export const {
  addOwner,
  shuffle
} = teamBoard.actions;

export const activeTeams = (state) => state.teams.f1_teams;

export default teamBoard.reducer;
