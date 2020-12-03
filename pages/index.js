import React, { useState } from "react";
import Link from "next/link";
// import "bootswatch/dist/slate/bootstrap.min.css";
import { Container, Row, Jumbotron } from "reactstrap";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Slider from '../pages/logoSlider.js'

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
  
      <IndexNavbar fixed />
      <div className="content" style={{marginLeft:"30px",marginRight:"30px"}}>
      <section>
    
      
        
      <Jumbotron >
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
      <br></br>
        <br></br>
        
      <section >
        <center>
        <h2 style={{color:'#1B019B',fontSize:30,marginBottom:'80px',marginTop:'80px'}}  >
          
          <i className="fas fa-chalkboard-teacher"></i>
          &nbsp; Team members
        </h2>
        </center>
        
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
          
          <br></br>
          <br></br>
          <div >
            <center>
              <h1  style={{color:'#1B019B',fontSize:30}}>
                Our Clients
              </h1>
            </center>

            <div className="w-12/12 px-4">
              <div className="w-full px-4 flex-1">
                <span className="text-sm block my-4 p-3 ">
                  <Slider/>
                  {/* <table className="table table-hover">
                    <thead></thead>
                    <tbody>
                      <tr >
                        <td>
                        <img src="/img/logo/cooperEnergy.jpg"></img>
                       
                        </td>
                        <td> 
                          <img src="/img/logo/anpe.jpg"></img>
                        </td>
                        <td>
                          <img src="/img/logo/atlas-engineering.png" />
                        </td>
                        <td>
                        <img src="/img/logo/tunSucre.jpg" />
                        
                        </td>
                        <td>
                        <img src="/img/logo/sidenor.jpg" />
                          
                        </td>
                        <td>
                        <img src="/img/logo/jomismor.png" />
                        </td>
                        <td>
                        
                        <img src="/img/logo/winstar-logo.jpg" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <img src="/img/logo/dueSouthEnergy.png"></img>
                        </td>

                        <td>
                          <img src="/img/logo/envicontrol.png" />
                        </td>
                        <td>
                          <img src="/img/logo/genpharma.png" />
                        </td>
                        
                        <td> 
                        <img src="/img/logo/SONEDE.jpg" />
                         
                        </td>
                        <td>
                        <img src="/img/logo/anged.png" />
                        </td>
                        <td>
                          <img src="/img/logo/kronosSolar.jpg" />
                        </td>
                      </tr>
                      <tr>
                       
                        <td>
                          <img src="/img/logo/maretap.png" />
                        </td>
                        <td>
                          <img src="/img/logo/omv.png" />
                        </td>
                        <td>
                          <img src="/img/logo/primaFish.jpg" />
                        </td>
                        <td>
                         <img src="/img/logo/bks.jpg" />
                        </td>
                        <td>
                          <img src="/img/logo/SODEPS.jpg" />
                        </td>
                       
                      </tr>
                      <tr></tr>
                      <tr>
                        <td>
                          <img src="/img/logo/steg2.png" />
                        </td>
                        <td>
                        <img src="/img/logo/bg_tunisia.jpg" />
                        </td>
                        <td>
                      
                        <img src="/img/logo/cag.png"></img>
                        </td>
                        <td>
                        <img src="/img/logo/huawei.png"/>
                        </td>
                      </tr>
                    </tbody>
                  </table> */}
                       <style jsx>{`
                    img,td {
                      width: 130px;
                      height : auto;
                      padding : 10px;
                     
                      
                    }
                  `}</style>
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

      <section className="mt-10 md:mt-10 pb-10 ">
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
          #firstSection {
          }
         
        `}</style>

      </section>

       
       <section >
       
        <div id="partners" className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-gray-300 shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center"></p>
              <h3 style={{color:'#1B019B',fontSize:30}} className="font-semibold text-3xl">Our Partners</h3>
              <br></br><br></br><br></br>
              
              <table >
                    <thead></thead>
                    <tbody>
                      <tr >
                        <td>
                          
  <div style={{backgroundColor:'whitesmoke', marginRight:'100px',width:'200px',height:'250px'}} className="card mb-3">
    <br></br>
  <h1 style={{color:'#1B019B'}} >MPS</h1>
 <br></br>
 
 
                    <div className="flex flex-wrap ">
                      <div>
                       
                        <img
                         
                          src="http://www.mpscompany.net/assets/images/logo2.png"
                          className="  border-none"
                         
                        />
                       
                      </div>
                    </div>
                
                  
                  <div className="card-body">

    <a href="http://www.mpscompany.net/" target="_blank" className="card-link">Visit the website</a>
    
  </div>
  
</div>

                        </td>
                        <td> 
                        
  
  <div style={{backgroundColor:'whitesmoke', marginRight:'100px',width:'200px',height:'250px'}}  className="card mb-3">
    <br></br>
  <h1 style={{color:'#1B019B'}}>GEO-ARCH-net</h1>
 <br></br>
 
                    <div className="flex flex-wrap ">
                      <div >
                        <img
                          style={{marginLeft:'35px'}}
                          src="https://www.geo-arch.net/____impro/1/onewebmedia/geoArch.logo%20petit%202.png?etag=%2225cf-5a1d7ce6%22&sourceContentType=image%2Fpng"
                          alt="..."
                         
                        />
                      </div>
                    </div>
                   
                  <a href="https://www.geo-arch.net/" target="_blank" className="card-link">Visit the website</a>
  
</div>
                       
                        </td>
                        <td>
                        <div style={{backgroundColor:'whitesmoke', marginRight:'100px',width:'200px',height:'250px'}}   className="card mb-3">
    <br></br>
  <h1 style={{color:'#1B019B'}} >Envicontrol</h1>
 <br></br>
                    <div className="flex flex-wrap ">
                      <div>
                        <img
                         
                          src="data:image/png;base64,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"
                          alt="..."
                          className="  border-none"
                        />
                       
                      </div>
                    </div>
                    <br/><br/><br/>
                  <a href="https://www.envicontrol.com/" target="_blank" className="card-link">Visit the website</a>
</div>
                     
                        </td>
                       
                        </tr>
                        </tbody>
                        </table>
                        <style jsx>{`
         img {
          
          padding: 20px;
           margin-right : 100px;
         }
          
        `}</style>

    <br></br><br></br> <br></br> <br></br>    
       
 
            </div>
          </div>
        </div>
      </section> 
    
      <br></br><br></br><br></br><br></br>
      </div>
      {/* <Footer /> */}

    </>
  );
}

