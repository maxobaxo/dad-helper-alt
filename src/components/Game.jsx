import React from 'react';
import PropTypes from 'prop-types';

function Game(props) {
  let gameTile;

  if (props.name) {
    return(
      <div className="well">
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <p>Extra Fun: {props.bonus}</p>
      </div>
    )
  }

}

Game.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  bonus: PropTypes.string
}

export default Game;
