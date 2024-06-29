import { combineReducers } from 'redux';
import mealReducer from './meal';

const rootReducer = combineReducers({
  meal: mealReducer
});

export default rootReducer;
