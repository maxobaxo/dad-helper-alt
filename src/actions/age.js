import c from './../constants';
import fetch from 'isomorphic-fetch';
import { v4 } from 'uuid';

export const requestBabySkills = (age_range, localBabyId) => ({
  type: c.REQUEST_BABY_SKILLS,
  age_range,
  localBabyId
})

export const receiveBabySkills = (potentialSkills) => ({
  type: c.RECEIVE_BABY_SKILLS,
  potentialSkills
})

export function getBabySkills(age_range, dispatch) {
  const localBabyId = v4();
  return function(dispatch) {
    dispatch(requestBabySkills(age_range, localBabyId));
    return fetch('http://localhost:3000/ages').then(
      response => response.json(),
      error => console.log('An error occured.', error)
    ).then(function(json) {
      let skill_ids;
      let skills = [];
      json.forEach((ageRange) => {
        if (ageRange.range === age_range) {
          skill_ids = ageRange.skillIds;
        }
      });

      fetch('http://localhost:3000/skills').then(
        response => response.json(),
        error => console.log('An error occured.', error)
      ).then(function(json) {
        json.forEach((skill) => {
          skill_ids.forEach((skill_id) => {
            if (skill._id === skill_id) {
              skills.push(skill.name);
            }
          })
        })
      })
      console.log(skills);
      dispatch(receiveBabySkills(skills));
    })
  }
}
