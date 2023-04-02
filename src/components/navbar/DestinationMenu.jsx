import {  Col,  Row } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CommonUtils } from "../CommonUtils";
import { COUNTRY_CONSTANT } from "../CountryConstants";
import './destination-menu.scss';

const DestinationMenu = () => {
    const [destinationList, setDestinationList] = useState([]);
    const sectionSize = {
        xs:24, 
        sm:24,
        md:12,  
        lg:12,
        xl:12,
        xxl:12
    }
    useEffect(() => {
        setDestinationList(CommonUtils.getKeyValuesFromArrayUnderCaps(COUNTRY_CONSTANT,"DESTINATION"));
    }, [])

    return <>
            <Row gutter={sectionSize}>
                <Col  className="head-col">
                    <Row className="dest-row">
                        <Col className="li-header dest-col"> {COUNTRY_CONSTANT[0].DESTINATION}</Col>
                    </Row>
                    {COUNTRY_CONSTANT[0].CHILDREN.map(item => {
                        return (<Row className="dest-row">
                            <Col className="dest-col"><Link className="dest-col" to={`/country/${item.DESTINATION}`}>{item.DESTINATION}</Link></Col>
                        </Row>)     
                    })}
                </Col>
                <Col className="head-col">
                    <Row className="dest-row">
                        <Col className="li-header dest-col"> {COUNTRY_CONSTANT[1].DESTINATION}</Col>
                    </Row>
                    {COUNTRY_CONSTANT[1].CHILDREN.map(item => {
                        return (<Row className="dest-row">
                            <Col ><Link className="dest-col" to={`/country/${item.DESTINATION}`}>{item.DESTINATION}</Link></Col>
                        </Row>)     
                    })}
                </Col>
                <Col className="head-col">
                    <Row className="dest-row">
                        <Col className="li-header dest-col"> {COUNTRY_CONSTANT[2].DESTINATION}</Col>
                    </Row>
                    {COUNTRY_CONSTANT[2].CHILDREN.map(item => {
                        return (<Row className="dest-row">
                            <Col ><Link className="dest-col" to={`/country/${item.DESTINATION}`}>{item.DESTINATION}</Link></Col>
                        </Row>)     
                    })}
                    <Row className="dest-row">
                        <Col className="li-header dest-col"> {COUNTRY_CONSTANT[6].DESTINATION}</Col>
                    </Row>
                    {COUNTRY_CONSTANT[6].CHILDREN.map(item => {
                        return (<Row className="dest-row">
                            <Col ><Link className="dest-col" to={`/country/${item.DESTINATION}`}>{item.DESTINATION}</Link></Col>
                        </Row>)     
                    })}
                </Col>
                <Col className="head-col">
                    <Row className="dest-row">
                        <Col className="li-header dest-col"> {COUNTRY_CONSTANT[3].DESTINATION}</Col>
                    </Row>
                    {COUNTRY_CONSTANT[3].CHILDREN.map(item => {
                        return (<Row className="dest-row">
                            <Col ><Link className="dest-col" to={`/country/${item.DESTINATION}`}>{item.DESTINATION}</Link></Col>
                        </Row>)     
                    })}
                    
                </Col>
                <Col className="head-col">
                    <Row className="dest-row">
                        <Col className="li-header dest-col"> {COUNTRY_CONSTANT[4].DESTINATION}</Col>
                    </Row>
                    {COUNTRY_CONSTANT[4].CHILDREN.map(item => {
                        return (<Row className="dest-row">
                            <Col ><Link className="dest-col" to={`/country/${item.DESTINATION}`}>{item.DESTINATION}</Link></Col>
                        </Row>)     
                    })}
                </Col>
                <Col className="head-col">
                    <Row className="dest-row">
                        <Col className="li-header dest-col"> {COUNTRY_CONSTANT[5].DESTINATION}</Col>
                    </Row>
                    {COUNTRY_CONSTANT[5].CHILDREN.map(item => {
                        return (<Row className="dest-row">
                            <Col ><Link className="dest-col" to={`/country/${item.DESTINATION}`}>{item.DESTINATION}</Link></Col>
                        </Row>)     
                    })}
                </Col>
                <Col className="head-col">
                    <Row className="dest-row">
                        <Col className="li-header dest-col"> {COUNTRY_CONSTANT[7].DESTINATION}</Col>
                    </Row>
                    {COUNTRY_CONSTANT[7].CHILDREN.map(item => {
                        return (<Row className="dest-row">
                            <Col ><Link className="dest-col" to={`/country/${item.DESTINATION}`}>{item.DESTINATION}</Link></Col>
                        </Row>)     
                    })}
                </Col>
            </Row>
        </>
} 
export default DestinationMenu;