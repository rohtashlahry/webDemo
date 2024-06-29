import React from 'react';
import './home.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router';

const HomePage = () => {
  const navigate = useNavigate()
  const handleClickRoutes = (url: string) => {
    navigate(url)
  }
  return (
    <div className="homepage-container">
      <div className="left-section">
        <button className="homepage-button" onClick={() => handleClickRoutes("/menu")}>Menu</button>
        <button className="homepage-button" onClick={() => handleClickRoutes("favourites")}>Favourites</button>
        <button className="homepage-button" onClick={() => handleClickRoutes("random")}>Random Meal</button>
      </div>
      <div className="right-section">
        <img src="home.jpeg" alt="Showcase" className="showcase-image" />
      </div>
    </div>
  );
};

export default HomePage;
