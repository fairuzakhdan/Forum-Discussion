import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { asyncPopulateLeaderboardandUser } from "../states/shared/action";
const LeaderBoardPage = () => {
  const dispatch = useDispatch()
  const {leaderboards} = useSelector((state) => state);
  useEffect(() => {
    dispatch(asyncPopulateLeaderboardandUser())
  },[dispatch])

  if (!leaderboards) {
    return null;
  }
  return (
    <section className="leaderboard-page">
      <header>
        <p className="header-leaderboard">Klasmen Pengguna Aktif</p>
      </header>
      <main>
        <div className="title-leaderboard">
          <p>Pengguna</p>
          <p>Skor</p>
        </div>
        <div className="leaderboard-list">
          {leaderboards.map((leaderboard, index) => (
            <div key={index} className="leaderboard-item">
              <div className="user-leaderboard-container">
                <img
                  src={leaderboard.user.avatar}
                  alt="user"
                  className="user-leaderboard"
                />
                <p>{leaderboard.user.name}</p>
              </div>
              <p className="leaderboard-score">{leaderboard.score}</p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default LeaderBoardPage;
