import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AppHeader.css";
import MenuIcon from "@mui/icons-material/Menu";

const AppHeader = () => {
  const navigate = useNavigate();
  const [showFlyout, setShowFlyout] = useState(false);
  const menuItems = [
    { title: "Home", link: "/" },
    { title: "About Me", link: "/aboutme" },
    { title: "Menu", link: "/menu" },
    { title: "My Favourites", link: "/favourites" },
    { title: "Random Meals", link: "/random" },
  ];

  const handleMenuRoutes = (item: any) => {
    navigate(item.link);
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
          <div style={{ fontSize: "10px" }}>
            This Web App is Developed by{" "}
            <a style={{ fontSize: "10px" }} href="https://www.linkedin.com/in/rohtash-lahry/">
              Rohtash Lahry
            </a>
          </div>
        </div>
      </nav>
      <div
        className="header-flyout"
        style={{ width: showFlyout ? "300px" : "50px" }}
      >
        <div className="header-flyoutBars">
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setShowFlyout(!showFlyout)}
          >
            <MenuIcon />
          </span>
        </div>
        {showFlyout && (
          <div>
            <nav>
              <div>
                {menuItems &&
                  menuItems.map((item) => {
                    return (
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => handleMenuRoutes(item)}
                      >
                        {item.title}
                      </p>
                      // <Link to={item.link}>{item.title}</Link>
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
