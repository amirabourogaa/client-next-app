import React from 'react'
import * as FaIcons  from "react-icons/fa";
import * as AiIcons  from "react-icons/ai";
import * as IoIcons  from "react-icons/io";
import  Home  from '@material-ui/icons';

export const SideNavData = [
    {
        title : 'Home',
        path : '/',
        icon : <AiIcons.AiFillHome/>,
        cName : 'nav-text'
    },
    {
        title : 'Profile',
        path : '/profile',
        icon : <AiIcons.AiFillHome/>,
        cName : 'nav-text'
    },
    {
        title : 'DashBoard',
        path : '/dashBoard',
        icon : <AiIcons.AiFillHome/>,
        cName : 'nav-text'
    },
    {
        title : 'File',
        path : '/file',
        icon : <AiIcons.AiFillHome/>,
        cName : 'nav-text'
    },
    {
        title : 'Messages',
        path : '/messages',
        icon : <FaIcons.FaEnvelopeOpenText/>,
        cName : 'nav-text'
    }
]
   

