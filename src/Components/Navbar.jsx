import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [searchItem, setsearchItem] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/Search/${searchItem}`);
  };
  return (
    <>
      <div className="nav">
        <Link to={`/`} className="link">
          <div className="left">
            <h2>Recipe App</h2>
          </div>
        </Link>
        <div className="search">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={searchItem}
              onChange={(e) => setsearchItem(e.target.value)}
            />
          </form>
        </div>
        <div className="right">
          <Link to={`/Category/indian`} className="link">
            <div>Indian</div>
          </Link>
          <Link to={`/Category/american`} className="link">
            <div>American</div>
          </Link>
          <Link to={`/Category/british`} className="link">
            <div>British</div>
          </Link>
          <Link to={`/Category/chinese`} className="link">
            <div>Chinese</div>
          </Link>
          <Link to={`/Category/thai`} className="link">
            <div>Thai</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
