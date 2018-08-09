import React, { Component } from "react";
import { array } from "prop-types";
import { Tab, Tabs } from "react-toolbox/lib/tabs";
import { Card, CardTitle } from "react-toolbox/lib/card";
import Game from "./Game";
import styles from "./../styles/DisplayGames.css";

const propTypes = {
  gamesToPlay: array.isRequired
};

class DisplayGames extends Component {
  state = {
    index: 0
  };

  handleTabChange = index => {
    this.setState({ index });
  };

  render() {
    const { gamesToPlay } = this.props;
    return (
      <Card>
        <CardTitle title="Games to Play!" />
        <div className={styles.cardContent}>
          <Tabs index={this.state.index} onChange={this.handleTabChange} fixed>
            {gamesToPlay.length > 0 ? (
              gamesToPlay.map(game => (
                <Tab label={game.name} key={game._id}>
                  <Game
                    name={game.name}
                    description={game.description}
                    bonus={game.bonus}
                    id={game._id}
                  />
                </Tab>
              ))
            ) : (
              <Tabs index={0}>
                <Tab label="Our Apologies">
                  <Game
                    id="no_games_for_the_chosen_skills"
                    name="Our Apologies"
                    description="Unfortunately, we do not currently have any games for the skills you selected."
                    bonus="We hope to have new games added for you soon."
                  />
                </Tab>
              </Tabs>
            )}
          </Tabs>
        </div>
      </Card>
    );
  }
}
DisplayGames.propTypes = propTypes;

export default DisplayGames;
