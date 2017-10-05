import React from 'react';
import DisplayGames from './DisplayGames';
import PropTypes from 'prop-types';

class GamesControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {gamesAreHidden: false};
    this.hideGames = this.hideGames.bind(this);
  }

  hideGames() {
    this.setState({gamesAreHidden: true})
  }

  render() {

    return(
      <div hidden={this.state.gamesAreHidden}>
        <DisplayGames
          gamesToPlay={this.props.gamesToPlay}/>
      </div>
    )
  }
}

GamesControl.propTypes = {
  gamesToPlay: PropTypes.array
}

export default GamesControl;
