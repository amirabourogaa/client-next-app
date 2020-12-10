import React, { useState } from "react";
import '../pages/testHome.css';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Home() {
 
        return (
            <>
            <div class="wrapper">
  <div class="Container">
        <div class="nav">
            <div class="logo">
               IRADA consulting
            </div>
            <div class="menu">
                <ul class="navMenu">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/services">Services </a></li>
                    <li><a href="/mainRef">MAin refrences</a></li>
                    <li><a href="/landing">Contact</a></li>
                    <li><a href="/auth/login">Login</a></li>
                </ul>
            </div>
        </div>
        <div class="header">
            <h1>Welcome to IRADA consulting</h1>
            <p >Thank you for visiting our Web site 
            </p>
            
        </div>
        
    </div>
   
</div>


            </>
        )
    }
