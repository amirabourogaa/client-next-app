import React from "react";
import { createPopper } from "@popperjs/core";
import MapExampleScript from '../components/Maps/MapExample';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

const About = () => {
  
 
  return (
    <>
     <div  >
       {/* <IndexNavbar/> */}
       <div  >
    <div >
      <center>
      <div style={{fontSize:'22px',marginTop:'100px',width:'500px'}}>
      <h1 style={{fontSize:'30px',color:'#1B019B',fontWeight:'bold'}}>Contact</h1><br/>
       
        <p> <span>Adresse:</span> 10 Avenue Habib Bourguiba, <br/>
          Imm. Zaphyr B3-1 – Ariana 2080<br/>
          <span>Tel:</span> +216 71&nbsp;703&nbsp;733<br/>
          <span>Fax:</span> +216 71 703&nbsp;302<br/>
          <span>E-mail:</span> <a href="">irada.consulting13@gmail.com</a> </p>
          <br/>
      </div>
      </center>
    </div>
   
    
    <div className="w-full px-4 flex-1">
      <span className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">
      <div>
        <iframe width="100%" height="400" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=immeuble%20zephyr+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        
          </div>
      </span>
    </div>
  </div>
       
        
 </div>
 <br/><br/>
{/* <Footer/> */}
    </>
  );
};

export default About;