import React from "react";
import { func, array } from "prop-types";
import { Card, CardTitle } from "react-toolbox/lib/card";
import { Button } from "react-toolbox/lib/button";
import SkillCheckbox from "./SkillCheckbox";
import styles from "./../styles/DisplaySkills.css";

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
  return (
    <div className={styles.page}>
      <Card>
        <CardTitle title="Which of these skills has your baby mastered?" />
        <form onSubmit={handleFormSubmit}>
          {babySkills.map((skill, index) => (
            <SkillCheckbox
              skill={skill}
              skillName={skill.name}
              skillId={skill._id}
              handleCheckboxChange={handleCheckboxChange}
              key={index}
            />
          ))}
          <Button className={styles.page} type="submit" raised>
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};
DisplaySkills.propTypes = propTypes;

export default DisplaySkills;
