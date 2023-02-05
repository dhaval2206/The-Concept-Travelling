import { Card, Carousel, Col, Image, List, Row } from "antd";
import React from "react";
import { Constants, COUNTRY_IMAGE_MAP } from "../../components/Constants";
import './home-page.scss'

const HomePage = () => {
    const figureArray = [
        {caption:"Africa",src:COUNTRY_IMAGE_MAP.AFRICA},
        {caption:"Asia",src:COUNTRY_IMAGE_MAP.ASIA},
        {caption:"Australia",src:COUNTRY_IMAGE_MAP.AUSTRALIA},
        {caption:"Central America",src:COUNTRY_IMAGE_MAP.CENTRAL_AMERICA},
        {caption:"Europe",src:COUNTRY_IMAGE_MAP.EUROPE},
        {caption:"Indian Subcontinent",src:COUNTRY_IMAGE_MAP.INDIAN_SUBCONTINENT},
        {caption:"Middle East & North Africa",src:COUNTRY_IMAGE_MAP.MIDDLE_EAST_AND_NORTH_AFRICA},
        {caption:"North America",src:COUNTRY_IMAGE_MAP.NORTH_AMERICA}
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
            className:"d-block custom-carousel",
            src:Constants.COR1,
            captionHeader:"First slide label",
            captionContent : `Nulla vitae elit libero, a pharetra augue mollis interdum.`
        },
        {
            alt:"Second Slide",
            className:"d-block custom-carousel",
            src:Constants.COR2,
            captionHeader:"Second slide label",
            captionContent : `Nulla vitae elit libero, a pharetra augue mollis interdum.`
        },
        {
            alt:"Third Slide",
            className:"d-block custom-carousel",
            src:Constants.COR3,
            captionHeader:"Third slide label",
            captionContent : `Nulla vitae elit libero, a pharetra augue mollis interdum.`
        },
        {
            alt:"Fourth Slide",
            className:"d-block custom-carousel",
            src:Constants.COR4,
            captionHeader:"Fourth slide label",
            captionContent : `Nulla vitae elit libero, a pharetra augue mollis interdum.`
        }
    ];
   

    const sectionScreenSizes = { 
        sm:24,
        md:24,
        lg:6,
        xl:6,
        xxl:6
    }
    const figureArraySizes = {
        sm:24,
        md:12,
        lg:12,
        xl:6,
        xxl:6
    }
    return (<>
        <Carousel slide={true} fade={true} autoplay={true} keyboard={true} touch={true} translate="yes" className="base-carousel-style">
            {carouselArray.map((item,index) => {
                    return (
                        <div key={"carousel_item_"+index} style={{margin:0,padding:0,height:`100vh`}}>
                            <div style={{background:`url('${item.src}') no-repeat center center fixed`}} className="carousel-outer-container">
                                <div className="carousel-content">
                                    <p className="carousel-animation carousel-header stylish-font">{item.captionHeader}</p>
                                    <p className="carousel-animation">{item.captionContent}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </Carousel>
        
        {/* <!-- CONTENT - START --> */}
        <Card className="card-style" fluid>
            <Row className="flex-center">
                <Col>
                    <h3 className="text-center section-header pt-5 pb-5 stylish-font">Why book with The Concept Travelling?</h3>
                </Col>
            </Row>
            <Row className="flex-center">
                <Col className="col-section" {...sectionScreenSizes}>
                    <h3 className="stylish-font section-header pt-1 pb-1">Expertly Crafted</h3>
                    <p className="section-text">
                    By getting to know you and what makes you tick, we fuse our wealth of expertise and a deep understanding of our destinations to create unique day by day itineraries that are built around you. However challenging or unusual the request, at The Pravasi we use our creativity to design unforgettable experiences for our clients.
                    </p>
                </Col>
                <Col className="col-section"  {...sectionScreenSizes}>
                    <h3 className="stylish-font section-header pt-1 pb-1">Knowledge</h3>
                    <p className="section-text">
                    Our Travel Designers spend the year crisscrossing the globe learning about the countries they specialise in and ensuring their product knowledge is second-to-none. Having a deep rooted knowledge of our destinations and by getting to know you, we are able to craft and perfectly tune exceptional holidays around you and your needs.
                    </p>
                </Col>
                <Col className="col-section"  {...sectionScreenSizes}>
                    <h3 className="stylish-font section-header pt-1 pb-1">Peace of Mind</h3>
                    <p className="section-text">
                    Being rest assured that you are staying in the best places for you and not missing out on any special experiences without having to spend huge amounts of time on the internet having to find that out for yourself – and still not being sure! Also the extra reassurance that if anything was to go wrong, we’ve got your back.
                    </p>
                </Col>
            </Row>
            <hr className="section-header mt-5 mb-5" />
            <Row className="even-row mt-5 flex-center" fluid="true">
                <Col className="mt-5">
                    <h3 className="text-center pt-5 pb-5 stylish-font">Choose your Destinations</h3>
                </Col>
            </Row>
            <Row className="d-flex even-row flex-center">
                        {
                            figureArray.map((item,index)=> {
                                return (
                                    <>
                                        <Col {...figureArraySizes}>
                                            <div className="image-container" title={item.caption}>
                                                <Image key={"figure_image_"+index}
                                                    className="image-gallery"
                                                    preview={false}
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
            <Row className="d-flex justify-content-evenly flex-center">
                <Col className="mt-5">
                        <h3 className="text-center section-header pt-5 pb-5 stylish-font">Testimonials</h3>
                    </Col>
            </Row>
            <Carousel slide={true} indicators={false} fade={true} keyboard={true} controls={false} touch={true} translate="yes" className="testimonial-carousel">
                {testimonialsArray.map((item,index) => {
                    return (
                        <div key={"testimonial_item_"+index} className="justify-content-center testimonial-carousel-item flex-center">
                            <div key={"testimonial_caption_"+index} className="testimonial-carousel-caption carousel-animation align-self-center">
                                <h3 className="carousel-animation">{item.captionContent}
                                {}
                                
                                </h3>
                                <h5 className="float-right testimonial-carousel-header stylish-font">{item.captionHeader}</h5>
                            </div>
                            {/* <Image  key={"testimonial_image_"+index} className={item.className} alt={item.alt} src={item.src}  /> */}
                        </div>
                    );
                })}
            </Carousel>
        </Card>
        {/* <!-- CONTENT - END --> */}
    </>);
}

export default HomePage;