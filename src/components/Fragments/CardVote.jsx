import React from "react";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import PropTypes from "prop-types";
import Button from "../Elements/Button";
import { BiShare } from "react-icons/bi";
import { postedAt } from "../../utils"

const CardVote = ({
  likeVote,
  unLikeVote,
  upVotesBy,
  downVotesBy,
  ownerId,
  totalComments,
  createdAt,
  imageUser,
  id,
  isUpVote,
  isDownVote,
}) => {
  return (
    <footer className="card-footer">
      <div className="card-vote">
        <Button
          onClick={() => likeVote(id)}
          variant={isUpVote ? "upLike" : ""}
        >
          <AiFillLike />
        </Button>
        <p>{upVotesBy}</p>
      </div>
      <div className="card-vote">
        <Button
          onClick={() => unLikeVote(id)}
          variant={isDownVote ? "downLike" : ""}
        >
          <AiFillDislike />
        </Button>
        <p>{downVotesBy}</p>
      </div>
      <div className="card-vote">
        <span>
          <BiShare />
        </span>
        <p>{totalComments}</p>
      </div>
      <p>{postedAt(createdAt)}</p>
      <div className="card-user">
        <p>{`Dibuat Oleh ${ownerId}`}</p>
        {imageUser && <img src={imageUser} alt="user" className="img-avatar" />}
      </div>
    </footer>
  );
};

CardVote.propTypes = {
  likeVote: PropTypes.func.isRequired,
  unLikeVote: PropTypes.func.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
  ownerId: PropTypes.string.isRequired,
  imageUser: PropTypes.string,
  totalComments: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isUpVote: PropTypes.bool.isRequired,
  isDownVote: PropTypes.bool.isRequired,
};

export default CardVote;
