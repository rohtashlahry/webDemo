const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}/categories.php`);
  const data = await response.json();
  return data.categories;
};

export const fetchMealsByCategory = async (category: string) => {
  const response = await fetch(`${BASE_URL}/filter.php?c=${category}`);
  const data = await response.json();
  return data.meals;
};

export const fetchRandomMeal = async (url: string) => {
  const response = await fetch(`${BASE_URL}/${url}`);
  const data = await response.json();
  return data.meals;
};
