import React, { useEffect } from "react";
import Card from "../components/Fragments/CardThreads";
import { useState } from "react";
import Button from "../components/Elements/Button";
import CardComments from "../components/Fragments/CardComments";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncReceiveThreadDetail } from "../states/threadDetail/action";
import { asyncAddComment } from "../states/threadDetail/action";
import { postedAt } from "../utils";
import CardVote from "../components/Fragments/CardVote";
import { asyncDownVoteThreadById, asyncUpVoteThreadById, asyncneutralizeThreadVoteById } from "../states/threadDetail/action";
const DetailPage = () => {
  const { threadId } = useParams();
  const dispatch = useDispatch();
  const { threadDetail = null, authUser } = useSelector((state) => state);
  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [threadId, dispatch]);

  const [inputComments, setInputComments] = useState("");
  const onInputComments = (event) => {
    setInputComments(event.target.innerText);
  };
  const addComment = () => {
    dispatch(asyncAddComment({ threadId, content: inputComments }));
  };
 
  const onLikeVote = (threadId) => {
    const isUpVoted = threadDetail.upVotesBy.includes(authUser.id);
    if (isUpVoted) {
      dispatch(asyncneutralizeThreadVoteById(threadId)); // Hapus upvote jika sudah ada
    } else {
      dispatch(asyncUpVoteThreadById(threadId)); // Tambah upvote jika belum ada
    }
  };
  
  const onUnLikeVote = (threadId) => {
    const isDownVoted = threadDetail.downVotesBy.includes(authUser.id);
    if (isDownVoted) {
      dispatch(asyncneutralizeThreadVoteById(threadId)); // Hapus downvote jika sudah ada
    } else {
      dispatch(asyncDownVoteThreadById(threadId)); // Tambah downvote jika belum ada
    }
  };
  
  if (!threadDetail) {
    return null;
  }
  return (
    <section className="detail-page">
      <main>
        {threadDetail &&  (
          
          <> 
            <Card.Header
              category={threadDetail.category}
              title={threadDetail.title}
              key={threadDetail.id}
            />
            <Card.Body body={threadDetail.body} />
            <div className="card-footer-detail">
            <CardVote
                totalComments={threadDetail.comments.length}
                downVotesBy={threadDetail.downVotesBy.length}
                upVotesBy={threadDetail.upVotesBy.length}
                likeVote={() => onLikeVote(threadDetail.id)}
                unLikeVote={() => onUnLikeVote(threadDetail.id)}
                ownerId={threadDetail.owner.name}
                id={threadDetail.id}
                imageUser={threadDetail.owner.avatar}
                isUpVote={threadDetail.upVotesBy.includes(authUser.id)}
                isDownVote={threadDetail.downVotesBy.includes(authUser.id)} 
                
              />
              {postedAt(threadDetail.createdAt)}
            </div>
          </>
        )}

        <div className="add-comment">
          <p>Beri Komentar</p>
          <div
            className="input-comment"
            data-placeholder="Masukan Isi Catatan ...."
            contentEditable
            onInput={onInputComments}
          />
          <Button onClick={addComment} variant="btn-comment">
            Kirim
          </Button>
        </div>

        <div className="card-comments">
          <p>Komentar ({threadDetail.comments.length})</p>
          {threadDetail &&
            [...threadDetail.comments]
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((comment) => {
                return (
                  <CardComments
                    {...comment}
                    key={comment.id}
                    isUpVotedComment={comment.upVotesBy.includes(authUser.id)}
                    isDownVoteComment={comment.downVotesBy.includes(
                      authUser.id
                    )}
                  />
                );
              })}
        </div>
      </main>
    </section>
  );
};
export default DetailPage;
