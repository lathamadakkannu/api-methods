import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Collection(){
  return(
    <div>
      <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand href="#"><h2 className='nav-title'><span>M</span>OVIES</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home"><p className='nav-head'>Home</p></Nav.Link>
            <Nav.Link href="#about"><p className='nav-head'>About</p></Nav.Link>
            <Nav.Link href="#card"><p className='nav-head'>Card</p></Nav.Link>

            <NavDropdown title="Dropdown" id="nav-dropdown">
                  <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#" disabled>
             <p className='nav-head'>Link</p>
            </Nav.Link>

          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
export default Collection;
