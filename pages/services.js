import React, { Fragment, useEffect } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import { UncontrolledCarousel, Row} from "reactstrap";
import "bootswatch/dist/slate/bootstrap.min.css";
import "react-slideshow-image/dist/styles.css";
import Carousel from '../pages/Carousel';
import '../pages/services.css';
import "react-slideshow-image/dist/styles.css";
import Footer from '../components/Footers/Footer.js';

const Tabs = () => {
  

  
  return (
    <>
      <IndexNavbar fixed />

      <div>
      <Carousel/>
      </div>
     
      


<div style={{marginTop:'200px',margin:'12px',marginBottom:'150px'}}>
    <div className="pricing card-deck flex-column flex-md-row mb-3">
        <div className="card card-pricing text-center px-3 mb-4">
            <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Environment</span>
            <div className="bg-transparent card-header pt-4 border-0">
                <h1 className="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="15">$<span className="price">3</span><span className="h6 text-muted ml-2">/ per month</span></h1>
            </div>
            <div className="card-body pt-0">
                <ul className="list-unstyled mb-4">
                <p style={{fontSize:'16px'}}>
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
                </ul>
            </div>
        </div>
        <div className="card card-pricing popular shadow text-center px-3 mb-4">
            <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Industrial Security</span>
            <div className="bg-transparent card-header pt-4 border-0">
                <h1 className="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="30">$<span className="price">6</span><span className="h6 text-muted ml-2">/ per month</span></h1>
            </div>
            <div className="card-body pt-0">
                <ul className="list-unstyled mb-4">
                <p style={{fontSize:'18px'}}>
                                Study of Dangers Fire Safety <br></br>
                        Study Emergency plans <br></br>
                        Supporting customers in setting up safety programs
                                </p> 
                </ul>
            </div>
        </div>
        <div className="card card-pricing text-center px-3 mb-4">
            <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Training </span>
            <div className="bg-transparent card-header pt-4 border-0">
                <h1 className="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="45">$<span className="price">9</span><span className="h6 text-muted ml-2">/ per month</span></h1>
            </div>
            <div className="card-body pt-0">
                <ul className="list-unstyled mb-4">
                
                                <p style={{fontSize:'18px'}}>
                                Design of geographic databases Geographic<br></br>
                        information system training <br></br>
                        Training in the following areas: The environment,
                        security Hygiene
                                </p> 
                </ul>
            </div>
        </div>
        <div className="card card-pricing text-center px-3 mb-4">
            <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">​​Infrastructure</span>
            <div className="bg-transparent card-header pt-4 border-0">
                <h1 className="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="60">$<span className="price">12</span><span className="h6 text-muted ml-2">/ per month</span></h1>
            </div>
            <div className="card-body pt-0">
                <ul className="list-unstyled mb-4">
                <p style={{fontSize:'16px'}}>
                                APS, APD and preparation of calls for tenders for
                        hydraulic works and CES <br></br>
                        development works Design and assistance in setting up
                        industrial and domestic water treatment plants <br></br>
                        Development program for industrial and urban areas Water
                        <br></br>
                        audit and development of water saving programs In the
                        field of training and assistance

                                    </p>
                </ul>
            </div>
        </div>
    </div>
</div>

    <Footer/>
    </>
  );
};

export default Tabs;
