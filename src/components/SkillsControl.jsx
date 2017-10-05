import React from 'react';
import DisplaySkills from './DisplaySkills';
import PropTypes from 'prop-types';

class SkillsControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {skillsFormIsHidden: true};
    this.showSkillsForm = this.showSkillsForm.bind(this);
  }

  showSkillsForm() {
    if (this.props.babySkills.length > 0) {
      this.setState({skillsFormIsHidden: false});
      return true;
    } else {
      return false;
    }
  }

  componentWillMount() {
    return this.showSkillsForm;
  }


  render() {
    console.log('SkillsControlRendered')
    return(
      <div>
        <DisplaySkills
          handleFormSubmit={this.props.handleFormSubmit}
          handleCheckboxChange={this.props.handleCheckboxChange}
          babySkills={this.props.babySkills}/>
      </div>
    )
  }
}

SkillsControl.propTypes = {
  handleFormSubmit: PropTypes.func,
  handleCheckboxChange: PropTypes.func,
  babySkills: PropTypes.array
}

export default SkillsControl;
