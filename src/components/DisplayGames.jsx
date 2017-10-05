import React from 'react';
import PropTypes from 'prop-types';
import Game from './Game';

function DisplayGames(props) {

  return(
    <div>
      {props.gamesToPlay.map((game) =>
        <Game
          name={game.name}
          description={game.description}
          bonus={game.bonus}
          id={game._id}
          key={game._id}
          />
      )}
    </div>
  )
}

DisplayGames.propTypes = {
  gamesToPlay: PropTypes.array,
}

export default DisplayGames;
