import constants from "./../constants";
const { types } = constants;

export default (state = { gamesToPlay: [] }, action) => {
  let newState;
  switch (action.type) {
    case types.REQUEST_GAMES:
      newState = Object.assign({}, state, {
        isFetching: true,
        current_skills: action.selectedSkills
      });
      return newState;
    case types.RECEIVE_GAMES:
      newState = Object.assign({}, state, {
        isFetching: false,
        gamesToPlay: action.relevantGames
      });
      return newState;
    default:
      return state;
  }
};
