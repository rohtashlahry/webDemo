import { USER_MEALS, API_MEALS } from '../types/meal';

const initialState = {
  userMeals: {},
  apiMealData: []
};

const mealReducer = (state = initialState, action: any) => {
  console.log("action", action)
  switch (action.type) {
    case USER_MEALS:
      return {
        ...state,
        userMeals: action.payload.mealData,
        user: action.payload.user,
      };

    case API_MEALS:
      return {
        ...state,
        apiMealData: action.payload
      };
    default:
      return state;
  }
};

export default mealReducer;
