import { ActionType } from './action';

export const leaderboardReducer = (leaderboards = [], action = {}) => {
  switch (action.type) {
  case ActionType.RECEIVE_LEADERBOARD:
    return action.payload.leaderboards;
  default:
    return leaderboards;
  }
};
