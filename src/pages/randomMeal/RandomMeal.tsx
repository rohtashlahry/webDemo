import React, { useEffect, useState } from 'react'
import { fetchRandomMeal } from '../../service/apiService';
import "./randomMeal.css";
import Loader from '../../components/Loader';

interface Meal {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strYoutube: string;
  }

const RandomMeal = () => {
    const RANDOM_URL = "random.php"
    const [randomMeal, setRandomMeal] = useState<any>()
    const [loading, setLoading] = useState(true);

    const getMeals = async () => {
        try {
          const meals = await fetchRandomMeal(RANDOM_URL);
          setRandomMeal(meals);
          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
      };

    useEffect(() => {   
        getMeals();
      }, []);

      if (loading) {
        return <div><Loader /></div>;
      }
      return (
        <div className="random-meal-container">
          {randomMeal.map((meal: Meal) => (<>
                <h2>{meal.strMeal}</h2>
              <div key={meal.idMeal} className="randomMeal-card">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="randomMeal-image" />
              <div className="randomMeal-details">
                <p><strong>Category:</strong> {meal.strCategory}</p>
                <p><strong>Area:</strong> {meal.strArea}</p>
                <p><strong>Instructions:</strong> {meal.strInstructions}</p>
                {meal.strYoutube && (
                  <p>
                    <strong>Video:</strong> <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
                  </p>
                )}
              </div>
            </div></>
          ))}
          <button className="homepage-button" onClick={getMeals}>Refresh Meal</button>
        </div>
      );
    };

export default RandomMeal