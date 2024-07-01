import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Container } from "@mui/material";
import AppHeader from "../components/AppHeader";
import SignIn from "../pages/authentications/singIn/SignIn";
import Home from "../pages/home/Home";
import SignUp from "../pages/authentications/signUp/SignUp";
import AboutMe from "../pages/aboutMe/AboutMe";
import Menu from "../pages/menu/Menu";
import CategoryMeals from "../pages/categoryMeal/CategoryMeal";
import RandomMeal from "../pages/randomMeal/RandomMeal";
import UserDashboard from "../pages/userDashboard/userDashboard";
import Favourites from "../pages/favourites/Favourites";
import { getUser } from "../utils/localStorageUtils";
import ProtectedRoute from "./ProtectedRoute";

const RoutesConfig = () => {
  return (
    <Router>
      <AppHeader />
      <Container className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/random" element={<RandomMeal />} />
          <Route path="/category/:category" element={<CategoryMeals />} />
          <Route element={<ProtectedRoute redirectTo="/sign-in" />}>
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/sign-up" element={<UserDashboard />} />
            <Route path="/sign-in" element={<UserDashboard />} />
          </Route>
        </Routes>
      </Container>
    </Router>
  );
};

export default RoutesConfig;
