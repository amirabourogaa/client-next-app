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
     {/* <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-900 mb-3">
    
  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    
    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
   
   
      <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white" href="/home">
      <img id='img' src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.15752-9/125037799_878726562871835_8720913611029844496_n.png?_nc_cat=111&ccb=2&_nc_sid=ae9488&_nc_ohc=sg-QPaRfdEUAX-_7srx&_nc_ht=scontent.ftun4-1.fna&oh=6094e956cde2f33f910bba1dfff7c316&oe=5FD7E3D7"  width = '130px' />
      </a>
       

      
      <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      </button>
    </div>
    <div className="lg:flex flex-grow items-center">
      <ul className="flex flex-col lg:flex-row list-none ml-auto">
       
        <li className="nav-item">
          <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
          <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
            id='butt'
              className="text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-yellow-500 active:bg-yellow-600 ease-linear transition-all duration-150"
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              Menu
            </button>
            
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "bg-yellow-500 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48"
              }
            >
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                onClick={e => e.preventDefault()}
              >
                Presentation
              </a>
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                onClick={e => e.preventDefault()}
              >
                Services
              </a>
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                onClick={e => e.preventDefault()}
              >
                Contact us
              </a>
              <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-white"
                onClick={e => e.preventDefault()}
              >
                Partners
              </a>
            </div>
          </div>
        </div>
      </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <i className="fas fa-heart"></i>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor02">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      
    </ul>
    
  </div>
</nav>
    </>
  );
}
