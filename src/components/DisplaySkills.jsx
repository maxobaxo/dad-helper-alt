import React from 'react';
import PropTypes from 'prop-types';
import SkillCheckbox from './SkillCheckbox';

function DisplaySkills(props) {


  return(
    <div>
      <h4>Potential Skills: </h4>
      {props.babySkills.map((skill, index) =>
        <SkillCheckbox
          skill={skill}
          key={index}
        />
      )}
    </div>
  )
}

DisplaySkills.propTypes = {
  babySkills: PropTypes.array
}

export default DisplaySkills;
