import React from "react";
import { useState, useEffect } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import "bootswatch/dist/slate/bootstrap.min.css";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Footer from "components/Footers/Footer.js";
import { Col, Row } from "reactstrap";

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
          <span className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">
            <img
              src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.15752-9/127834716_3838891042802187_4248109063710886219_n.png?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_ohc=L2u9KjFxE0sAX_NEfGW&_nc_oc=AQlvf9ww9AixQ8ZSsN9paroBnVYLfA1C3cbxXGs9keOib9DkdZjgVMKS2WM0wWmgHp8&_nc_ht=scontent.ftun4-1.fna&oh=a871f1c7e476418fba9d69a03d68873b&oe=5FE7186A"
              alt="..."
            />
          </span>
        </div>
        <div className="w-full px-4 flex-1"></div>
      </div>
      </Col>
      <Col>
      <div className="flex flex-wrap">
        <div ></div>
      </div>
      <div className="flex flex-wrap">
        <div >
          <span className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">
            <img
              src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.15752-9/127909972_395707455206280_6747021947874147994_n.jpg?_nc_cat=107&ccb=2&_nc_sid=ae9488&_nc_ohc=eSP5se3ZoEwAX-DI4Zj&_nc_oc=AQkPbvD0AYpYYbzzhfzC9e0pZe29-HOxOG0uQUDWQedpvVHBbH93cFAkBh2YzSne5LQ&_nc_ht=scontent.ftun4-1.fna&oh=0eb41941b819cae8390a1cc65541582f&oe=5FF1BEE6"
              alt="..."
            />
          </span>
        </div>
        <div className="w-full px-4 flex-1"></div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full px-4 flex-1"></div>
      </div>
      </Col>
      </Row>
      <div className="w-8/12 px-4">
        <span className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">
        
          <Table striped bordered hover variant="dark">
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
        </span>
      </div>

      <div></div>
      <br />
      <br />
      <Footer />
      </center>
    </div>
  );
}
