import React from "react";
import { Col,Row } from "reactstrap";
import '../components/text.css';

export default function Text  () {
  return (
    <div>
      
  <Row>
      <Col>
      <div >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div class="content1">
            {/* <h2>Hover Box</h2> */}
            <img
                    style={{ width: "200px", height: "200px" }}
                    src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.15752-9/126426883_5004877019537638_7176445470275738431_n.png?_nc_cat=110&ccb=2&_nc_sid=ae9488&_nc_ohc=r4aGRoxfozYAX-M38l7&_nc_ht=scontent.ftun4-1.fna&oh=7ac6768b3218e99535d60bde9dc22df2&oe=5FDF17F4"
                    alt="..."
                  />
            {/* <p style={{fontSize:'16px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident.</p> */}
      </div>
</div>
      </Col>
      <Col>
      <div class="box">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div class="content">
            <h2>Hover Box</h2>
            <p style={{fontSize:'16px'}}> Is a private engineering and consulting firm founded by a
                    high qualified and experienced team. <br/>
                    We are a Project and
                    Business Development Company. <br/> 
                    IRADA Consulting has a
                    portfolio of services that encompasses expertise, surveying,
                    advising, training and mentoring in the sectors of industry,
                    agriculture and environment.<br/> We pride ourselves on providing
                    concrete and customized solutions fully adapted to the
                    specific needs of our clients.</p>
      </div>
</div>
      </Col>
  </Row>
 
       </div>
  );
};
