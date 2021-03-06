import * as types from "./../constants/ActionTypes";
import fetch from "isomorphic-fetch";
import { v4 } from "uuid";

export const requestBabySkills = (age_range, localBabyId) => ({
  type: types.REQUEST_BABY_SKILLS,
  age_range,
  localBabyId
});

export const receiveBabySkills = potentialSkills => ({
  type: types.RECEIVE_BABY_SKILLS,
  potentialSkills
});

export const getBabySkills = (age_range, dispatch) => {
  const localBabyId = v4();
  return dispatch => {
    dispatch(requestBabySkills(age_range, localBabyId));
    return fetch("https://floating-basin-62498.herokuapp.com/ages")
      .then(
        response => response.json(),
        error => console.log("An error occured.", error)
      )
      .then(json => {
        let skill_ids;
        let skills = [];
        json.forEach(ageRange => {
          if (ageRange.range === age_range) {
            skill_ids = ageRange.skillIds;
          }
        });

        fetch("https://floating-basin-62498.herokuapp.com/skills")
          .then(
            response => response.json(),
            error => console.log("An error occured.", error)
          )
          .then(json => {
            json.forEach(skill => {
              skill_ids.forEach(skill_id => {
                if (skill._id === skill_id) {
                  skills.push(skill);
                }
              });
            });
            dispatch(receiveBabySkills(skills));
          });
      });
  };
};
