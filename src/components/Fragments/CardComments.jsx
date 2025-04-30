import React from "react";
import Button from "../Elements/Button";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import PropTypes from "prop-types";
import { postedAt } from "../../utils";
import { useDispatch } from "react-redux";
import {
  asyncDownVoteComment,
  asyncneutralizeComment,
  asyncUpVoteComment,
} from "../../states/threadDetail/action";
import { useParams } from "react-router-dom";

const CardComments = ({
  owner,
  createdAt,
  content,
  upVotesBy,
  downVotesBy,
  isUpVotedComment,
  isDownVoteComment,
  id,
  authUser,
}) => {
  const { threadId } = useParams();
  const dispatch = useDispatch();

  // Menangani upvote
  const upVotedComment = (commentId) => {
    if (upVotesBy.includes(authUser)) {
      dispatch(asyncneutralizeComment({ threadId, commentId })); 
    } else {
      dispatch(asyncUpVoteComment({ threadId, commentId })); 
    }
  };


  const downVotedComment = (commentId) => {
    if (downVotesBy.includes(authUser)) {
      dispatch(asyncneutralizeComment({ threadId, commentId })); 
    } else {
      dispatch(asyncDownVoteComment({ threadId, commentId })); 
    }
  };

  return (
    <div className="content-comment">
      <div className="comment-header">
        <div className="card-user">
          <img src={owner.avatar} alt="commentUser" className="img-user" />
          {owner.name}
        </div>
        <p>{postedAt(createdAt)}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <div className="card-footer">
        <div className="card-vote">
          <Button
            onClick={() => upVotedComment(id)}
            variant={isUpVotedComment ? "upComment" : ""}
          >
            <AiFillLike />
          </Button>
          <p>{upVotesBy.length}</p>
        </div>
        <div className="card-vote">
          <Button
            onClick={() => downVotedComment(id)}
            variant={isDownVoteComment ? "downComment" : ""}
          >
            <AiFillDislike />
          </Button>
          <p>{downVotesBy.length}</p>
        </div>
      </div>
    </div>
  );
};

CardComments.propTypes = {
  owner: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
  isUpVotedComment: PropTypes.bool,
  isDownVoteComment: PropTypes.bool,
  authUser: PropTypes.string.isRequired,
};

export default CardComments;
