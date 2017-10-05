import { combineReducers } from 'redux';
import getBabySkillsReducer from './get-baby-skills-reducer';
import getGamesReducer from './get-games-reducer';

const rootReducer = combineReducers({
  'babyInfo': getBabySkillsReducer,
  'babyResults': getGamesReducer
});

export default rootReducer;
