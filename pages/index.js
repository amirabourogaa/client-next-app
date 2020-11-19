import React, { useState } from "react";
import Link from "next/link";
import "bootswatch/dist/slate/bootstrap.min.css";
import "bootswatch/dist/Cerulean/bootstrap.min.css";
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Modal from "./modal.js";

import { left } from "@popperjs/core";

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

export default function Index() {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <IndexNavbar fixed />
      {/* <Modal style={{"z-index":"2"}}/> */}
      <section className="header relative pt-16 items-center flex h-screen bg-white max-h-860-px">
        <Row>
          <Col>
            <div className="container mx-auto items-center flex flex-wrap">
              <div className="w-full md:w-9/12 lg:w-6/12 xl:w-8/12 px-6">
                <div>
                  <h2 className="font-semibold text-4xl text-gray-700">
                    IRADA
                  </h2>
                  <br></br>
                  <br></br>
                  <br></br>
                  <p className="mt- text-xl leading-relaxed text-gray-600">
                    IRADA Consulting is a private engineering and consulting
                    firm founded by a high qualified and experienced team. We
                    are a Project and Business Development Company. IRADA
                    Consulting has a portfolio of services that encompasses
                    expertise, surveying, advising, training and mentoring in
                    the sectors of industry, agriculture and environment. We
                    pride ourselves on providing concrete and customized
                    solutions fully adapted to the specific needs of our
                    clients.
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col md="6">
            <UncontrolledCarousel items={items} />
          </Col>
        </Row>
      </section>

      <section className="mt-48 md:mt-40 pb-40 bg-gray-200 relative ">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h3 className="text-4xl font-normal  ml-4  mb-2 text-blue-800">
          &nbsp;
          <i class="fas fa-chalkboard-teacher"></i>
          &nbsp; Team members
        </h3>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full px-4 flex-1">
              <span className="my-4 p-4 text-gray-800 border-solid ">
                <div className="w-full">
                  <div className="px-6 ">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-3-800x800-19201574ed51f77138a739c0452ca104.jpg"
                          alt="..."
                          className="shadow-lg rounded max-w-full h-auto align-middle border-none"
                        />
                      </div>
                    </div>
                    <div className="pt-8">
                      <h5 className="text-xl font-bold">Faycel IDOUDI</h5>
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
                    <div className="flex flex-wrap justify-center">
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-3-800x800-19201574ed51f77138a739c0452ca104.jpg"
                          alt="..."
                          className="shadow-lg rounded max-w-full h-auto align-middle border-none"
                        />
                      </div>
                    </div>
                    <div className="pt-8">
                      <h5 className="text-xl font-bold">Sonia CHEOUR</h5>
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
                    <div className="flex flex-wrap justify-center">
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-3-800x800-19201574ed51f77138a739c0452ca104.jpg"
                          alt="..."
                          className="shadow-lg rounded max-w-full h-auto align-middle border-none"
                        />
                      </div>
                    </div>
                    <div className="pt-8">
                      <h5 className="text-xl font-bold">Mohamed MAARREF</h5>
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
                    <div className="flex flex-wrap justify-center">
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-3-800x800-19201574ed51f77138a739c0452ca104.jpg"
                          alt="..."
                          className="shadow-lg rounded max-w-full h-auto align-middle border-none"
                        />
                      </div>
                    </div>
                    <div className="pt-8">
                      <h5 className="text-xl font-bold">Dr Rabeh Alouini</h5>
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
                    <div className="flex flex-wrap justify-center">
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-3-800x800-19201574ed51f77138a739c0452ca104.jpg"
                          alt="..."
                          className="shadow-lg rounded max-w-full h-auto align-middle border-none"
                        />
                      </div>
                    </div>
                    <div className="pt-8">
                      <h5 className="text-xl font-bold">Nadia IDOUDI</h5>
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
                    <div className="flex flex-wrap justify-center">
                      <div className="w-6/12 sm:w-4/12 px-4">
                        <img
                          src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/team-3-800x800-19201574ed51f77138a739c0452ca104.jpg"
                          alt="..."
                          className="shadow-lg rounded max-w-full h-auto align-middle border-none"
                        />
                      </div>
                    </div>
                    <div className="pt-8">
                      <h5 className="text-xl font-bold">Yssine MESTIRI</h5>
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

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">Our clients</h3>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/clients.png")}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-48 md:mt-40 pb-40 bg-gray-200  ">
        <style jsx>{`
          #marg {
            margin-left: 100px;
          }
          #marg1 {
            margin-left: 250px;
          }
          #logoSec {
            background-color: #d3d3d3;
          }
        `}</style>

        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap ">
            <div className="w-full px-4  -mt-24 w-full px-4 flex-1">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4" id="marg">
                  <Link href="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <br></br>
                      <h5 className="text-xl font-semibold pb-4 text-center">
                        Login Page
                      </h5>
                      <img
                        alt="..."
                        className="align-middle border-none  h-auto rounded-lg"
                        src={require("assets/img/login.jpg")}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4" id="marg1">
                  <Link href="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <br></br>
                      <h5 className="text-xl font-semibold pb-4 text-center">
                        Contact us
                      </h5>
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/landing.jpg")}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-gray-700 overflow-hidden">
         <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Contact us 
                  </h5>
                  <Link href="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/landing.jpg")}
                      />
                    </div>
                  </Link>
                </div>
      </section> */}
      <section className="py-20 bg-gray-700 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                MAIN REFERENCES PROJECT
              </h3>
              <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                <h5>
                  {" "}
                  <i class="fas fa-seedling"></i> ENVIRONMENT
                </h5>
              </span>
              <br></br> <br></br>
              <span className="text-xl font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                <h5>
                  {" "}
                  <i class="fas fa-satellite"></i> RENWEABLE ENERGY{" "}
                </h5>
              </span>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fas fa-cloud-sun text-gray-800 absolute text-55 -top-150-px -right-100 left-auto opacity-80"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-gray-300 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}>
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0">
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>

        <div id='partners' className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">Our partner</h3>
              <br></br><br></br><br></br><br></br>
              <div >
                <Row>
                  
                <a
                  href="http://www.mpscompany.net/"
                  target="_blank"
                  >                  
                <div className="flex flex-wrap justify-center">
                    <div>
                      <img
                        style={{width:'150px' ,height:'300px', marginRight:'200px',marginLeft:'150px'}}
                        src="http://www.mpscompany.net/assets/images/logo2.png"
                        
                        className="shadow-lg rounded-full  h-auto  border-none"
                      />
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.geo-arch.net/"
                  target="_blank"
                  >                  
                  <div className="flex flex-wrap justify-center">
                    <div>
                      <img
                        style={{width:'150px'}}
                        src="https://www.geo-arch.net/____impro/1/onewebmedia/geoArch.logo%20petit%202.png?etag=%2225cf-5a1d7ce6%22&sourceContentType=image%2Fpng"
                        alt="..."
                        className="shadow-lg rounded-full  h-auto  border-none"
                      />
                    </div>
                  </div>
                </a>
                </Row>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>

     
      <Footer />
      <div></div>
    </>
  );
}
