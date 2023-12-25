
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// import React, {useEffect,useState} from 'react'

// function CardSec(){
//     const[result,setResult]=useState([])

//   useEffect(()=>{
//     fetch("https://api.tvmaze.com/shows/1/episodes")
//     .then((res)=>{
//       return res.json()
//     })

//     .then((data)=>setResult(data))
    
//   },[])
//   //.catch((err)=>console.log(err);)
//     return(
//         <div> 
             

//       <Container className='container '> 
//       <h2 className='head mt-4 mb-4'>Web Series List</h2>
//         <Row className='row row-cols-lg-3'>
//             {
//             result.map((photo)=>(

//                 <Col>
//                     <Card style={{ width: '18rem' }}>
//                     <Card.Img variant="top" src={photo.image.medium} />
//                     <Card.Body>
//                         <Card.Title className='title'>Name: {photo.name}</Card.Title>
//                         <Card.Text> 
//                             <p className='title'>Id: {photo.id}</p>
//                             <p className='title'>Type: {photo.type}</p>
//                             <p className='title'>Rating: {photo.rating.average}</p>
//                             <p className='title'>Summary: {photo.summary}</p>
//                         </Card.Text>
//                         <Button variant="primary">Go somewhere</Button>
//                     </Card.Body>
//                     </Card>

//                 </Col>
        
//       ))
//      }
     
//      </Row>
//       </Container>
//     </div>
    
//   )
           
// }
// export default CardSec;