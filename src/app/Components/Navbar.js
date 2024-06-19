import React, { useState } from "react";
import logo from "../../../assets/img/logo.png";
import Image from "next/image";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const [mobToggle, setMobToggle] = useState(false);

  return (
    <header
      id="header"
      className="fixed top-0 right: 0 left: 0 flex items-center justify-between"
    >
      <div className="logo flex  items-center">
        <a href="/">
          <Image src={logo} alt="image" width={80} className="img-fluid " />
        </a>
        <h1>
          <a href="/">AKESHYA</a>
        </h1>
      </div>

      <nav id="navbar" className="navbar ">
        <div className="desktopnav">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="getstarted scrollto" href="#contact">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {mobToggle && (
          <div className="navbar-mobile">
            <ul>
              <li>
                <a
                  onClick={() => {
                    setMobToggle(false);
                  }}
                  className="nav-link scrollto active"
                  href="#hero"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setMobToggle(false);
                  }}
                  className="nav-link scrollto"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setMobToggle(false);
                  }}
                  className="nav-link scrollto"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setMobToggle(false);
                  }}
                  className="getstarted"
                  style={{ marginLeft: "0px" }}
                  href="#contact"
                >
                  Contact us
                </a>
              </li>
            </ul>
            <BiX
              onClick={() => {
                setMobToggle(false);
              }}
              className="mobile-nav-toggle bi-x"
            />
            <i></i>
          </div>
        )}

        <BiMenu
          onClick={() => {
            setMobToggle(true);
          }}
          className="menu"
        />
      </nav>
    </header>
  );
};

export default Navbar;
