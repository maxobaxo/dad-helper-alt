import React, { Component } from "react";
import { object, string, func } from "prop-types";

class SkillCheckbox extends Component {
  static propTypes = {
    skill: object.isRequired,
    skillName: string.isRequired,
    skillId: string.isRequired,
    handleCheckboxChange: func.isRequired
  };

  state = {
    isChecked: false
  };

  toggleCheckboxChange = () => {
    let newState = !this.state.isChecked;
    this.setState({ isChecked: newState });
    this.props.handleCheckboxChange(this.props.skill);
  };

  render() {
    const { skillId, skillName } = this.props;
    const { isChecked } = this.state;

    return (
      <div>
        <label>
          <input
            type="checkbox"
            value={skillId}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          {skillName}
        </label>
      </div>
    );
  }
}

export default SkillCheckbox;
