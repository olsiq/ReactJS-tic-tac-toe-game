import React from "react";
import { Context } from "context/Context";
import { Game } from "../components";

const App = () => {
  return (
    <Context>
      <Game />
    </Context>
  );
};
export { App };
