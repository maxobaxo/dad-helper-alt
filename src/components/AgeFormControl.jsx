import React from "react";
import AgeForm from "./AgeForm";
import DisplaySkills from "./DisplaySkills";
import DisplayGames from "./DisplayGames";
import PropTypes from "prop-types";

class AgeFormControl extends React.Component {
  render() {
    return (
      <div>
        <div hidden={this.props.ageFormIsHidden}>
          <AgeForm hideAgeForm={this.props.hideAgeForm} />
        </div>
        <div hidden={this.props.skillsFormIsHidden}>
          <DisplaySkills
            handleFormSubmit={this.props.handleFormSubmit}
            handleCheckboxChange={this.props.handleCheckboxChange}
            babySkills={this.props.babySkills}
          />
        </div>
        <div hidden={this.props.gamesAreHidden}>
          <DisplayGames gamesToPlay={this.props.gamesToPlay} />
        </div>
      </div>
    );
  }
}

AgeFormControl.propTypes = {
  handleFormSubmit: PropTypes.func,
  handleCheckboxChange: PropTypes.func,
  babySkills: PropTypes.array,
  gamesToPlay: PropTypes.array
};

export default AgeFormControl;
