import React from "react";
//import CustomDropdown from "./components/CustomDropdown/CustomDropdown.js";
//import React from "react";
import { createPopper } from '@popperjs/core';
// components
import "bootswatch/dist/slate/bootstrap.min.css";
import "bootswatch/dist/Cerulean/bootstrap.min.css";
import IndexDropdown from "components/Dropdowns/IndexDropdown.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "top"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
     
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">
    IRADA consulting 
    </a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor02">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home
          <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Partners</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      
    </ul>
    
  </div>
</nav>
    </>
  );
}
