import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { Container } from "@mui/material"; 
import AppHeader from "../components/AppHeader";
import SignIn from "../pages/authentications/singIn/SignIn";
import Home from "../pages/home/Home";
import SignUp from "../pages/authentications/singUp/SignUp";
import AboutMe from "../pages/aboutMe/AboutMe";
import Menu from "../pages/menu/Menu";
import CategoryMeals from "../pages/categoryMeal/CategoryMeal";
import RandomMeal from "../pages/randomMeal/RandomMeal";
import { getUser } from "../utils/localStorageUtils";
import UserDashboard from "../pages/userDashboard/userDashboard";
// import { Redirect } from 'react-router-dom';
import Favourites from "../pages/favourites/Favourites";


const routes = () => {
    const user = getUser();
  return (
    <div>
      <Router>
        <AppHeader />
        <Container className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/random" element={<RandomMeal />} />
            <Route path="/category/:category" element={<CategoryMeals />} />
            <Route
              path="/sign-in"
              element={user ? <Navigate to="/dashboard" /> : <SignIn />}
            />
            <Route
              path="/sign-up"
              element={user ? <Navigate to="/dashboard" /> : <SignUp />}
            />
            <Route
              path="/dashboard"
              element={user ? <UserDashboard /> : <SignIn />}
            />
            <Route
              path="/favourites"
              element={user ? <Favourites /> : <SignIn />}
            />
          </Routes>
        </Container>
      </Router>
    </div>
  );
};

export default routes;
