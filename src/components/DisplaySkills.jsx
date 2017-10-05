import React from 'react';
import PropTypes from 'prop-types';
import SkillCheckbox from './SkillCheckbox';
import { Button, Panel, Accordion } from 'react-bootstrap';

function DisplaySkills(props) {

  const submitButton = (
    <Button bsStyle="success" bsSize="xs" type="submit">Submit</Button>
  );

  return(
    <div>
      <form onSubmit={props.handleFormSubmit}>
        <Accordion>
          <Panel bsStyle="success" header="Which of these skills has your baby mastered?" footer={submitButton}>
            {props.babySkills.map((skill, index) =>
              <SkillCheckbox
                skill={skill}
                skillName={skill.name}
                skillId={skill._id}
                handleCheckboxChange={props.handleCheckboxChange}
                key={index}
              />
            )}
          </Panel>
        </Accordion>
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
