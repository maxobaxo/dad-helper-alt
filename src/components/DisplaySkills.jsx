import React from "react";
import { func, array } from "prop-types";
import SkillCheckbox from "./SkillCheckbox";
import { Button, Panel, Accordion } from "react-bootstrap";

const propTypes = {
  handleCheckboxChange: func.isRequired,
  handleFormSubmit: func.isRequired,
  babySkills: array.isRequired
};

const DisplaySkills = ({
  handleCheckboxChange,
  handleFormSubmit,
  babySkills
}) => {
  const submitButton = (
    <Button bsStyle="success" bsSize="xs" type="submit">
      Submit
    </Button>
  );

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <Accordion>
          <Panel
            bsStyle="success"
            header="Which of these skills has your baby mastered?"
            footer={submitButton}
          >
            {babySkills.map((skill, index) => (
              <SkillCheckbox
                skill={skill}
                skillName={skill.name}
                skillId={skill._id}
                handleCheckboxChange={handleCheckboxChange}
                key={index}
              />
            ))}
          </Panel>
        </Accordion>
      </form>
    </div>
  );
};
DisplaySkills.propTypes = propTypes;

export default DisplaySkills;
