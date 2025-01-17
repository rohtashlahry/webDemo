import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMealsByCategory } from "../../service/apiService";
import "./categoryMeals.css";
import { getUser, storeUser } from "../../utils/localStorageUtils";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { setApiMeals, setUserMeals } from "../../store/actions/meal";
import Loader from "../../components/Loader";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const CategoryMeals = () => {
  const dispatch = useDispatch()
  const { category } = useParams<{ category: string }>();
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const user = getUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      const getMeals = async () => {
        try {
          const meals = await fetchMealsByCategory(category);
          setMeals(meals);
          dispatch(setApiMeals(meals))
          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
      };

      getMeals();
    }
  }, [category]);

  const checkFavourites = (mealID: string) => {
    const username = user?.username;
    const favoriteMeals = JSON.parse(
      localStorage.getItem(`${username}_favorites`) || "[]"
    );
    const isFavorite = favoriteMeals.includes(mealID);
    return isFavorite;
  };

  const handleFavoriteClick = (mealId: string) => {
    if (user) {
      const { username } = user;
      const favoriteMeals = JSON.parse(
        localStorage.getItem(`${username}_favorites`) || "[]"
      );

      const isFavorite = favoriteMeals.includes(mealId);
      const updatedFavorites = isFavorite
        ? favoriteMeals.filter((id: string) => id !== mealId)
        : [...favoriteMeals, mealId];

      localStorage.setItem(
        `${username}_favorites`,
        JSON.stringify(updatedFavorites)
      );
      storeUser(user);
      console.log("favo", isFavorite, updatedFavorites);
      const userMealData = {
        user: user,
        mealData: updatedFavorites
      }
      dispatch(setUserMeals(userMealData))
    } else {
      navigate("/sign-in");
    }
  };

  if (loading) {
    return <div><Loader /></div>;
  }

  return (
    <div className="meals-container">
      <h1>Meals in: {category}</h1>
      <div className="catMeals-grid">
        {meals?.map((meal: any) => (
          <div key={meal.idMeal} className="catMeals-card">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="catMeals-image"
            />
            <h2>{meal.strMeal}</h2>
            <button
              className="favorite-btn"
              onClick={() => handleFavoriteClick(meal.idMeal)}
            >
              {checkFavourites(meal.idMeal) ? (
                <FavoriteIcon />
              ) : (
                <FavoriteBorderIcon />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMeals;
