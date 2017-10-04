import React from 'react';
import PropTypes from 'prop-types';

function DisplaySkills(props) {

  const skills = props.babySkills;
  const skillItems = skills.map((skill, index) =>
    <li key={index}>
      {skill}
    </li>
  );

  return(
    <div>
      <h4>Potential Skills: </h4>
      <ul>{skillItems}</ul>
    </div>
  )
}

DisplaySkills.propTypes = {
  babySkills: PropTypes.array
}

export default DisplaySkills;
