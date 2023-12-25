import axios from 'axios';

//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, {useEffect,useState} from 'react'

function CardAxios(){

    const[value,setValue]=useState([])

  useEffect(()=>{
    axios.get("https://api.tvmaze.com/shows/1/episodes")
    .then((res)=>{

    setValue(res.data)
    console.log(res.data);
    })
    
  },[])

  //.catch((err)=>console.log(err);)

    return(
        <div> 
             
      <Container className='container '> 
      <h2 className='head mt-4 mb-4'><span>M</span>ovies <span>L</span>ist</h2>
        <Row className='row row-cols-lg-3'>
            {
            value.map((ans)=>(

                <Col className='col p-4'>

                    <Card className='card' style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={ans.image.medium} />

                      <Card.Body>
                          <Card.Title className='title'>Movie Name: {ans.name}</Card.Title>
                          <Card.Text> 
                              <p className='title'>Id: {ans.id}</p>
                              <p className='title'>Season: {ans.season}</p>
                              <p className='title'>Rating: {ans.rating.average}</p>
                              <p className='title'>Airdate: {ans.airdate}</p>
                              <p className='title'>Airtime: {ans.airtime}</p>
                              {/* <p className='title'>Summary: {ans.summary}</p> */}
                          </Card.Text>
                          {/* <Button variant="primary">Go somewhere</Button> */}
                      </Card.Body>

                    </Card>

                </Col>
        
                ))
              }
              
        </Row>
      </Container>
    </div>
    
  )
     
    
}
export default CardAxios;