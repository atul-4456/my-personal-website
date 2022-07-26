import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


const Menu=()=> {
  return (

   <div className='mb-5'> 
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="/my-personal-website/home" as={Link}>My Personal Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/my-personal-website/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/my-personal-website/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/my-personal-website/user">User</Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item target="_blank" href='https://www.youtube.com/watch?v=3AtDnEC4zak'>Action</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.youtube.com/watch?v=RgKAFK5djSk">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.youtube.com/watch?v=FM7MFYoylVs">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="https://www.youtube.com/watch?v=a4pi2zKbf8Q">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
   </div>  

   

  );
}

export default Menu;