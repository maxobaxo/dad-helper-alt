import React from 'react';
import PropTypes from 'prop-types';
import SkillCheckbox from './SkillCheckbox';

function DisplaySkills(props) {


  return(
    <div>
      <form onSubmit={props.handleFormSubmit}>
        <h4>Potential Skills: </h4>

        {props.babySkills.map((skill, index) =>
          <SkillCheckbox
            skill={skill}
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
  handleCheckboxChange: PropTypes.func
}

export default DisplaySkills;
