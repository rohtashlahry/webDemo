import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCategories } from '../../service/apiService';
import './menu.css';
import Loader from "../../components/Loader";

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

const Menu = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categories = await fetchCategories();
        setCategories(categories);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  const handleCategoryClick = (category: string) => {
    navigate(`/category/${category}`);
  };

  if (loading) {
    return(<><Loader /></>);
  }

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <div className="category-grid">
        {categories.map((category: any) => (
          <div
            key={category.idCategory}
            className="category-card"
            onClick={() => handleCategoryClick(category.strCategory)}
          >
            <img src={category.strCategoryThumb} alt={category.strCategory} className="category-image" />
            <h2>{category.strCategory}</h2>
            <p>{category.strCategoryDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
