import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <link to="/">Home</link>
      <link to="/about">About</link>
      <link to="/Contact">Contact</link>
    </ul>
  );
};

export default Navigation;
