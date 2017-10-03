export default (state = {}, action) => {
  let newState;
  switch(action.type) {
    case 'REQUEST_BABY_SKILLS':
      newState = {
        isFetching: true,
        id: action.localBabyId,
        age_range: action.age_range
      }
      return newState;
    case 'RECEIVE_BABY_SKILLS':
      const { range, skillIds } = action.correctAgeObject;
      newState = Object.assign({}, state, {
        isFetching: false,
        age_range: range,
        skill_ids: skillIds
      });
      return newState;
    default:
      return state;
  }
}
