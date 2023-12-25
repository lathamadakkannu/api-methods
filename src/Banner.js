
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Banner(){
  return(
    <div>
       <Container>
        {/* <h2 className='head mt-4 mb-4'></h2> */}

          <Row>
            <Col>
              <p className='para'>A web series is simply a series of web videos, usually in serial form, posted on the Internet, that first appeared in the late 1990s and gained popularity in the early to mid-2000s. 
              In this new digital millennium, a web series can reach a wide international audience just by making a quick and cleverly produced video.</p>
            </Col>

            <Col>
              <img className="img-design" src="image/header.jpg" alt="" style={{ width: '90%', height:"45vh" }}/>
            </Col>

          </Row>

      </Container>
    </div>
  )
}
export default Banner;