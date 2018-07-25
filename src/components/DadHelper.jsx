import React, { Component } from "react";
import AgeFormControl from "./AgeFormControl";
import { connect } from "react-redux";
import { Card, CardTitle, CardText } from "react-toolbox/lib/card";
import { getGames } from "./../actions/games";

class DadHelper extends Component {
  state = {
    ageFormIsHidden: false,
    skillsFormIsHidden: true,
    gamesAreHidden: true
  };

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  };

  handleSkillsFormSubmit = async event => {
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
  };

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  };

  hideAgeForm = () => {
    this.setState({
      ageFormIsHidden: true,
      skillsFormIsHidden: false
    });
  };

  render() {
    return (
      <div style={{ margin: "25px 5%"}}>
        <Card>
          <CardTitle title="Are you a new parent?" />
          <CardText>
            Learn how to celebrate your child's achievements, and empower them
            to reach their developmental milestones.
          </CardText>
        </Card>
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
