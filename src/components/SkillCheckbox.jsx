import React from 'react';
import PropTypes from 'prop-types';

function SkillCheckbox(props) {

  return(
    <div>
      <p>{props.skill}</p>
    </div>
  )
}

SkillCheckbox.propTypes = {
  skill: PropTypes.string,
}

export default SkillCheckbox;
