import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Card = ({ children }) => {
  return <div className="card-item">{children}</div>;
};

const Header = ({ title, category, threadId }) => {
  return (
    <header className="card-header">
      <span className="category-card" data-testid="card-category">#{category}</span>
      <h3>
        <Link to={`/threads/${threadId}`} className="title-card-header" data-testid="card-title"> 
          {title}
        </Link>
      </h3>
    </header>
  );
};

const Body = ({ body }) => {
  return (
    <div
    data-testid="card-body"
      className="card-body"
      dangerouslySetInnerHTML={{ __html: body.substring(0, 268) + "..." }}
    />
  );
};

Card.propTypes = {
  children: PropTypes.node,
};
Header.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  threadId: PropTypes.string,
};
Body.propTypes = {
  body: PropTypes.string,
};


Card.Header = Header;
Card.Body = Body;

export default Card;
