import { combineReducers } from 'redux';
import getBabySkillsReducer from './get-baby-skills-reducer';


const rootReducer = combineReducers({
  'skills': getBabySkillsReducer
});

export default rootReducer;
