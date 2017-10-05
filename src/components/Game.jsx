import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Panel } from 'react-bootstrap';

function Game(props) {
  let gameTile;

  if (props.name) {
    return(
      <div>
        <Accordion>
          <Panel header={props.name} bsStyle="success">
            <p>{props.description}</p>
            <p>Extra Fun: {props.bonus}</p>
          </Panel>
        </Accordion>
      </div>
    )
  }

}

Game.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  bonus: PropTypes.string,
  id: PropTypes.string
}

export default Game;
