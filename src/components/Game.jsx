import React from "react";
import { string } from "prop-types";
import { Accordion, Panel } from "react-bootstrap";

const propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  bonus: string.isRequired,
  id: string.isRequired
};

const Game = ({ name, description, bonus }) => {
  return name ? (
    <div>
      <Accordion>
        <Panel header={name} bsStyle="success">
          <p>{description}</p>
          <p>Extra Fun: {bonus}</p>
        </Panel>
      </Accordion>
    </div>
  ) : null;
};

Game.propTypes = propTypes;

export default Game;
