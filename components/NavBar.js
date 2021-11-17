import React from "react";
import {  Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import Link from 'next/link'
import Blog from "./Blog";


const NavBar = () => {
    const style = {
        navbar:{
          "background-color": "limegreen",
        },
        link:{
          "color":"black",
          "font-weight":"bold"
          },
        navbar_btn:{
          "background-color": "orange",
        },
        list:{
          "color":"red !important"
        },
        sticky:{
            "position": "sticky",
            top: 0,
        }
      }
    return (
    <div>
        <Navbar collapseOnSelect expand="lg" style={style.navbar } sticky="bottom" className="navbar" >
        <Navbar.Brand href="#home" style={style.link}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/"  style={style.link}>HOME</Nav.Link>
            <Nav.Link href="#pricing" style={style.link}>ABOUT US</Nav.Link>

            <NavDropdown title={"ACTIVITIES"}  >
                <NavDropdown.Item href="#action/3.1" style={style.list}>Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown title="PLACES TO VISIT" id="collasible-nav-dropdown" style={style.link}>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features" style={style.link}>HOW TO REACH</Nav.Link>
            <Nav.Link href="/blog" style={style.link}>WHERE TO STAY</Nav.Link>
            
            <Link href="/blog">
            <Nav.Link href="/blog" style={style.link}>BLOG</Nav.Link>
            </Link>

            <Link href="/places/[place_name].js">
            <Nav.Link href="/places/[place_name].js" style={style.link}>Places</Nav.Link>
            </Link>

            <Nav.Link href="#pricing"style={style.link}>CONTACT US</Nav.Link>
            </Nav>
            <Nav>
            <Button style={style.navbar_btn}>WEEKEND SPECIAL</Button>
            
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </div>
    );
}

export default NavBar;
