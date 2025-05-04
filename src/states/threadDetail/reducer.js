import { ActionType } from './action';
export const threadDetailReducer = (threadDetail = null, action = {}) => {
  switch (action.type) {
  case ActionType.RECEIVE_THREAD_DETAIL:
    return action.payload.threadDetail;
  case ActionType.UP_THREAD_BY_ID:
    return {
      ...threadDetail,
      upVotesBy: threadDetail.upVotesBy.includes(action.payload.userId)
        ? threadDetail.upVotesBy
        : [...threadDetail.upVotesBy, action.payload.userId],
      downVotesBy: threadDetail.downVotesBy.filter(
        (id) => id !== action.payload.userId
      ),
    };
  case ActionType.DOWN_THREAD_BY_ID:
    return {
      ...threadDetail,
      downVotesBy: threadDetail.downVotesBy.includes(action.payload.userId)
        ? threadDetail.downVotesBy
        : [...threadDetail.downVotesBy, action.payload.userId],
      upVotesBy: threadDetail.upVotesBy.filter(
        (id) => id !== action.payload.userId
      ),
    };
  case ActionType.NEUTRALIZE_THREAD_BY_ID:
    return {
      ...threadDetail,
      upVotesBy: threadDetail.upVotesBy.filter(
        (id) => id !== action.payload.userId
      ),
      downVotesBy: threadDetail.downVotesBy.filter(
        (id) => id !== action.payload.userId
      ),
    };
  case ActionType.ADDCOMENT_THREAD_DETAIL:
    return {
      ...threadDetail,
      comments: [...threadDetail.comments, action.payload.comment],
    };
  case ActionType.CLEAR_THREAD_DETAIL:
    return null;
  case ActionType.UP_VOTE_COMMENT:
    return {
      ...threadDetail,
      comments: threadDetail.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            upVotesBy: comment.upVotesBy.includes(action.payload.userId)
              ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
              : [...comment.upVotesBy, action.payload.userId],
            downVotesBy: comment.downVotesBy.filter(
              (id) => id !== action.payload.userId
            ),
          };
        }
        return comment;
      }),
    };

  case ActionType.DOWN_VOTE_COMMENT:
    return {
      ...threadDetail,
      comments: threadDetail.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            downVotesBy: comment.downVotesBy.includes(action.payload.userId)
              ? comment.downVotesBy.filter(
                (id) => id !== action.payload.userId
              )
              : [...comment.downVotesBy, action.payload.userId],
            upVotesBy: comment.upVotesBy.filter(
              (id) => id !== action.payload.userId
            ),
          };
        }
        return comment;
      }),
    };
  case ActionType.NEUTRALIZE_COMMENT_VOTE:
    return {
      ...threadDetail,
      comments: threadDetail.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            downVotesBy: comment.downVotesBy.filter(
              (id) => id !== action.payload.userId
            ),
            upVotesBy: comment.upVotesBy.filter(
              (id) => id !== action.payload.userId
            ),
          };
        }
        return comment;
      }),
    };

  default:
    return threadDetail;
  }
};
