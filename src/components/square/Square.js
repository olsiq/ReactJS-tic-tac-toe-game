import React from "react";

import "./square.css";

const Square = ({ value, onClick }) => (
  <button onClick={onClick}>{value}</button>
);

export { Square };
