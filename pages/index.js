import React, { useState } from "react";
import Link from "next/link";
import { Container, Row, Jumbotron } from "reactstrap";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Slider from '../pages/logoSlider.js'

import '../pages/index.css';
import Text from '../components/TextContainer.js';
import Home from '../pages/testHomePage.js';
import MainRef from '../pages/mainRef.js';
const items = [
  {
    src: require("assets/img/naturee.jpg"),
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: require("assets/img/naturee2.jpg"),
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: require("assets/img/sunEnergy.jpg"),
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];
const items2 = [
  {
    src: require("assets/img/logo/omv.png"),
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: require("assets/img/logo/anged.png"),
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: require("assets/img/sunEnergy.jpg"),
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];

export default function Index() {
  const [showModal, setShowModal] = useState(true);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
  
      {/* <IndexNavbar  /> */}
      
      <Home></Home>
      <div className="content" style={{marginLeft:"30px",marginRight:"30px"}}>
      <section>
        <center style={{marginTop:'100px',marginBottom:'50px'}}>
      <Text/>
      </center>
      
        
   
      </section>
     
      <section >
      
        <h2 style={{color:'#00609e',fontSize:30,marginBottom:'80px'}}  >
          
          <i className="fas fa-chalkboard-teacher"></i>
          &nbsp; Team members
        </h2>
        
        
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full px-4 flex-1">
              <span >
                <div className="w-full">
                  <div className="px-6 ">
                    <div className="flex flex-wrap ">
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.15752-9/127711876_293778051990141_2103523223988843810_n.jpg?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_ohc=OFXTxCsuBjwAX90TfJO&_nc_ht=scontent.ftun4-1.fna&oh=4a8be717bdbe809fd2280cc44ce7b2ce&oe=5FE75728"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="pt-8" style={{marginLeft: '20px'}}>
                      <h5 className="text-xl font-bold" style={{color:'#00609e'}}>Faycel IDOUDI</h5>
                      <h6 className="text-xl font-normal  mt-0 mb-2 text-gray-800">
                        Petroleum Engineer Founder & Business Development
                        Manager
                      </h6>
                    </div>
                  </div>
                </div>
              </span>
            </div>
            <div className="w-full px-4 flex-1">
              <span className="my-4 p-4 text-gray-800 border-solid ">
                <div className="w-full">
                  <div className="px-6 ">
                    <div className="flex flex-wrap ">
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src="https://freepikpsd.com/wp-content/uploads/2019/10/add-photo-icon-png-6-Transparent-Images.png"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="pt-8" style={{marginLeft: '20px'}}>
                      <h5 className="text-xl font-bold" style={{color:'#00609e'}}>Sonia CHEOUR</h5>
                      <h6 className="text-xl font-normal  mt-0 mb-2 text-gray-800">
                        Master in Legal Science
                      </h6>
                    </div>
                  </div>
                </div>
              </span>
            </div>
            <div className="w-full px-4 flex-1">
              <span className="my-4 p-4 text-gray-800 border-solid ">
                <div className="w-full">
                  <div className="px-6 ">
                    <div className="flex flex-wrap ">
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src="https://freepikpsd.com/wp-content/uploads/2019/10/add-photo-icon-png-6-Transparent-Images.png"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="pt-8" style={{marginLeft: '20px'}}>
                      <h5 className="text-xl font-bold" style={{color:'#00609e'}}>Mohamed MAARREF</h5>
                      <h6 className="text-xl font-normal  mt-0 mb-2 text-gray-800">
                        Georesources Engineer Manager
                      </h6>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full px-4 flex-1">
              <span className="my-4 p-4 text-gray-800 border-solid ">
                <div className="w-full">
                  <div className="px-6 ">
                    <div className="flex flex-wrap ">
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src="https://freepikpsd.com/wp-content/uploads/2019/10/add-photo-icon-png-6-Transparent-Images.png"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="pt-8" style={{marginLeft: '20px'}}>
                      <h5 className="text-xl font-bold" style={{color:'#00609e'}}>Dr Rabeh Alouini</h5>
                      <h6 className="text-xl font-normal  mt-0 mb-2 text-gray-800">
                        Geology & Mines
                      </h6>
                    </div>
                  </div>
                </div>
              </span>
            </div>
            <div className="w-full px-4 flex-1">
              <span className="my-4 p-4 text-gray-800 border-solid ">
                <div className="w-full">
                  <div className="px-6 ">
                    <div className="flex flex-wrap ">
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src="https://freepikpsd.com/wp-content/uploads/2019/10/add-photo-icon-png-6-Transparent-Images.png"
                          alt="..."
                        />
                      </div>
                    </div>
                    <div className="pt-8" style={{marginLeft: '20px'}}>
                      <h5 className="text-xl font-bold" style={{color:'#00609e'}}>Nadia IDOUDI</h5>
                      <h6 className="text-xl font-normal  mt-0 mb-2 text-gray-800">
                        Financial Advisor
                      </h6>
                    </div>
                  </div>
                </div>
              </span>
            </div>
            <div className="w-full px-4 flex-1">
              <span className="my-4 p-4 text-gray-800 border-solid ">
                <div className="w-full">
                  <div className="px-6 ">
                    <div className="flex flex-wrap ">
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src="https://freepikpsd.com/wp-content/uploads/2019/10/add-photo-icon-png-6-Transparent-Images.png"
                          alt="..."
                       
                        />
                      </div>
                    </div>
                    <div className="pt-8" style={{marginLeft: '20px'}}>
                      <h5 className="text-xl font-bold" style={{color:'#00609e'}}>Yssine MESTIRI</h5>
                      <h6 className="text-xl font-normal  mt-0 mb-2 text-gray-800">
                        Phd: Energy and Oil & Gas Expert
                      </h6>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
       
        <div >
          
  
          
          <div style={{marginTop:'100px'}}>
          
              <h1  style={{color:'#00609e',fontSize:30}}>
              <i class="fas fa-users"></i> &nbsp; &nbsp;
                Our Clients
              </h1>
            

            <div className="w-12/12 px-4">
              <div className="w-full px-4 flex-1">
                <span className="text-sm block my-4 p-3 ">
                <Slider/>
                  

                       
                </span>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </section>

      <section className="mt-5 md:mt-5 pb-5 " >
        <style jsx>{`
          #marg {
            margin-left: 100px;
            height: 500px
          }
          #marg1 {
            margin-left: 250px;
          }
         
        
        `}</style>

        
       
      </section>
     
      <div style={{marginTop:'0px'}}>
      <h1  style={{color:'#00609e',fontSize:30}}>
              <i class="fas fa-users"></i> &nbsp; &nbsp;
                Our Partners
              </h1>
          <div style={{marginLeft:'250px'}}>
         
            <center>
            <section class="cards">
<article id='partners' class="card card--1">
  <div class="card__info-hover">
    <svg class="card__like"  viewBox="0 0 24 24">
    <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
</svg>
      <div class="card__clock-info">
        <svg class="card__clock"  viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
        </svg><span class="card__time">Visit web site</span>
      </div>
    
  </div>
  <div class="card__img"></div>
  <a href="https://geo-arch.net/"target="_blank">
     <div class="card__img--hover"></div>
   </a>
  <div class="card__info">
    <h3 class="card__title">Geo Arch</h3>
  </div>
</article>
<article class="card card--3">
  <div class="card__info-hover">
    <svg class="card__like"  viewBox="0 0 24 24">
    <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
</svg>
      <div class="card__clock-info">
        <svg class="card__clock"  viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
        </svg><span class="card__time">visit web site</span>
      </div>
    
  </div>
  <div class="card__img"></div>
  <a href="http://www.mpscompany.net/" target="_blank" class="card_link">
     <div class="card__img--hover"></div>
   </a>
  <div class="card__info">
    <h3 class="card__title">MPS Company</h3>
  </div>
</article>
  
  
  
<article class="card card--2">
  <div class="card__info-hover">
    <svg class="card__like"  viewBox="0 0 24 24">
    <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />
</svg>
      <div class="card__clock-info">
        <svg class="card__clock"  viewBox="0 0 24 24"><path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
        </svg><span class="card__time">visit web site</span>
      </div>
    
  </div>
  <div class="card__img"></div>
  <a href="https://www.envicontrol.com/"target="_blank" class="card_link">
     <div class="card__img--hover"></div>
   </a>
  <div class="card__info">
    <h3 class="card__title">EnviControl </h3>
  </div>
</article>  
  
  
  
  </section>
          </center> 
          <br/><br/><br/><br/>
          </div>
          </div>
      
      </div>
     
      <div>
    <Footer fixed ></Footer>
    </div>
    </>
  );
}