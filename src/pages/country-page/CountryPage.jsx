import React, { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams,useNavigate } from "react-router";
import { CommonUtils } from "../../components/CommonUtils";
import { COUNTRY_IMAGE_MAP } from "../../components/Constants";
import { COUNTRY_CONSTANT } from "../../components/CountryConstants";
import './country-page.scss'

// const countryList = [
//     "africa","south-africa","seychelles","rwanda","namibia","mozambique","mauritius","malawi","kenya","zimbabwe","zambia","uganda",
//     "ethiopia","tanzania","botswana","asia","singapore","the-philippines","myanmar","mongolia","malaysian-borneo","malaysia","laos",
//     "japan","indonesia","vietnam","thailand","cambodia","china","australasia","papua-new-guinea","new-zealand","fiji","australia",
//     "french-polynesian","polar-regions","the-arctic","antarctica","north-america","united-states","canada","mexico","alaska",
//     "central-america","cuba","costa-rica","south-america","peru","ecuador-&-the-galapagos","colombia","chile","brazil","bolivia",
//     "argentina","europe","monaco","germany","italy","united-kingdom","portugal","spain","russia","montenegro","netherland","norway",
//     "iceland","greece","france","finland","switzerland","sweden","cyprus","croatia","ireland","indian-subcontinent","the-maldives",
//     "sri-lanka","india","bhutan","nepal","middle-east-&-north-africa","turkey","oman","jordan","iran","israel","united-arab-emirates",
//     "egypt","morocco"
// ];
const destinationList = CommonUtils.getKeyValuesFromArrayUnderCaps(COUNTRY_CONSTANT,"DESTINATION");
const CountryPage = () => {
    const params = useParams();
    const navigator = useNavigate();
    const fetchCountry = (searchCountry) => {
        if(!searchCountry) {
            return "";
        }
        return destinationList.find((item) => (item === searchCountry.trim().toUpperCase().replaceAll(" ","-"))) ? 
        destinationList.find((item) => (item === searchCountry.trim().toUpperCase().replaceAll(" ","-"))).toUpperCase() : "";
    }
    useEffect(() => {
        if(params && params.countryName) {
            if(!fetchCountry(params.countryName)) {
                navigator("/home");
            } 
        }
    })
    
    return (
    <>
        <Container fluid="true" className="country-image-container">
            <Image className="country-back-image" fluid="true" src={COUNTRY_IMAGE_MAP[fetchCountry(params.countryName) ? fetchCountry(params.countryName).toUpperCase() : ""] ?? COUNTRY_IMAGE_MAP.ASIA}>
            </Image>
            <h2 className="country-image-caption stylish-font">{fetchCountry(params.countryName)}</h2>
        </Container>
        <Container fluid="true">
            <Row className="d-flex justify-content-evenly">
                <Col className="col-section" sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <div className="section-text destination-text">
                    { CommonUtils.searchKeyValuesFromArrayUnderCaps(COUNTRY_CONSTANT,"DESTINATION",fetchCountry(params.countryName)).DESCRIPTION ? CommonUtils.searchKeyValuesFromArrayUnderCaps(COUNTRY_CONSTANT,"DESTINATION",fetchCountry(params.countryName)).DESCRIPTION.split("\n").map(item => (
                        item.trim().length>0 ?<h6><span className="destination-line">{item}</span></h6>:""
                    )
                        ) : "" }
                    </div>
                </Col>
            </Row>
        </Container>
    </>);
}

export default CountryPage;