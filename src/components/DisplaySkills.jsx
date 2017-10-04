import React from 'react';
import PropTypes from 'prop-types';

function DisplaySkills(props) {
  console.log(props);
  return(
    <div>
      {props.babySkills.map((skill) => <li>{skill}</li>)}
    </div>
  )
}

DisplaySkills.propTypes = {
  babySkills: PropTypes.array
}

export default DisplaySkills;
