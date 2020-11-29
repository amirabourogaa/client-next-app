import React, {useState} from "react";
import Link from "next/link";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import "bootswatch/dist/slate/bootstrap.min.css";
import * as FaIcons  from "react-icons/fa";
import TiUploadOutline  from "react-icons";
import {SideNavData} from '../pages/SideNavData.js';
import Table from 'react-bootstrap/Table';
import Footer from "components/Footers/Footer.js";


export default function MainRef() {
 
 
  return (
    <div>
    <IndexNavbar></IndexNavbar>
    <div className="flex flex-wrap">
    <div className="w-full px-4 flex-1">
      <span className="text-sm block my-4 p-3 text-gray-800 rounded border border-solid border-gray-200">
      <img
                          src="https://scontent.ftun4-1.fna.fbcdn.net/v/t1.15752-9/127834716_3838891042802187_4248109063710886219_n.png?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_ohc=L2u9KjFxE0sAX_NEfGW&_nc_oc=AQlvf9ww9AixQ8ZSsN9paroBnVYLfA1C3cbxXGs9keOib9DkdZjgVMKS2WM0wWmgHp8&_nc_ht=scontent.ftun4-1.fna&oh=a871f1c7e476418fba9d69a03d68873b&oe=5FE7186A"
                          alt="..."
                       
                        />
      </span>
    </div>
    <div className="w-full px-4 flex-1">
     
    </div>
  </div>
    <div className="flex flex-wrap">
    <div className="w-full px-4 flex-1">
     
    </div>
    
  </div>
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
    <tr>
      <td>1</td>
      <td>exp</td>
      <td>exp</td>
      <td>exp</td>
      <td>exp</td>
      <td>
          <i className="fas fa-upload"></i>
    </td>
    </tr>
    
  </tbody>
</Table>
      </span>
    </div>
    
  <div >
   
  </div>
  <br/><br/>
  <Footer/>
    </div>
  );
}