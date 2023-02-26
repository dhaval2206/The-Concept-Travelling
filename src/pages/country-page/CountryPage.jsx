import { Card, Col, Row } from "antd";
import React, { useEffect } from "react";
import { useParams,useNavigate } from "react-router";
import { CommonUtils } from "../../components/CommonUtils";
import { COUNTRY_IMAGE_MAP } from "../../components/Constants";
import { COUNTRY_CONSTANT } from "../../components/CountryConstants";
import './country-page.scss'

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
    const imageSrc = COUNTRY_IMAGE_MAP[fetchCountry(params.countryName) ? fetchCountry(params.countryName).toUpperCase() : ""] ?? COUNTRY_IMAGE_MAP.ASIA
    
    return (
    <>
        <div className="cover-image" style={{background:`url('${imageSrc}') no-repeat center center fixed`}}>
        </div>
        <Card className="card-style flex-center">
        <Row>
            <Col className="flex-center" xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <h1 className="destination-header stylish-font">{fetchCountry(params.countryName)}</h1>
            </Col>
        </Row>
            <Row>
                <Col className="" xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <div className="destination-text">
                    { CommonUtils.searchKeyValuesFromArrayUnderCaps(COUNTRY_CONSTANT,"DESTINATION",fetchCountry(params.countryName)).DESCRIPTION ? CommonUtils.searchKeyValuesFromArrayUnderCaps(COUNTRY_CONSTANT,"DESTINATION",fetchCountry(params.countryName)).DESCRIPTION.split("\n").map(item => (
                        item.trim().length>0 ?<h6><span className="destination-line">{item}</span></h6>:""
                    )
                        ) : "" }
                    </div>
                </Col>
            </Row>
        </Card>
    </>);
}

export default CountryPage;