import React,{ useState }  from "react";
import Link from "next/link";
import "bootswatch/dist/slate/bootstrap.min.css";
import "bootswatch/dist/Cerulean/bootstrap.min.css";
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Modal from "./modal.js"

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
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <Row>
          <Col>

            <div className="container mx-auto items-center flex flex-wrap">
              <div className="w-full md:w-9/12 lg:w-6/12 xl:w-8/12 px-6">
                <div>
                  <h2 className="font-semibold text-4xl text-gray-700">
                    IRADA
                  </h2>
                  <p className="mt- text-lg leading-relaxed text-gray-600">
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

      <section className="mt-48 md:mt-40 pb-40 relative bg-gray-200">
      <Row>
         
        <div className="container mx-auto overflow-hidden pb-20">
         
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
              <i class="fas fa-chalkboard-teacher"></i>
                Team members
              </h3>
            </div>
      </Row>    
      <Row>
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src={require("assets/img/component-profile-card.png")}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                />
              </div>
         
        </div>   
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src={require("assets/img/component-profile-card.png")}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                />
              </div>
         
        </div>   
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src={require("assets/img/component-profile-card.png")}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                />
              </div>
         
        </div>   
      </Row> 

       <Row>
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src={require("assets/img/component-profile-card.png")}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                />
              </div>
         
        </div>   
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src={require("assets/img/component-profile-card.png")}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                />
              </div>
         
        </div>   
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src={require("assets/img/component-profile-card.png")}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                />
              </div>
         
        </div>   
      </Row>      
            
           
        

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">other title</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Description
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">Sub title</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">Sub title</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">Sub title</h4>
                      </div>
                    </div>
                  </li>
                </ul>
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
                src={require("assets/img/logo.jpg")}
              />
            </div>
          </div>
        </div>
       
      </section>

      <section className="block relative z-1 bg-gray-700">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap ">
            <div className="w-full px-4  -mt-24 w-full px-4 flex-1">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Login Page
                  </h5>
                  <Link href="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/login.jpg")}
                      />
                    </div>
                  </Link>
                </div>
               


                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Services
                  </h5>
                  <Link href="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/naturee2.jpg")}
                      />
                    </div>
                  </Link>
                </div> 

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

      <section className="pb-16 bg-gray-300 relative pt-32"></section>
      <Footer />
      <div>
     
    </div>
    </>

  );
}
