import React, { useState } from "react";
import { Constants } from "./Constants";
import Nav from 'react-bootstrap/Nav';
import './base-layout.scss'
import { Button, Container, Image, Navbar, Offcanvas, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CommonUtils } from "./CommonUtils";
import { COUNTRY_CONSTANT } from "./CountryConstants";

function LinkWithTooltip({ id, children, href, tooltip }) {
    const [showTooltip,setShowTooltip] = useState(false);
    const toggleToolTip = () => {
        setShowTooltip(!showTooltip);
    }
    return (
      <OverlayTrigger
        overlay={<Tooltip positionTop="200px" id={id}>{tooltip}</Tooltip>}
        placement="bottom"
        show={showTooltip}
      >
        <a href={href} onClick={toggleToolTip}>{children}</a>
      </OverlayTrigger>
    );
  }
const destinationList = CommonUtils.getKeyValuesFromArrayUnderCaps(COUNTRY_CONSTANT,"DESTINATION");
const BaseNavigationBar = () => {
    const [showContent,setShowContent] = useState("hide-content");
    const toggleAccordion = (e) => {
        setShowContent(showContent==="show-content"?"hide-content":"show-content");
    }
    const getCountrySpan = () => {
        return (<Container>
            
        </Container>);
    }
    return (
        <>
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
                                <Nav.Link className="nav-bar-item" href="#/home">Home</Nav.Link>
                                <Nav.Link className="nav-bar-item" onClick={toggleAccordion}> <>
                                <LinkWithTooltip tooltip={getCountrySpan()} href="#" id="tooltip-1">
                                    Junaid Movar 
                                    </LinkWithTooltip>
                                </>
                                </Nav.Link>
                                <Nav.Link className="nav-bar-item" href="#features">Features</Nav.Link>
                                <Nav.Link className="nav-bar-item" href="#pricing">Pricing</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>

            </Navbar>
        </>
    );
}

export default BaseNavigationBar;