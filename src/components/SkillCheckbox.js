import React, { Component } from "react";
import { object, string, func } from "prop-types";
import { Checkbox } from "react-toolbox/lib/checkbox";
import styles from "./../styles/SkillCheckbox.css";

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
      <div className={styles.page}>
        <Checkbox
          value={skillId}
          checked={isChecked}
          label={skillName}
          onChange={this.toggleCheckboxChange}
        />
      </div>
    );
  }
}

export default SkillCheckbox;
