import c from './../constants';
import fetch from 'isomorphic-fetch';
import { v4 } from 'uuid';

export const requestBabySkills = (age_range, localBabyId) => ({
  type: c.REQUEST_BABY_SKILLS,
  age_range,
  localBabyId
})

export const receiveAgeSubmit = () => {

}

export function getBabySkills(age_range, dispatch) {
  const localBabyId = v4();
  return function(dispatch) {
    dispatch(requestBabySkills(age_range, localBabyId));
    return fetch('http://localhost:3000/ages').then(
      response => response.json(),
      error => console.log('An error occured.', error)
    ).then(function(json) {
      console.log(json);
      dispatch(receiveBabySkills());
    })
  }
}
