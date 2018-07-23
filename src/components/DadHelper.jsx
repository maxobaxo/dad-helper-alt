import React from "react";
import AgeFormControl from "./AgeFormControl";
import SkillsControl from "./SkillsControl";
import GamesControl from "./GamesControl";
import { getGames } from "./../actions/games";
import { connect } from "react-redux";

class DadHelper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ageFormIsHidden: false,
      skillsFormIsHidden: true,
      gamesAreHidden: true
    };
    this.handleSkillsFormSubmit = this.handleSkillsFormSubmit.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.hideAgeForm = this.hideAgeForm.bind(this);
  }

  componentWillMount() {
    this.selectedCheckboxes = new Set();
  }

  async handleSkillsFormSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const selectedSkills = [];
    for (const checkbox of this.selectedCheckboxes) {
      selectedSkills.push(checkbox);
    }

    await dispatch(getGames(selectedSkills));
    this.setState({
      gamesAreHidden: false
    });
  }

  toggleCheckbox(label) {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  hideAgeForm() {
    this.setState({
      ageFormIsHidden: true,
      skillsFormIsHidden: false
    });
  }

  render() {
    return (
      <div>
        <AgeFormControl
          handleFormSubmit={this.handleSkillsFormSubmit}
          handleCheckboxChange={this.toggleCheckbox}
          babySkills={this.props.masterState.babyInfo.potential_skills}
          gamesToPlay={this.props.masterState.babyResults.gamesToPlay}
          hideAgeForm={this.hideAgeForm}
          ageFormIsHidden={this.state.ageFormIsHidden}
          skillsFormIsHidden={this.state.skillsFormIsHidden}
          gamesAreHidden={this.state.gamesAreHidden}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterState: state
  };
};

export default connect(mapStateToProps)(DadHelper);
