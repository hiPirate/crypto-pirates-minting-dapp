import React from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

const NavBar= () =>{
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">The Crypto Pirates</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Mint</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}
export default NavBar;
