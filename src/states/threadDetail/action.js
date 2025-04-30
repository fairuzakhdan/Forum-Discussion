import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

export const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  ADDCOMENT_THREAD_DETAIL: 'ADDCOMENT_THREAD_DETAIL',
  UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
  DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
  NEUTRALIZE_COMMENT_VOTE: 'NEUTRALIZE_COMMENT_VOTE',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  UP_THREAD_BY_ID: 'UP_THREAD_BY_ID',
  DOWN_THREAD_BY_ID: 'DOWN_THREAD_BY_ID',
  NEUTRALIZE_THREAD_BY_ID: 'NEUTRALIZE_THREAD_BY_ID',
};

export const receiveThreadDetailActionCreator = (threadDetail) => ({
  type: ActionType.RECEIVE_THREAD_DETAIL,
  payload: {
    threadDetail,
  },
});

export const clearThreadDetailActionCreator = () => ({
  type: ActionType.CLEAR_THREAD_DETAIL,
});

export const upThreadByIdActionCreator = ({ threadId, userId }) => ({
  type: ActionType.UP_THREAD_BY_ID,
  payload: {
    threadId,
    userId,
  },
});

export const downThreadByIdActionCreator = ({ threadId, userId }) => ({
  type: ActionType.DOWN_THREAD_BY_ID,
  payload: {
    threadId,
    userId,
  },
});

export const neutralizeThreadByIdActionCreator = ({ threadId, userId }) => ({
  type: ActionType.NEUTRALIZE_THREAD_BY_ID,
  payload: {
    threadId,
    userId,
  },
});

export const addCommentActionCreator = (comment) => ({
  type: ActionType.ADDCOMENT_THREAD_DETAIL,
  payload: {
    comment,
  },
});


export const upVoteComment = ({ userId, commentId }) => ({
  type: ActionType.UP_VOTE_COMMENT,
  payload: {
    userId,
    commentId,
  },
});

export const downVoteComment = ({ userId, commentId }) => ({
  type: ActionType.DOWN_VOTE_COMMENT,
  payload: {
    userId,
    commentId,
  },
});

export const neutralizeCommentVote = ({ userId, commentId }) => ({
  type: ActionType.NEUTRALIZE_COMMENT_VOTE,
  payload: {
    userId,
    commentId,
  },
});

export const asyncReceiveThreadDetail = (threadId) => async (dispatch) => {
  dispatch(showLoading());
  dispatch(clearThreadDetailActionCreator());
  try {
    const threadDetail = await api.getThreadDetail(threadId);
    dispatch(receiveThreadDetailActionCreator(threadDetail));
  } catch (err) {
    alert(err.message);
  }

  dispatch(hideLoading());
};

export const asyncAddComment = ({ threadId, content }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const comment = await api.createComment({ threadId, content });
    dispatch(addCommentActionCreator(comment));
  } catch (err) {
    alert(err.message);
  }
  dispatch(hideLoading());
};

export const asyncUpVoteThreadById = (threadId) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(upThreadByIdActionCreator({ threadId, userId: authUser.id }));
    try {
      await api.upVoteThread(threadId);
    } catch (err) {
      alert(err.message);
    }
    dispatch(hideLoading());
  };
};

export const asyncDownVoteThreadById = (threadId) => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(downThreadByIdActionCreator({ threadId, userId: authUser.id }));
    try {
      await api.downVoteThread(threadId);
    } catch (err) {
      alert(err.message);
    }
    dispatch(hideLoading());
  };
};

export const asyncneutralizeThreadVoteById = (threadId) =>{
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(neutralizeThreadByIdActionCreator({ threadId, userId: authUser.id }));
    try {
      await api.neutralizeThreadVote(threadId);
    } catch (err) {
      alert(err.message);
    }
    dispatch(hideLoading());
  };
};

export const asyncUpVoteComment = ({ threadId, commentId }) => async (dispatch, getState) => {
  dispatch(showLoading());
  const { authUser } = getState();
  try {
    dispatch(upVoteComment({ userId: authUser.id, commentId }));
    await api.upVoteComment({ threadId, commentId });
  } catch (err) {
    alert(err.message);
  }
  dispatch(hideLoading());
};

export const asyncDownVoteComment = ({ threadId, commentId }) => async (dispatch, getState) => {
  dispatch(showLoading());
  const { authUser } = getState();
  try {
    dispatch(downVoteComment({ userId: authUser.id, commentId }));
    await api.downVoteComment({ threadId, commentId });
  } catch (err) {
    alert(err.message);
  }

  dispatch(hideLoading());
};

export const asyncneutralizeComment = ({ threadId, commentId }) => async (dispatch, getState) => {
  dispatch(showLoading());
  const { authUser } = getState();
  try {
    dispatch(neutralizeCommentVote({ userId: authUser.id, commentId }));
    await api.neutralizeCommentVote({ threadId, commentId });
  } catch (err) {
    alert(err.message);
  }

  dispatch(hideLoading());
};
