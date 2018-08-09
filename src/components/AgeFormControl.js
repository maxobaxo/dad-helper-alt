import React from "react";
import { func, array } from "prop-types";
import AgeForm from "./AgeForm";
import DisplaySkills from "./DisplaySkills";
import DisplayGames from "./DisplayGames";

const propTypes = {
  handleFormSubmit: func.isRequired,
  handleCheckboxChange: func.isRequired,
  babySkills: array.isRequired,
  gamesToPlay: array.isRequired
};

const AgeFormControl = ({
  ageFormIsHidden,
  hideAgeForm,
  skillsFormIsHidden,
  handleFormSubmit,
  handleCheckboxChange,
  babySkills,
  gamesAreHidden,
  gamesToPlay
}) => (
  <div>
    <div hidden={ageFormIsHidden}>
      <AgeForm hideAgeForm={hideAgeForm} />
    </div>
    <div hidden={skillsFormIsHidden}>
      <DisplaySkills
        handleFormSubmit={handleFormSubmit}
        handleCheckboxChange={handleCheckboxChange}
        babySkills={babySkills}
      />
    </div>
    <div hidden={gamesAreHidden}>
      <DisplayGames gamesToPlay={gamesToPlay} />
    </div>
  </div>
);
AgeFormControl.propTypes = propTypes;

export default AgeFormControl;
