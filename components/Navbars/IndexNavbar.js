import React, { Component } from "react";

import { createPopper } from "@popperjs/core";
// components
import "../../node_modules/bootswatch/dist/slate/bootstrap.min.css";
import "../../node_modules/bootswatch/dist/Cerulean/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import cookie from "js-cookie";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "top",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  var loggedIn = cookie.get("token");
  console.log(loggedIn);

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          IRADA consulting
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href=" #partners">
                Partners
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">
                Services
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="/mainRef">
                Main Refrences
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/landing">
                Contact us
              </a>
            </li>
            {loggedIn !== undefined ? (
              <li
                className="nav-item"
                onClick={() => {
                  cookie.remove("token");
                }}
              >
                <a className="nav-link" href="/login">
                  log out
                </a>
              </li>
            ) : (
              <div></div>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
