import { combineReducers } from 'redux';
import getBabySkillsReducer from './get-baby-skills-reducer';


const rootReducer = combineReducers({
  'babyInfo': getBabySkillsReducer
});

export default rootReducer;
