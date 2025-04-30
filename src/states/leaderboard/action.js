export const ActionType = {
  RECEIVE_LEADERBOARD: 'RECEIVE_LEADERBOARD',
};

export const receiveLeaderboardActionCreator = (leaderboards) => ({
  type: ActionType.RECEIVE_LEADERBOARD,
  payload: {
    leaderboards,
  },
});

