import { ActionType } from './action';
export const threadsReducer = (threads = [], action = {}) => {
  switch (action.type) {
  case ActionType.RECEIVE_THREADS:
    return action.payload.threads;
  case ActionType.ADD_THREAD:
    return [...threads, action.payload.thread];
  case ActionType.UP_VOTE_THREAD:
    return threads.map((thread) => {
      if (thread.id === action.payload.threadId) {
        const isUpVoted = thread.upVotesBy.includes(action.payload.userId);
        return {
          ...thread,
          upVotesBy: isUpVoted
            ? thread.upVotesBy.filter((id) => id !== action.payload.userId)
            : [...thread.upVotesBy, action.payload.userId],
          downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.userId),
        };
      }
      return thread;
    });

  case ActionType.DOWN_VOTE_THREAD:
    return threads.map((thread) => {
      if (thread.id === action.payload.threadId) {
        const isDownVote = thread.downVotesBy.includes(action.payload.userId);
        return {
          ...thread,
          downVotesBy: isDownVote
            ? thread.downVotesBy.filter((id) => id !== action.payload.userId)
            : [...thread.downVotesBy, action.payload.userId],
          upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.userId),
        };
      }

      return thread;
    });
  case ActionType.NEUTRALIZE_THREAD_VOTE:
    return threads.map((thread) => {
      if (thread.id === action.payload.threadId) {
        return {
          ...thread,
          upVotesBy: thread.upVotesBy.filter((id) => id !== action.payload.userId),
          downVotesBy: thread.downVotesBy.filter((id) => id !== action.payload.userId),
        };
      }

      return thread;
    });
  default:
    return threads;
  }
};
