import React from 'react';
import AgeFormControl from './AgeFormControl';
import SkillsControl from './SkillsControl';
import GamesControl from './GamesControl';
import { getGames } from './../actions/games';
import { connect } from 'react-redux';

class DadHelper extends React.Component {

  constructor(props) {
    super(props);
    this.handleSkillsFormSubmit = this.handleSkillsFormSubmit.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  componentWillMount() {
    this.selectedCheckboxes = new Set();
  }

  handleSkillsFormSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    const selectedSkills = [];
    for (const checkbox of this.selectedCheckboxes) {
      selectedSkills.push(checkbox);
    }

    dispatch(getGames(selectedSkills));
  }

  toggleCheckbox(label) {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  render() {
    return(
      <div>
        <AgeFormControl
          handleFormSubmit={this.handleSkillsFormSubmit}
          handleCheckboxChange={this.toggleCheckbox}
          babySkills={this.props.masterState.babyInfo.potential_skills} gamesToPlay={this.props.masterState.babyResults.gamesToPlay}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    masterState: state
  }
}

export default connect(mapStateToProps)(DadHelper);
