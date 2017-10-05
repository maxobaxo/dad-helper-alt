import React from 'react';
import PropTypes from 'prop-types';
import SkillCheckbox from './SkillCheckbox';

function DisplaySkills(props) {

  function finishThis() {
    props.handleFormSubmit;
    props.showGames;
  }

  return(
    <div className="well">
      <form onSubmit={props.handleFormSubmit}>
        <h4>Potential Skills: </h4>

        {props.babySkills.map((skill, index) =>
          <SkillCheckbox
            skill={skill}
            skillName={skill.name}
            skillId={skill._id}
            handleCheckboxChange={props.handleCheckboxChange}
            key={index}
          />
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

DisplaySkills.propTypes = {
  babySkills: PropTypes.array,
  handleFormSubmit: PropTypes.func,
  handleCheckboxChange: PropTypes.func,
  showGames: PropTypes.func
}

export default DisplaySkills;
