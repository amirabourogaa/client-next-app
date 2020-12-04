import React, { Fragment, useEffect } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import { UncontrolledCarousel, Row} from "reactstrap";
import "bootswatch/dist/slate/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import Footer from "components/Footers/Footer.js";

import "react-slideshow-image/dist/styles.css";


const Tabs = () => {
  

  
  return (
    <>
      <IndexNavbar fixed />
      
    
      

<center>
      <div className="flex flex-wrap">
        <div className="w-full px-4 flex-1">
          <span className="text-sm block">
            <br></br>

            <div
              id="services"
             
              style={{
                height: "365px",
                backgroundColor: "white",
                color: "white",
                fontSize: "20px",
              }}>
              <h1 style={{color:'#1B019B',fontSize:'50px'}}>
                Our Services{" "}
              </h1>

              <hr className="my-4" />
              <p style={{color:'black'}}>IRADA Consulting offers services in different areas</p>
            </div>
          </span>
        </div>
      </div>
      </center>
      <div className="flex flex-wrap">
        <Row>
          <div className="w-full px-4 flex-1">
            <span className="text-sm text-black block my-4 p-3 ">
              <div style={{border:'solid',borderStyle: 'inset'}}>
                <center>
                <h1 style={{fontSize:'22px',marginLeft:'20px',marginTop:'20px',color:'#1B019B',fontWeight:'bold'}}>
                  In the field of the environment
                </h1>
                </center>
                <div className="flex flex-wrap justify-center">
                  <div className="">
                    <img
                      style={{ marginTop: "50px", marginBottom: "50px" }}
                      src="https://i2.wp.com/www.irishcatholic.com/wp-content/uploads/2017/02/environment-1.jpg?fit=520%2C300&ssl=1"
                      alt="..."
                      className="shadow-lg rounded max-w-full h-auto align-middle border-none"
                    />
                  </div>
                </div>

                <div
                 
                  style={{ backgroundColor: "white" }}>
                  <div>
                    <div >
                      <h2 style={{fontSize:'18px',marginLeft:'20px',color:'#1B019B'}} >Description </h2>

                      <p style={{fontSize:'18px',marginLeft:'20px',marginBottom:'20px'}} >
                        Environmental and Social Impact Studies Depollution
                        studies and Diagnosis of polluted sites. Solid and
                        liquid waste management, treatment and recovery program.
                        Support for clients in setting up an environmental
                        management system according to ISO14001 standards
                        Measurements and modeling of atmospheric emissions and
                        marine pollution by hydrocarbons and chemical
                        substances. Development and animation of public and
                        social surveys.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
          <div className="w-full px-4 flex-1">
            <span className="text-sm text-black block my-4 p-3 ">
              <div style={{border:'solid',borderStyle: 'inset'}}>
                <center>
                <h1 style={{fontSize:'22px',marginLeft:'20px',marginTop:'20px',color:'#1B019B',fontWeight:'bold'}}>
                In the field of industrial security
                </h1>
                </center>
                <div className="flex flex-wrap justify-center">
                  <div className="">
                    <img
                      style={{ marginTop: "50px", marginBottom: "50px" }}
                      src="https://izimage.com/wp-content/uploads/2019/12/Plant-Safety-Challenges-Resized-1200x628.png"
                      alt="..."
                      className="shadow-lg rounded max-w-full h-auto align-middle border-none"
                    />
                  </div>
                </div>

                <div
                 
                  style={{ backgroundColor: "white" }}>
                  <div>
                    <div >
                      <h2 style={{fontSize:'18px',marginLeft:'20px',color:'#1B019B'}} >Description </h2>

                      <p style={{fontSize:'18px',marginLeft:'20px',marginBottom:'20px'}} >
                      Study of Dangers Fire Safety <br></br>
                        Study Emergency plans <br></br>
                        Supporting customers in setting up safety programs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
          
         
        </Row>
        <Row>
        <div className="w-full px-4 flex-1">
            <span className="text-sm text-black block my-4 p-3 ">
              <div style={{border:'solid',borderStyle: 'inset'}}>
                <center>
                <h1 style={{fontSize:'22px',marginLeft:'20px',marginTop:'20px',color:'#1B019B',fontWeight:'bold'}}>
                In the area of ​​infrastructure
                </h1>
                </center>
                <div className="flex flex-wrap justify-center">
                  <div className="">
                    <img
                      style={{ marginTop: "50px", marginBottom: "50px" }}
                      src="https://media.lesechos.com/api/v1/images/view/5da47f6e3e454656ec351248/1280x720/0602054046519-web-tete.jpg"
                      alt="..."
                      className="shadow-lg rounded max-w-full h-auto align-middle border-none"
                    />
                  </div>
                </div>

                <div
                 
                  style={{ backgroundColor: "white" }}>
                  <div>
                    <div >
                      <h2 style={{fontSize:'18px',marginLeft:'20px',color:'#1B019B'}} >Description </h2>

                      <p style={{fontSize:'18px',marginLeft:'20px',marginBottom:'20px'}} >
                      APS, APD and preparation of calls for tenders for
                        hydraulic works and CES <br></br>
                        development works Design and assistance in setting up
                        industrial and domestic water treatment plants<br></br>
                        Development program for industrial and urban areas Water
                        <br></br>
                        audit and development of water saving programs In the
                        field of training and assistance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
          <div className="w-full px-4 flex-1">
            <span className="text-sm text-black block my-4 p-3 ">
              <div style={{border:'solid',borderStyle: 'inset'}}>
                <center>
                <h1 style={{fontSize:'22px',marginLeft:'20px',marginTop:'20px',color:'#1B019B',fontWeight:'bold'}}>
                In the field of training and technical assistance
                </h1>
                </center>
                <div className="flex flex-wrap justify-center">
                  <div className="">
                    <img
                      style={{ marginTop: "50px", marginBottom: "50px" }}
                      src="https://www.lcmtlondon.com/wp-content/uploads/2020/04/shutterstock_285147194.jpg"
                      alt="..."
                      className="shadow-lg rounded max-w-full h-auto align-middle border-none"
                    />
                  </div>
                </div>

                <div
                 
                  style={{ backgroundColor: "white" }}>
                  <div>
                    <div >
                      <h2 style={{fontSize:'18px',marginLeft:'20px',color:'#1B019B'}} >Description </h2>

                      <p style={{fontSize:'18px',marginLeft:'20px',marginBottom:'20px'}} >
                      Design of geographic databases Geographic<br></br>
                        information system training <br></br>
                        Training in the following areas: The environment,
                        security Hygiene
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
          
       
         
                       </Row>
      
      </div>
      <Footer/>
    </>
  );
};

export default Tabs;
