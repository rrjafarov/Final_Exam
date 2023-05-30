import React from "react";
import "../Header/header.scss";
import { BsTelephone } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="all">
      <section id="top">
        <div className="container">
          <div className="top">
            <div className="top-paragraph">
              <p>We believe we helps people for happier lives</p>
            </div>
            <div className="top-img">
              <img
                src="https://preview.colorlib.com/theme/immigration/img/logo.png.webp"
                alt=""
              />
            </div>
            <div className="top-contact">
              <span>+880 123 12 658 439 </span>{" "}
              <BsTelephone style={{ fontSize: "24px" }} />
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section id="navbar">
        <div className="container">
          <div className="navbar">
            <ul>
              <li>
                <NavLink to={"/"}>HOME</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>ABOUT</NavLink>
              </li>
              <li>
                <NavLink to={"/immigration"}>IMMIGRATION</NavLink>
              </li>
              <li>
                <NavLink to={"/course"}>COURSE</NavLink>
              </li>
              <li>
                <NavLink to={"/country"}>COUNTRY</NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}>BLOG</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>CONTACT</NavLink>
              </li>
              <li>
                <NavLink to={"/elements"}>ADD PRODUCTS</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
