import React, { useEffect } from "react";
import { Form, Nav, Navbar, NavDropdown, FormControl, Button } from "react-bootstrap";

import styles from"../styles/Main.module.css"

const Main = () => {
  let emptyArr = [
    1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1,
    2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6,
  ];
  // useEffect(() => {

  //     const images  = async()=>{

  //     }
  //     images();
  // })
  
  return (
    <>

      <div>
        {/* See images<img src="https://www.tirthanvalleystay.com/images/photoslider1.jpg" alt="no image loaded"></img> */}
        <ul>
          {emptyArr.map((ele,index) => {
            return (
              <li key={index}>
                <img
                  src="https://www.tirthanvalleystay.com/images/Tree-House/Tree-5.jpg"
                  alt="no image loaded"
                ></img>
                <img
                  src="https://www.tirthanvalleystay.com/images/callout-bg.jpg"
                  alt="no image loaded"
                ></img>
                <img
                  src="https://www.tirthanvalleystay.com/images/photoslider1.jpg"
                  alt="no image loaded"
                ></img>
                <img
                  src="https://www.tirthanvalleystay.com/images/Tree-House/Tree-5.jpg"
                  alt="no image loaded"
                ></img>
                <img
                  src="https://www.tirthanvalleystay.com/images/callout-bg.jpg"
                  alt="no image loaded"
                ></img>
                <img
                  src="https://www.tirthanvalleystay.com/images/photoslider1.jpg"
                  alt="no image loaded"
                ></img>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Main;
