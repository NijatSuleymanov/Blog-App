import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const  Header =()=> {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Link to="/" class="text-decoration-none" ><Navbar.Brand className="text-warning ">BlogApp</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto ">
          <Link className='mx-5 text-warning text-decoration-none' to="/">Home</Link>
          <Link className='text-warning text-decoration-none' to="/blogs">Blogs</Link>
          </Nav>
          <div className="d-flex">
            <Link to='/login'><Button >Login</Button></Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;