/* eslint-disable react/jsx-no-undef */
import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">User Registration</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/login">Home</Nav.Link>
                        {/* <Nav.Link href="#features">Features</Nav.Link> */}
                        {/* <Nav.Link href="#pricing"></Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}
export default Header