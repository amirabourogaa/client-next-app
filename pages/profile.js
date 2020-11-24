import React, {useState} from "react";
import Link from "next/link";

import NavbarLoggedIn from "components/Navbars/NavbarLoggedIn.js";
import * as FaIcons  from "react-icons/fa";
import * as AiIcons  from "react-icons/ai";
import {SideNavData} from '../pages/SideNavData.js'
export default function Profile() {
  const [sidebar , setSideBar] = useState(false)
 const showSidebar = ()=> setSideBar(!sidebar)

 
  return (
    <>
    <style jsx>{`
    .sideNav {
      background-color : #060b26 ; 
      height : 80px ;
      display : flex ;
      justify-content : start ;
      align-items : start ;
    }
    .menu-bars {
      margin-left : 200px ;
      font-size : 200px ;
      background : none ;
    }
`}</style>

    <NavbarLoggedIn fixed ></NavbarLoggedIn>
     
     <div className ='sideNav'> 
     <Link href='#' className='menu-bars'>
     <FaIcons.FaBars onClick ={showSidebar}/>
     </Link>
     </div>
     <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
       <ul className='nav-menu-items'>
         <li className='navbar-toggle'>
          <Link href ='#'className='menu-bars'>
            <AiIcons.AiOutlineClose/>
          </Link>
         </li>
         {SideNavData.map((item, index )=>{
           return (
             <li key={index} className={item.cName}>
              
                 {item.icon}
           <span>{item.title}</span>
              
             </li>
           );
         })}
       </ul>

     </nav>
     

    </>
  );
}
