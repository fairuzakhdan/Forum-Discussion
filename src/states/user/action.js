export const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

export const receiveUsersActionCreator = (users) => ({
  type: ActionType.RECEIVE_USERS,
  payload: {
    users,
  },
});
