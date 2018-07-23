import React from "react";
import { array } from "prop-types";
import Game from "./Game";

const propTypes = {
  gamesToPlay: array.isRequired
};

const DisplayGames = ({ gamesToPlay }) => (
  <div>
    {gamesToPlay.length > 0 ? (
      gamesToPlay.map(game => (
        <Game
          name={game.name}
          description={game.description}
          bonus={game.bonus}
          id={game._id}
          key={game._id}
        />
      ))
    ) : (
      <Game
        id="no_games_for_the_chosen_skills"
        name="Our Apologies"
        description="Unfortunately, we do not currently have any games for the skills you selected."
        bonus="We hope to have new games added for you soon."
      />
    )}
  </div>
);
DisplayGames.propTypes = propTypes;

export default DisplayGames;
