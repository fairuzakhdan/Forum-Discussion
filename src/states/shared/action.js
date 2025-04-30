import { receiveThreadActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../user/action';
import { receiveLeaderboardActionCreator } from '../leaderboard/action';
import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

export const asyncPopulateUsersandThread = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const threads = await api.getAllThreads();
    const users = await api.getAllUsers();
    dispatch(receiveThreadActionCreator(threads));
    dispatch(receiveUsersActionCreator(users));
  } catch (err) {
    alert(err.message);
  }

  dispatch(hideLoading());
};

export const asyncPopulateLeaderboardandUser = () => async (dispatch) => {
  dispatch(showLoading());
  try {
    const leaderboards = await api.getLeaderboard();
    dispatch(receiveLeaderboardActionCreator(leaderboards));
  } catch (err) {
    alert(err.message);
  }

  dispatch(hideLoading());
};
