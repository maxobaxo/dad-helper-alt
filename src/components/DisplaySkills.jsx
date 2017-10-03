import React from 'react';
import PropTypes from 'prop-types';

function DisplaySkills(props) {
  console.log(props.babySkills);
  return(
    <div>
      <h3>Which of the following behaviors is your child currently exhibiting?</h3>
      <ul>
      </ul>
    </div>
  )
}

DisplaySkills.propTypes = {
  babySkills: PropTypes.array
}

export default DisplaySkills;
