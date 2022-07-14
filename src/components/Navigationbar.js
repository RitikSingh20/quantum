import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'
import {Row,Col} from "react-bootstrap"
import fb from "./images/icons/fb.png" 
import  tw from "./images/icons/tw.png" 
import  ld from "./images/icons/ld.png" 


function Navigationbar() {
  return (
    <div> 
        <nav style={{backgroundColor:"#00bfff",height:"25px"}} >
           <Row>
           

           
           
         

            {/* <Col className='col-sm-2'></Col>
            <Col className='col-sm-1'><img src={fb}></img></Col>
            <Col className='col-sm-1'><img src={tw}></img></Col>
            <Col className='col-sm-1'><img src={ld}></img></Col> */}
         
             
            
             
          </Row>
          </nav>

        <Navbar   collapseOnSelect expand="lg" bg="smokewhite" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><h5 className="linkText">Bisnes</h5></Navbar.Brand>
  <Navbar.Toggle style={{background: "#00bfff"}} aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse style={{color: "black"}} id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
      <Nav.Link   href="#home"><h6 className="linkText">Home</h6></Nav.Link>
      <Nav.Link    href="#feature"> <h6 className="linkText">About </h6> </Nav.Link>
      <Nav.Link   href="#product"><h6 className="linkText">Project </h6></Nav.Link>
      <Nav.Link    href="#testimonial"> <h6 className="linkText"> Blog</h6></Nav.Link>
      <Nav.Link    href="#contact"> <h6 className="linkText"> Contact Us</h6></Nav.Link>
       
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

      
       
    </div>
  )
}

export default Navigationbar