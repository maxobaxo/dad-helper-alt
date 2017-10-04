import constants from './../constants';
const { defaultState, types } = constants;

export default (state = defaultState, action) => {
  let newState;
  switch(action.type) {
    case types.REQUEST_BABY_SKILLS:
      newState = Object.assign({}, state, {
        isFetching: true,
        id: action.localBabyId,
        age_range: action.age_range
      });
      return newState;
    case types.RECEIVE_BABY_SKILLS:
      newState = Object.assign({}, state, {
        isFetching: false,
        potential_skills: action.potentialSkills
      });
      return newState;
    default:
      return state;
  }
}
