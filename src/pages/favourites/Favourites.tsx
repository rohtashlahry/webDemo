import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import mealReducer from "../../store/reducers/meal";
import { getUser } from "../../utils/localStorageUtils";
import "./favourite.css";

const Favourites = () => {
  const user = getUser();
  const [favouriteList, setFavouriteList] = useState([]);
  const { userMeals, apiMealData } = useSelector((state: any) => state.meal);

  useEffect(() => {
    if (user) {
      const { username } = user;
      const favoriteMeals = JSON.parse(
        localStorage.getItem(`${username}_favorites`) || "[]"
      );
      const meals = apiMealData.filter((items: any) =>
        favoriteMeals.includes(items.idMeal)
      );
      setFavouriteList(meals);
    }
  }, []);

  return (
    <>
      <div className="favourite-header">
        <h2>Favourites Meal</h2>
      </div>
      <div className="favourite-list-container">
        {favouriteList.map((meal: any) => (
          <div key={meal.idMeal} className="meal-card">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="meal-image"
            />
            <div className="meal-name">{meal.strMeal}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favourites;
