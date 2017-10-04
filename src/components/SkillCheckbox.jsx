import React from 'react';
import PropTypes from 'prop-types';

class SkillCheckbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    }
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
  }

  toggleCheckboxChange() {
    let newState = !this.state.isChecked;
    this.setState({ isChecked: newState });
    this.props.handleCheckboxChange(this.props.skill);
  }

  render() {
    const { skill } = this.props;
    const { isChecked } = this.state;

    return(
      <div>
        <label>
          <input
            type="checkbox"
            value={skill}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}/>

          { skill }
        </label>
      </div>
    )
  }
}

SkillCheckbox.propTypes = {
  skill: PropTypes.string,
  handleCheckboxChange: PropTypes.func
}

export default SkillCheckbox;
