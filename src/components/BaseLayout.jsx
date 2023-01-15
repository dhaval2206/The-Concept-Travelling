import React from "react";
import { Constants } from "./Constants";
import Nav from 'react-bootstrap/Nav';
import './base-layout.scss'
import { Container, Image, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const BaseLayout = {
    getNavigationBar : () => {
        return (
        <Navbar fixed="top" key='md' expand={'md'} className="nav-back mb-3">
            <Container fluid>
                <Navbar.Brand href="#home"><Image fluid={false} className="banner-image navbar-spacing" src={Constants.BASE}></Image></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} className="nav-bar-item" label="Expander"/>
                <Navbar.Offcanvas id={`offcanvasNavbar-expand-md`} aria-labelledby={`offcanvasNavbarLabel-expand-md`}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                            <Image fluid={false} className="banner-image" alt="LOGO" src={Constants.BASE}></Image>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end .d-none .d-sm-block flex-grow-1 pe-3 navbar-spacing">
                            <Nav.Link className="nav-bar-item" href="#home">Home</Nav.Link>
                            <Nav.Link className="nav-bar-item" href="#country">
                                <Link to="/country/india">Country</Link>
                            </Nav.Link>
                            <Nav.Link className="nav-bar-item" href="#features">Features</Nav.Link>
                            <Nav.Link className="nav-bar-item" href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        );
    }
}

export default BaseLayout;