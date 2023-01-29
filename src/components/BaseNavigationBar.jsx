import React, { useState } from "react";
import { Constants } from "./Constants";
import './base-layout.scss'
import { CommonUtils } from "./CommonUtils";
import { COUNTRY_CONSTANT } from "./CountryConstants";
import { Card, Image, Menu, Tooltip } from "antd";

function LinkWithTooltip({ id, children, href, tooltip }) {
    const [showTooltip,setShowTooltip] = useState(false);
    const toggleToolTip = () => {
        setShowTooltip(!showTooltip);
    }
    return (
      <Card
        overlay={<Tooltip positionTop="200px" id={id}>{tooltip}</Tooltip>}
        placement="bottom"
        show={showTooltip}
      >
        <a href={href} onClick={toggleToolTip}>{children}</a>
      </Card>
    );
  }
const destinationList = CommonUtils.getKeyValuesFromArrayUnderCaps(COUNTRY_CONSTANT,"DESTINATION");
const BaseNavigationBar = () => {
    const [showContent,setShowContent] = useState("hide-content");
    const toggleAccordion = (e) => {
        setShowContent(showContent==="show-content"?"hide-content":"show-content");
    }
    const getCountrySpan = () => {
        return (<Card>
            
        </Card>);
    }

    // useEffect(() => {
    //     $(document).ready(function(){
    //         $(".nav-back").css("background" , "rgba(15,15,15,0.7)");
    //         $(window).scroll(function(){
    //             var scroll = $(window).scrollTop();
    //             if (scroll <= 1000) {
    //                 $(".nav-back").css("background" , "rgba(15,15,15,"+((scroll/1000)+0.7)+")");
    //             } else {
    //                 $(".nav-back").css("background" , "rgba(15,15,15,"+1+")");
    //             }
    //         })
    //     })
    // }, [])

    const getStartNavSection = () => {

    
    }
    const getEndNavSection = () => {

    }
    const getNavItem = () => {

    }

    const getDestinationNav = () => {
        let outputVar = ``;
        for(let i=0;i<7;i++) {
            outputVar += `
            <div class="col-sm-12 col-lg-4 float-start mb-4">
                                    <h6 class="font-weight-bold text-uppercase">
                    </h6>
                    <ul class="list-unstyled">`
           for(let j=0;j<14;j++) {
            outputVar +=  `<li class="nav-item"><a href="#/country/`+destinationList[i+j]+`"
                                    class="nav-link nav-bar-item text-small pb-0">` + destinationList[i+j] +  `</a>
                            </li>`
           }     
           outputVar += `</ul></div>`
        }
        return (<> <div className="pb-4" dangerouslySetInnerHTML={{__html:outputVar}}></div> </>);
    }
    
    return (
        <>
            {/* <Navbar fixed="top" key='md' expand={'md'} className="nav-back mb-3">
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

            </Navbar> */}
    
        <Menu className="navbar navbar-expand-lg fixed-top nav-back nav-back py-3 shadow-sm">
            <div className="container-fluid">
                <a href="#" className="navbar-brand font-weight-bold d-block"><Image fluid={"false"} className="banner-image" src={Constants.BASE}></Image></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarSupportedContent" className="collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto">
                    <li className="nav-item"><a href="#/home"
                                className="nav-link nav-bar-item  font-weight-bold text-uppercase">Home</a>
                        </li>
                        <li className="nav-item nav-bar-item dropdown megamenu"><a id="megamneu" href="#"
                                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                                className="nav-link nav-bar-item  dropdown-toggle font-weight-bold text-uppercase dropdown-toggle">Destinations</a>
                            <div aria-labelledby="dropdownMenuButton1"
                                className="dropdown-menu no-back border-0 p-0 m-0">
                                <div className="container mega-menu-container nav-back custom-nav-scroll">
                                    <div className="row rounded-0 m-0 shadow-sm">
                                    <div className="col-lg-12 col-xl-12">
                                            {/* <div className="row"> */}
                                                { getDestinationNav()}
                                            {/* </div> */}
                                    </div>      
                                    </div>
                                </div>
                            </div>
                        </li>
                       
                        {/* <li className="nav-item"><a href=""
                                className="nav-link nav-bar-item  font-weight-bold text-uppercase">Services</a>
                        </li>
                        <li className="nav-item"><a href=""
                                className="nav-link nav-bar-item  font-weight-bold text-uppercase">Contact</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </Menu>
       
        </>
    );
}

export default BaseNavigationBar;