 
import React from 'react'
import { Container, Row, Col, Card, Button  } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import loudspeaker from './images/loudspeaker.png'
import money from './images/money.png'
import wallet from './images/wallet.png'

import "./../App.css"
function Services() {
  return (
    <div style={{marginTop:"5rem",background:"#F0FFFF"}}> 
     
      <div style={{height:"60px"}}></div>
      <div  ><h1 style={{ textAlign:"center"}}>Our Services</h1></div>
      
       <div style={{marginTop:"4rem"}}> <div style={{margin:"auto",textAlign:"center"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum <br/> Lorem Ipsum is simply dummy text </div></div>

      <Container   >
        

        {/* 2nd row */}
        
        <div style={{marginTop:"4rem"}}>
        <Row style={{margin:"auto"}}>
        <Col xs={12} md={12} lg={4} xl={4} style={{marginTop:"2.5rem"}}>
        <Card className="box" style={{ maxWidth: '22rem' ,margin:"auto" }}>
      <Card.Img src={wallet}  style={{maxHeight:"3rem",maxWidth:"3rem",margin:"auto",background:"white",borderRadius:"100px",marginTop:"-1.5rem",borderColor:"grey"}}   />
      <Card.Body style={{padding:"2rem"}}>
        <Card.Text style={{margin:"auto",textAlign:"center"}}>
          <h5 ><b>Financial Consulting</b></h5>
        </Card.Text>
        <Card.Text style={{margin:"auto",textAlign:"center"}}>
          <p1 > Lorem Ipsum has been the industry's standard dummy text ever since the 1500s era </p1>
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col xs={12} md={12} lg={4} xl={4}  style={{marginTop:"2.5rem"}}>
        <Card className="box" style={{ maxWidth: '22rem', margin:"auto"}}>
      <Card.Img src={loudspeaker}  style={{maxHeight:"3rem",maxWidth:"3rem",margin:"auto",background:"white",borderRadius:"100px",marginTop:"-1.5rem",borderColor:"grey"}}    />
      <Card.Body style={{padding:"2rem"}}>
        <Card.Text style={{margin:"auto",textAlign:"center"}}>
        <h5 ><b>Content Marketing</b></h5>
        </Card.Text>
        <Card.Text style={{margin:"auto",textAlign:"center"}}>
          <p1 > Lorem Ipsum has been the industry's standard dummy text ever since the 1500s era </p1>
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Col xs={12} md={12} lg={4} xl={4}  style={{marginTop:"2.5rem"}}>
        <Card className='box' style={{ maxWidth: '22rem',margin:"auto" }}>
      <Card.Img   src={money}  style={{maxHeight:"3rem",maxWidth:"3rem",margin:"auto",background:"white",borderRadius:"100px",marginTop:"-1.5rem",borderColor:"grey"}}/>
        <Card.Body style={{padding:"2rem"}}>
        <Card.Text style={{margin:"auto",textAlign:"center"}}>
        <h5 ><b>Finance Advice</b></h5>
        </Card.Text>
        <Card.Text style={{margin:"auto",textAlign:"center" }}>
          <p1 > Lorem Ipsum has been the industry's standard dummy text ever since  packages </p1>
        </Card.Text>
        </Card.Body>
        </Card>
        </Col>

        <Row style={{justifyContent:"center",marginTop:"2rem"}}>
        <Button className="buttonc" style={{maxWidth:"10rem",textAlign:"center",backgroundColor:"#00bfff",border:"#00bfff"}}><>All Services</></Button>
        </Row>

        </Row>
        </div>

        {/* 2nd row end */}
         
      </Container>
    
      {/* last div */}

      <div style={{marginTop:"3rem"}} className="itbg">
          <Container>
              <Row >
                 

                  <Col  xs={12} md={12} lg={6} xl={6}  style={{marginTop:"2rem",marginBottom:"1rem"}} >
                       
                   
                   <div style={{ maxWidth:"300px",display:"flex",alignItems:"flex-end"}}><h4 style={{color:"white"}}>Subscribe Our Newsletter<br/> For More Updates</h4></div> 
                   <div style={{ maxWidth:"450px",display:"flex",alignC:"flex-end"}}><p style={{color:"white"}}>Lorem Ipsum has been the industry's standard   the packages <br/> and loreum ipusam </p></div> 
              
                  </Col>
                 
                  

                 
                  <Col xs={12} md={12} lg={6} xl={6} style={{marginTop:"2rem",marginBottom:"1rem"}} >
                  <div>    <Form.Control type="email" placeholder="Enter email" style={{maxWidth:"20rem",background:"transparent"}}/></div>
                  <div style={{marginTop:"1rem"}}> <Button className="buttonc" style={{maxWidth:"7rem",textAlign:"center",backgroundColor:"#00bfff",border:" #00bfff"}}><>Subscribe</></Button></div>
                  </Col>
                
              </Row>
          </Container>
      </div>

      
    </div>
  )
}

export default Services