import { React, useState } from "react";

import logo from "../../assets/logo.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import "./Navbar.css";

const menu = (
  <>
    <p>
      <a href="#Home">Home</a>
    </p>
    <p>
      <a href="#About">About</a>
    </p>
    <p>
      <a href="#openAi">open Ai</a>
    </p>
    <p>
      <a href="#case studies">case studies</a>
    </p>
    <p>
      <a href="#Libraries">Libraries</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar section__padding ">
      <div className="navbar__navbar-logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="navbar__navbar-links">{menu}</div>

      <div className="navbar__signin-container">
        <p>Sign in</p>
        <button type="button">sign up</button>
      </div>

      <div className="navbar__toggle-menu_container">
        <div className="navbar__toggle-menu-icons">
          {toggleMenu ? (
            <AiOutlineClose
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <AiOutlineMenu
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
        </div>
        {toggleMenu && (
          <div className="navbar__menu-links_container slide-left">
            <div className="navbar__menu-links">
              {menu}
              <div className="navbar__menu-sign-in">
                <p>Sign in</p>
                <button type="button">sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
