import React, { useEffect, useState } from "react";
import Card from "../components/Fragments/CardThreads";
import Button from "../components/Elements/Button";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { asyncPopulateUsersandThread } from "../states/shared/action";
import {
  asyncDownVoteThread,
  asyncUpVoteThread,
} from "../states/threads/action";
import { asyncneutralizeThreadVote } from "../states/threads/action";
import CardVote from "../components/Fragments/CardVote";
const HomePage = () => {
  const navigate = useNavigate();
  const { threads = [], authUser, users = [] } = useSelector((state) => state);
  const [activeCategory, setActiveCategory] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncPopulateUsersandThread());
  }, [dispatch]);

  const toAddThread = () => {
    navigate("/new");
  };

  const filterCategory = (event) => {
    const value = event.target.textContent.replace("#", "");
    setActiveCategory((prevCategory) =>
      prevCategory === value ? null : value
    );
  };

  const onLikeVote = (threadId, isUpVote) => {
    if (isUpVote) {
      dispatch(asyncneutralizeThreadVote(threadId));
    } else {
      dispatch(asyncUpVoteThread(threadId));
    }
  };
  const onUnLikeVote = (threadId, isDownVote) => {
    if (isDownVote) {
      dispatch(asyncneutralizeThreadVote(threadId));
    } else {
      dispatch(asyncDownVoteThread(threadId));
    }
  };

  const threadList = threads.map((thread) => {
    const user = users.find((user) => user.id === thread.ownerId);
    const isUpVote = thread.upVotesBy.includes(authUser.id);
    const isDownVote = thread.downVotesBy.includes(authUser.id);
    return { ...thread, user, authUser: authUser.id, isUpVote, isDownVote };
  });
  const allCategories = threadList.map((thread) => thread.category);

  const uniqueCategories = [...new Set(allCategories)];
  const threadToShow = activeCategory
    ? threadList.filter((thread) => thread.category === activeCategory)
    : threadList;

  return (
    <section className="home-page">
      <header className="header-homepage">
        <p>Kategori popular</p>
        <div className="category-list">
          {uniqueCategories.map((category, index) => (
            <Button
              key={index}
              onClick={filterCategory}
              variant={category === activeCategory ? "active" : "noActive"}
            >
              #{category}
            </Button>
          ))}
        </div>
      </header>
      <main>
        <p className="title-body">Diskusi tersedia</p>
        <div className="card-list">
          {threadToShow.map((thread) => (
            <Card key={thread.id}>
              <Card.Header
                category={thread.category}
                title={thread.title}
                threadId={thread.id}
              />
              <Card.Body body={thread.body} />
              <CardVote
                likeVote={() => onLikeVote(thread.id, thread.isUpVote)}
                unLikeVote={() => onUnLikeVote(thread.id, thread.isDownVote)}
                upVotesBy={thread.upVotesBy.length}
                downVotesBy={thread.downVotesBy.length}
                createdAt={thread.createdAt}
                ownerId={thread.user.name}
                totalComments={thread.totalComments}
                id={thread.id}
                isUpVote={thread.isUpVote}
                isDownVote={thread.isDownVote}
              />
            </Card>
          ))}
        </div>
      </main>
      <Button onClick={toAddThread} variant="btn-icon btn-to-add">
        <IoIosAddCircle />
      </Button>
    </section>
  );
};
export default HomePage;
