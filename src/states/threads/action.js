import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

export const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  UP_VOTE_THREAD: 'UP_VOTE_THREAD',
  DOWN_VOTE_THREAD: 'DOWN_VOTE_THREAD',
  NEUTRALIZE_THREAD_VOTE: 'NEUTRALIZE_THREAD_VOTE',
};

export const receiveThreadActionCreator = (threads) => ({
  type: ActionType.RECEIVE_THREADS,
  payload: {
    threads,
  },
});

export const addThreadActionCreator = (thread) => ({
  type: ActionType.ADD_THREAD,
  payload: {
    thread,
  },
});

export const upVoteThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.UP_VOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

export const downVoteThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.DOWN_VOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

export const neutralizeThreadVoteActionCreator = ({ threadId, userId }) => ({
  type: ActionType.NEUTRALIZE_THREAD_VOTE,
  payload: {
    threadId,
    userId,
  },
});

export const asyncThread = ({ title, body, category }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const thread = await api.createThread({ title, body, category });
    dispatch(addThreadActionCreator(thread));
  } catch (err) {
    alert(err.message);
  }

  dispatch(hideLoading());
};

export const asyncUpVoteThread = (threadId) => async (dispatch, getState) => {
  dispatch(showLoading());
  const { authUser } = getState();
  dispatch(upVoteThreadActionCreator({ threadId, userId: authUser.id }));
  try {
    await api.upVoteThread(threadId);
  } catch (err) {
    alert(err.message);
  }

  dispatch(hideLoading());
};

export const asyncDownVoteThread = (threadId) => async (dispatch, getState) => {
  dispatch(showLoading());
  const { authUser } = getState();
  dispatch(downVoteThreadActionCreator({ threadId, userId: authUser.id }));
  try {
    await api.downVoteThread(threadId);
  } catch (err) {
    alert(err.message);
  }

  dispatch(hideLoading());
};

export const asyncneutralizeThreadVote = (threadId) => async (dispatch, getState) => {
  dispatch(showLoading());
  const { authUser } = getState();
  dispatch(neutralizeThreadVoteActionCreator({ threadId, userId: authUser.id }));
  try {
    await api.neutralizeThreadVote(threadId);
  } catch (err) {
    alert(err.message);
  }

  dispatch(hideLoading());
};
