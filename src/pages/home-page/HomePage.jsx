import React from "react";
import { Carousel, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { Constants } from "../../components/Constants";
import './home-page.scss'

const HomePage = () => {
    const figureArray = [
        {caption:"Africa",src:Constants.Home.AFRICA},
        {caption:"Asia",src:Constants.Home.ASIA},
        {caption:"Australia",src:Constants.Home.AUSTRALIA},
        {caption:"Central America",src:Constants.Home.CENTRAL_AMERICA},
        {caption:"Europe",src:Constants.Home.EUROPE},
        {caption:"Indian Subcontinent",src:Constants.Home.INDIAN_SUBCONTINENT},
        {caption:"Middle East & North Africa",src:Constants.Home.MIDDLE_EAST_AND_NORTH_AFRICA},
        {caption:"North America",src:Constants.Home.NORTH_AMERICA}
    ];
    const testimonialsArray = [
        {
            src:Constants.BLACK_BACK,
            className:"testimonial-carousel-image",
            captionHeader:"Junaid Movar (M.C.A)",
            captionContent : `Exercitation deserunt nulla laboris consectetur nostrud irure nostrud. Proident sunt consectetur aute exercitation irure. Irure est mollit id irure pariatur eiusmod eiusmod. Non reprehenderit amet consequat incididunt nostrud eu ex irure officia laborum nulla labore minim veniam.`
        },
        {
            src:Constants.BLACK_BACK,
            className:"testimonial-carousel-image",
            captionHeader:"Second slide label",
            captionContent : `Velit commodo ea consequat pariatur occaecat fugiat. Dolore minim voluptate fugiat magna in nostrud tempor reprehenderit id. Est labore amet excepteur ullamco exercitation et sunt Lorem exercitation dolor sint fugiat ipsum. Aliquip reprehenderit mollit dolore ut sit anim ex.`
        },
        {
            src:Constants.BLACK_BACK,
            className:"testimonial-carousel-image",
            captionHeader:"Third slide label",
            captionContent : `Consectetur ullamco nostrud ea tempor aliquip dolore. Non veniam fugiat non officia incididunt consequat officia reprehenderit sit. Deserunt magna amet ut commodo veniam deserunt minim consectetur ex irure ea.`
        }
    ];
    const carouselArray = [
        {
            alt:"First Slide",
            className:"d-block w-100 custom-carousel",
            src:Constants.COR1,
            captionHeader:"First slide label",
            captionContent : `Nulla vitae elit libero, a pharetra augue mollis interdum.`
        },
        {
            alt:"Second Slide",
            className:"d-block w-100 custom-carousel",
            src:Constants.COR2,
            captionHeader:"Second slide label",
            captionContent : `Nulla vitae elit libero, a pharetra augue mollis interdum.`
        },
        {
            alt:"Third Slide",
            className:"d-block w-100 custom-carousel",
            src:Constants.COR3,
            captionHeader:"Third slide label",
            captionContent : `Nulla vitae elit libero, a pharetra augue mollis interdum.`
        },
        {
            alt:"Fourth Slide",
            className:"d-block w-100 custom-carousel",
            src:Constants.COR4,
            captionHeader:"Fourth slide label",
            captionContent : `Nulla vitae elit libero, a pharetra augue mollis interdum.`
        }
    ];
    const footerArray = {col1:[
        {link:"#aboutus",label:"About Us"},
        {link:"#offers",label:"Offers"},
        {link:"#certificates",label:"Certificates"},
        {link:"#contactus",label:"Contact Us"},
        {link:"#partners",label:"Partners"},
        {link:"#press",label:"Press"},
        {link:"#termsandconditions",label:"Terms & Conditions"},
        {link:"#privacyandpolicy",label:"Privacy & Policy"},

    ]};
    return (<>
        <Carousel slide={true} fade={true} keyboard={true} touch={true} translate="yes" className="">
            {carouselArray.map((item,index) => {
                    return (
                        <Carousel.Item key={"carousel_item_"+index} className="justify-content-center">
                            <Carousel.Caption key={"carousel_caption_"+index} className="custom-carousel-caption carousel-animation align-self-center">
                                <h3 className="carousel-animation carousel-header stylish-font">{item.captionHeader}</h3>
                                <p className="carousel-animation">{item.captionContent}</p>
                            </Carousel.Caption>
                            <Image key={"carousel_image_"+index} className={item.className} alt={item.alt} src={item.src}  />
                        </Carousel.Item>
                    );
                })}
        </Carousel>
        {/* <!-- CONTENT - START --> */}
        <Container fluid="true">
            <Row>
                <Col>
                    <h3 className="text-center section-header pt-5 pb-5 stylish-font">Why book with The Concept Travelling?</h3>
                </Col>
            </Row>
            <Row className="d-flex justify-content-evenly">
                <Col className="col-section" sm={12} md={6} lg={3} xl={3} xxl={3}>
                    <h3 className="stylish-font section-header pt-1 pb-1">Expertly Crafted</h3>
                    <p className="section-text">
                    By getting to know you and what makes you tick, we fuse our wealth of expertise and a deep understanding of our destinations to create unique day by day itineraries that are built around you. However challenging or unusual the request, at The Pravasi we use our creativity to design unforgettable experiences for our clients.
                    </p>
                </Col>
                <Col className="col-section" sm={12} md={6} lg={3} xl={3} xxl={3}>
                    <h3 className="stylish-font section-header pt-1 pb-1">Knowledge</h3>
                    <p className="section-text">
                    Our Travel Designers spend the year crisscrossing the globe learning about the countries they specialise in and ensuring their product knowledge is second-to-none. Having a deep rooted knowledge of our destinations and by getting to know you, we are able to craft and perfectly tune exceptional holidays around you and your needs.
                    </p>
                </Col>
                <Col className="col-section" sm={12} md={6} lg={3} xl={3} xxl={3}>
                    <h3 className="stylish-font section-header pt-1 pb-1">Peace of Mind</h3>
                    <p className="section-text">
                    Being rest assured that you are staying in the best places for you and not missing out on any special experiences without having to spend huge amounts of time on the internet having to find that out for yourself – and still not being sure! Also the extra reassurance that if anything was to go wrong, we’ve got your back.
                    </p>
                </Col>
            </Row>
            <hr className="section-header mt-5 mb-5" />
            <Row className="even-row mt-5" fluid="true">
                <Col className="mt-5">
                    <h3 className="text-center pt-5 pb-5 stylish-font">Choose your Destinations</h3>
                </Col>
            </Row>
            <Row className="d-flex justify-content-start even-row pb-5">
                        {
                            figureArray.map((item,index)=> {
                                return (
                                    <>
                                        <Col sm={12} md={6} lg={6} xl={3} xxl={3}>
                                            <div className="image-container" title={item.caption}>
                                                <Image key={"figure_image_"+index}
                                                    className="image-gallery"
                                                    width={400}
                                                    height={300}
                                                    src={item.src}
                                                    alt={item.caption}
                                                ></Image> 
                                                <p className="image-caption stylish-font text-center">{item.caption}</p>
                                            </div>
                                        </Col>
                                    </>
                                );
                            })
                        }
                        
            </Row>
            <Row className="d-flex justify-content-evenly">
                <Col className="mt-5">
                        <h3 className="text-center section-header pt-5 pb-5 stylish-font">Testimonials</h3>
                    </Col>
            </Row>
            <Carousel slide={true} indicators={false} fade={true} keyboard={true} controls={false} touch={true} translate="yes" className="testimonial-carousel">
                {testimonialsArray.map((item,index) => {
                    return (
                        <Carousel.Item key={"testimonial_item_"+index} className="justify-content-center testimonial-carousel-item">
                            <Carousel.Caption key={"testimonial_caption_"+index} className="testimonial-carousel-caption carousel-animation align-self-center">
                                <h3 className="carousel-animation">{item.captionContent}</h3>
                                <h5 className="float-right testimonial-carousel-header stylish-font">{item.captionHeader}</h5>
                            </Carousel.Caption>
                            <Image  key={"testimonial_image_"+index} className={item.className} alt={item.alt} src={item.src}  />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
            <Row className="d-flex justify-content-evenly footer-row">
                <Col className="mt-5" sm={12} md={6} lg={6} xl={3} xxl={3}>
                    <h4>USEFUL INFORMATION</h4>
                    <ListGroup className="footer-list">
                        { footerArray.col1.map((item,index) => {
                            return (<ListGroup.Item key={"col1_"+index} className="footer-list-item">{item.label}</ListGroup.Item>)
                        }) }
                    </ListGroup>
                </Col>
                <Col className="mt-5" sm={12} md={6} lg={6} xl={3} xxl={3}>
                    <h4>USEFUL INFORMATION</h4>
                    <ListGroup className="footer-list">
                        { footerArray.col1.map((item,index) => {
                            return (<ListGroup.Item key={"col2_"+index} className="footer-list-item">{item.label}</ListGroup.Item>)
                        }) }
                    </ListGroup>
                </Col>
                <Col className="mt-5" sm={12} md={6} lg={6} xl={3} xxl={3}>
                    <h4>USEFUL INFORMATION</h4>
                    <ListGroup className="footer-list">
                        { footerArray.col1.map((item,index) => {
                            return (<ListGroup.Item key={"col3_"+index} className="footer-list-item">{item.label}</ListGroup.Item>)
                        }) }
                    </ListGroup>
                </Col>
                <Col className="mt-5" sm={12} md={6} lg={6} xl={3} xxl={3}>
                    <h4>USEFUL INFORMATION</h4>
                    <ListGroup className="footer-list">
                        { footerArray.col1.map((item,index) => {
                            return (<ListGroup.Item key={"col4_"+index} className="footer-list-item">{item.label}</ListGroup.Item>)
                        }) }
                    </ListGroup>
                </Col>
                
            </Row>
        </Container>
        {/* <!-- CONTENT - END --> */}
    </>);
}

export default HomePage;