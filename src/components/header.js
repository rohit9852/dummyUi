import React, { useEffect } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import './header.css';

function header() {
   
    return (
        <div className='r'>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* <LinkContainer to="/"> */}
                            {/* <Nav.Link>Dashboard</Nav.Link> */}
                        {/* </LinkContainer> */}
                    <Nav className="mr-auto">
                        <LinkContainer to="/instructor">
                            <Nav.Link>Instructor</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/batch">
                            <Nav.Link>batchs</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/trail-classes">
                            <Nav.Link>trails</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/inventory">
                            <Nav.Link>inventory</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div> 
    )
}

export default header
