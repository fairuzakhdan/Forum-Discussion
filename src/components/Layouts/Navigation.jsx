import React from "react";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import Button from "../Elements/Button";
import PropTypes from "prop-types";
const Navigation = ({ authUser, signOut }) => {
  const navigate = useNavigate();
  const toThreadCheat = () => {
    navigate("/");
  };
  const toLeaderboard = () => {
    navigate("/leaderboards");
  };

  return (
    <>
      <div className="header-navigation">
        <p>Threadify</p>
        {authUser && (
          <div className="user-profile">
            <p>{authUser.name}</p>
            <Button onClick={signOut} variant="btn-icon btn-logout">
              <IoLogOut />
            </Button>
          </div>
        )}
      </div>
      <nav className="bottom-navigation">
        <ul className="navbar-nav">
          <li>
            <Button onClick={toThreadCheat} variant="btn-icon btn-thread">
              <MdOutlineMarkUnreadChatAlt />
            </Button>
            <p>Threads</p>
          </li>
          <li>
            <Button onClick={toLeaderboard} variant="btn-icon btn-leaderboard">
              <VscGraph />
            </Button>
            <p>Leaderboards</p>
          </li>
        </ul>
      </nav>
    </>
  );
};
Navigation.propTypes = {
  authUser: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired,
};
export default Navigation;
