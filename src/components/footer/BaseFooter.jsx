import { Col, Image, List, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { CommonUtils } from "../CommonUtils";
import { Constants } from "../Constants";
import { COUNTRY_CONSTANT } from "../CountryConstants";
import './base-footer.scss'
const BaseFooter = () => {

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

    const destinationList = CommonUtils.getKeyValuesFromArrayUnderCaps(COUNTRY_CONSTANT,"DESTINATION");
    const usefulFooterSize = {
        xs:24,
        sm:12,
        md:6,
        lg:3,
        xl:3,
        xxl:3
    }
    const destinationFooterSize = {
        xs:24, 
        sm:12,
        md:18,
        lg:21,
        xl:21,
        xxl:21
    }
    const destinationSize = {
        xs:24, 
        sm:24,
        md:6,
        lg:6,
        xl:4,
        xxl:4
    }
    return (

        <>
        <hr />
        <Image className="footer-image" src={Constants.BASE}></Image>
                <Row>
                    <Col {...usefulFooterSize}>
                    <ul className="">
                    <li className="li-style li-header">USEFUL INFORMATION</li>    
                        { footerArray.col1.map((item,index) => {
                            return (
                                <li className="li-style">
                                    {item.label}
                                </li>
                            )
                        }) }
                        </ul>
                    </Col>
                    <Col {...destinationFooterSize}>
                    <ul>
                        <li className="li-style li-header">DESTINATIONS</li>
                    </ul>
                    <Row className="ul-style">   
                        { destinationList.map((item,index) => {
                                return (
                                    <Col className="li-style" {...destinationSize}>
                                        <Link to={`/country/${item}`}>{item}</Link>
                                    </Col>
                                )
                            }) }
                    </Row> 
                    </Col>
                </Row>
                    
        </>
    )
}
export default BaseFooter;