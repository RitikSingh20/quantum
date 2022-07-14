import React from 'react'
import pngi from "./images/pngi.png"
import "./../App.css"
 
 
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Card,   } from "react-bootstrap";
 

function Home() {
  return (
    <div className="homedivbg"> 
        <Container  style={{backgroundColor:"#DDE8FF"}} >
        <Card     style={{ border: "white", backgroundColor:"#DDE8FF"}}>
          <Row>
            <Col xs={12} md={12} lg={6} xl={6}>
              <Card.Body>
              <Card.Text style={{marginTop: "6rem"}}>
                Ki Name Dhake Bolbo Tomake
                </Card.Text>
                <Card.Title ><h1 className="homeheadline">We Are Consulting For Your </h1>  </Card.Title>
                <Card.Title  ><h1 className="homeheadline2">Business Finances</h1> </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                 
                <Button className="buttonc"  style={{backgroundColor:"#00bfff",border:"#00bfff"}}   ><>Start Now</></Button>

              </Card.Body>
            </Col>
            <Col   xs={12} md={12} lg={6} xl={6}>
              <Card.Img  style={{ marginTop: "3rem" }}   src={pngi} />
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  )
}

export default Home