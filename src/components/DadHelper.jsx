import React from 'react';
import AgeFormControl from './AgeFormControl';
import DisplaySkills from './DisplaySkills';
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

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, ' is selected.');
    }
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
        <AgeFormControl />
        <DisplaySkills
          handleFormSubmit={this.handleSkillsFormSubmit}
          handleCheckboxChange={this.toggleCheckbox}
          babySkills={this.props.masterState.babyInfo.potential_skills}/>
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
