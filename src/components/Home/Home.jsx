import React from "react";
import { Link } from "react-router-dom";
import "../Home/Home.scss";
const Home = () => {
  return (
    <div className="home">
      <h1>Welcome</h1>

      <Link to={"/login"}>Start</Link>
    </div>
  );
};

export default Home;
