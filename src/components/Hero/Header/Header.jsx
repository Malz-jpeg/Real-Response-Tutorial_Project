import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";


const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMyStyles = (menuOpened) => {
    return window.innerWidth <= 800
      ? { right: menuOpened ? "0" : "-100%" }
      : { right: "0" }; // Ensure the menu is visible for larger screens
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="/logo.png" alt="logo" width={100} />

        <OutsideClickHandler onOutsideClick={setMenuOpened.bind(null, false)}>
          <div
            className="flexCenter h-menu"
            style={getMyStyles(menuOpened)}
          >
            <a href="#residencies">Residencies</a>
            <a href="#values">Our Values</a>
            <a href="#contact">Contact Us</a>
            <a href="#get-started">Get Started</a>
            <button className="button">Contact</button>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;