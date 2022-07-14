import React from 'react'
 
import qimg1 from "./images/qimg1.jpg"
import gearfill from "./images/icons/gearfill.svg"
import tools from "./images/icons/tools.svg"
import sunglasses from "./images/icons/sunglasses.svg"
import cloudfill from "./images/icons/cloudfill.svg"
 
 
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Card,   } from "react-bootstrap";

function Home2() {
  return (
    <div style={{marginTop:"3rem"}}> 
        <Container   >
        <Card    style={{ border: "white" }}>
          <Row>
            <Col xs={12} md={12} lg={6} xl={6}>
              <Card.Body>
              
                <Card.Title ><h3 className="homeheadline">We Have Many Year Experience in </h3>  </Card.Title>
                <Card.Title  ><h3 className="homeheadline2">Consuntent Business</h3> </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                 
                <Button className="buttonc" style={{backgroundColor:"#00bfff",border:"#00bfff"}}><>Know More</></Button>

              </Card.Body>
            </Col>
            <Col data-aos="fade-right" xs={12} md={12} lg={6} xl={6}>
              <Card.Img  style={{ marginTop: "3rem",borderRadius:"20px" }}   src={qimg1}  height="400" width="100"/>
            </Col>
          </Row>
        </Card>

        {/* 2nd row */}
        
        <div style={{marginTop:"4rem"}}>
        <Row style={{margin:"auto"}}>
        <Col style={{marginTop:"1rem"}}>
        <Card style={{ width: '12rem',border:"none",margin:"auto" }}>
      <Card.Img variant="top" src={gearfill} height="30" width="30"/>
        <Card.Text style={{margin:"auto"}}>
          <p1  >Construction</p1>
        </Card.Text>
        </Card>
        </Col>

        <Col style={{marginTop:"1rem"}}>
        <Card style={{ width: '12rem',border:"none",margin:"auto"}}>
      <Card.Img variant="top" src={cloudfill} height="30" width="30"/>
        <Card.Text style={{margin:"auto"}}>
         DUMMY-LOGO
        </Card.Text>
        </Card>
        </Col>

        <Col style={{marginTop:"1rem"}}>
        <Card style={{ width: '12rem',border:"none",margin:"auto" }}>
      <Card.Img variant="top" src={sunglasses} height="30" width="30"/>
        <Card.Text style={{margin:"auto"}}>
          Random-LOGO
        </Card.Text>
        </Card>
        </Col>

        <Col style={{marginTop:"1rem"}}>
        <Card style={{ width: '12rem',border:"none" ,margin:"auto"}}>
      <Card.Img variant="top" src={tools} height="30" width="30"/>
        <Card.Text style={{margin:"auto"}}>
         Random Brand
        </Card.Text>
        </Card>
        </Col>

        </Row>
        </div>

        {/* 2nd row end */}
         
      </Container>
    </div>
  )
}

export default Home2