import React, { useState } from "react";
import Link from "next/link";
// import "bootswatch/dist/slate/bootstrap.min.css";
import { Container, Row, Jumbotron } from "reactstrap";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Slider from '../pages/logoSlider.js'
import Example from '../pages/Carousel'
import '../pages/index.css'
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
  
      <IndexNavbar  />
      <Example style={{height:'200px'}}/>
      <div className="content" style={{marginLeft:"30px",marginRight:"30px"}}>
      <section>
    
      
        
      <Jumbotron style={{backgroundColor:'white'}}>
       
        <Container >
        <center >
          <img
                    style={{ width: "200px", height: "200px" }}
                    src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.15752-9/126426883_5004877019537638_7176445470275738431_n.png?_nc_cat=110&ccb=2&_nc_sid=ae9488&_nc_ohc=r4aGRoxfozYAX-M38l7&_nc_ht=scontent.ftun4-1.fna&oh=7ac6768b3218e99535d60bde9dc22df2&oe=5FDF17F4"
                    alt="..."
                  />

</center>  
          <p style={{color:'black',fontSize:'22px'}}>
                Is a private engineering and consulting firm founded by a
                    high qualified and experienced team. <br/>
                    We are a Project and
                    Business Development Company. <br/> 
                    IRADA Consulting has a
                    portfolio of services that encompasses expertise, surveying,
                    advising, training and mentoring in the sectors of industry,
                    agriculture and environment.<br/> We pride ourselves on providing
                    concrete and customized solutions fully adapted to the
                    specific needs of our clients.
          </p>
        </Container>
      </Jumbotron>
   
      </section>
     
      <section >
      
        <h2 style={{color:'#1B019B',fontSize:30,marginBottom:'80px'}}  >
          
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
                      <h5 className="text-xl font-bold" style={{color:'#1B019B'}}>Faycel IDOUDI</h5>
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
                      <h5 className="text-xl font-bold" style={{color:'#1B019B'}}>Sonia CHEOUR</h5>
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
                      <h5 className="text-xl font-bold" style={{color:'#1B019B'}}>Mohamed MAARREF</h5>
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
                      <h5 className="text-xl font-bold" style={{color:'#1B019B'}}>Dr Rabeh Alouini</h5>
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
                      <h5 className="text-xl font-bold" style={{color:'#1B019B'}}>Nadia IDOUDI</h5>
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
                      <h5 className="text-xl font-bold" style={{color:'#1B019B'}}>Yssine MESTIRI</h5>
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
          
              <h1  style={{color:'#1B019B',fontSize:30}}>
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

        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap ">
            <div className="w-full px-4   w-full px-4 flex-1">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4" id="marg">
                  <Link href="/auth/login">
                    <div className="hover:-mt-2 relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
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
                        src={require("assets/img/landing1.jpg")}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
     
      <div style={{marginTop:'0px'}}>
      <h1  style={{color:'#1B019B',fontSize:30}}>
              <i class="fas fa-users"></i> &nbsp; &nbsp;
                Our Partners
              </h1>
          <div style={{marginLeft:'250px'}}>
         
            <center>
          <section>
<div id="icon-wrapper">
  <a href="http://www.mpscompany.net/" target="_blank">
    <div class="icons">
      <div class="icon-slide-container">
        <img class="slide-icon"  src="/img/logo/model logo.jpg"/>
        </div>
      </div>
    </a>
    
    <a href="https://geo-arch.net/"target="_blank">
      <div class="icons2">
        <div class="icon-slide-container">
        
        <img class="slide-icon"  src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.15752-9/129535100_195760702087113_4457069486544594080_n.jpg?_nc_cat=110&ccb=2&_nc_sid=ae9488&_nc_ohc=RD3QRMzOLk8AX9y8bPk&_nc_ht=scontent.ftun4-1.fna&oh=12ddd785232a087c12552ef82a4d00d3&oe=5FF19DE3"/>

          </div>
        </div>
      </a>
      
      <a href="https://www.envicontrol.com/"target="_blank">
        <div class="icons3">
          <div class="icon-slide-container">
          <img class="slide-icon"  src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.15752-9/129370611_1788868821270711_420190298559719592_n.jpg?_nc_cat=110&ccb=2&_nc_sid=ae9488&_nc_ohc=5zAk7uiMyeoAX_wSPI0&_nc_ht=scontent.ftun4-1.fna&oh=475d948e803ba6cc596b6d63154de2b1&oe=5FEDE4CD"/>
          
            </div>
          </div>
        </a>
        
       
  </div>
</section>
          </center> 
          </div>
          </div>
      
      </div>
      {/* <div>
    <Footer fixed ></Footer>
    </div> */}
    </>
  );
}