import React from "react";
import { string } from "prop-types";

const propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  bonus: string.isRequired,
  id: string.isRequired
};

const Game = ({ name, description, bonus }) => {
  return name ? (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Extra Fun: {bonus}</p>
    </div>
  ) : null;
};
Game.propTypes = propTypes;

export default Game;
