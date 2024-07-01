import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AppHeader.css";
import MenuIcon from "@mui/icons-material/Menu";
import Constants from "./constants";

const AppHeader = () => {
  const navigate = useNavigate();
  const [showFlyout, setShowFlyout] = useState<boolean>(false);
  const menuItems = [
    { title: "Home", link: "/" },
    { title: "About Me", link: "/aboutme" },
    { title: "Menu", link: "/menu" },
    { title: "My Favourites", link: "/favourites" },
    { title: "Random Meals", link: "/random" },
  ];

  const handleMenuRoutes = (url: string) => {
    navigate(url);
    setShowFlyout(false);
  };
  return (
    <header>
      <nav>
        <div className="main-header-top">
          <div className="main-header">
            <p className="dropdown">
              Account
              <div className="dropdown-menu">
                <Link to="/sign-in">Sign In</Link>
                <Link to="/sign-up">Sign Up</Link>
              </div>
            </p>
          </div>
          <div className="linkedin-text">
            This Web App is Developed by{" "}
            <span></span><a href={Constants.linkedIn}>Rohtash Lahry</a><span></span>
          </div>
        </div>
      </nav>
      <div
        className="header-flyout"
        style={{ width: showFlyout ? "300px" : "50px" }}
      >
        <div className="header-flyoutBars">
          <span
            className="header-flyoutBars-icon"
            onClick={() => setShowFlyout(!showFlyout)}
          >
            <MenuIcon />
          </span>
        </div>
        {showFlyout && (
          <div>
            <nav>
              <div>
                {menuItems?.map((item: any) => {
                  return (
                    <p
                      className="menu-items"
                      onClick={() => handleMenuRoutes(item.link)}
                    >
                      {item.title}
                    </p>
                  );
                })}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
