import React from 'react';
import AgeForm from './AgeForm';
import DisplaySkills from './DisplaySkills';
import DisplayGames from './DisplayGames';
import PropTypes from 'prop-types';

class AgeFormControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ageFormIsHidden: false,
      skillsFormIsHidden: true,
      // gamesAreHidden: true
    };
    this.hideAgeForm = this.hideAgeForm.bind(this);
  }

  hideAgeForm() {
    this.setState({
      ageFormIsHidden: true,
      skillsFormIsHidden: false
    });
  }

  render() {

    return(
      <div>
        <div hidden={this.state.ageFormIsHidden}>
          <AgeForm hideAgeForm={this.hideAgeForm}/>
        </div>
        <div hidden={this.state.skillsFormIsHidden}>
          <DisplaySkills
            handleFormSubmit={this.props.handleFormSubmit}
            handleCheckboxChange={this.props.handleCheckboxChange}
            babySkills={this.props.babySkills}/>
        </div>
        <div hidden={this.state.gamesAreHidden}>
          <DisplayGames
            gamesToPlay={this.props.gamesToPlay}/>
        </div>
      </div>
    )
  }
}

AgeFormControl.propTypes = {
  handleFormSubmit: PropTypes.func,
  handleCheckboxChange: PropTypes.func,
  babySkills: PropTypes.array,
  gamesToPlay: PropTypes.array
}

export default AgeFormControl;
