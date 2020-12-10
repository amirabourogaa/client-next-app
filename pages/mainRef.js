import React from "react";
import { useState, useEffect } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import "bootswatch/dist/slate/bootstrap.min.css";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Footer from "components/Footers/Footer.js";
import { Col, Row } from "reactstrap";
import '../pages/mainRef.css';
import Ref from "layouts/Ref.js";
export default function MainRef() {
  const [MainRef, setState] = useState([]);
  axios
    .get("https://server-cunsulting.herokuapp.com/References")
    .then((res) => {
      console.log(MainRef);
      if (res.data.length > 0) {
        if (MainRef[0] === undefined) {
          setState([MainRef, res.data]);
          console.log(MainRef);
          console.log("hey");
        }
      }
    });
  return (
    <div >
      <center>
      <IndexNavbar></IndexNavbar>
      <Row>
      
      <Col>
      <div className="flex flex-wrap">
        <div >
          
        </div>
      </div>
      <div>
        <div style={{marginTop:'150px'}} >
          <Table  striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Project ID</th>
                <th>Clients</th>
                <th>Nature of the study</th>
                <th>Project</th>
                <th>Date</th>
                <th>Upload as pdf</th>
              </tr>
            </thead>
            <tbody>
              {console.log(MainRef, "yooooo")}
              {MainRef[1] !== undefined ? (
                MainRef[1].map((elements) => {
                  return (
                    <tr>
                      <td>{elements.id}</td>
                      <td>{elements.Clients}</td>
                      <td>{elements.Natureofthestudy}</td>
                      <td>{elements.project}</td>
                      <td>{elements.date}</td>
                      <td>
                        <a href={elements.url}>
                          <i className="fas fa-upload"></i>
                        </a>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <></>
              )}
            </tbody>
          </Table>
 
        </div>
      </div>
     
      </Col>
      </Row>
     
      
      </center>
    </div>
  );
}

MainRef.layout = Ref;
