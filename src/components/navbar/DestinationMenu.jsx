import { Col,  Row } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CommonUtils } from "../CommonUtils";
import { COUNTRY_CONSTANT } from "../CountryConstants";

const DestinationMenu = () => {
    const [destinationList, setDestinationList] = useState([]);

    const destinationSize = {
        xs:24, 
        sm:24,
        md:12,
        lg:4,
        xl:4,
        xxl:3
    }
    useEffect(() => {
        setDestinationList(CommonUtils.getKeyValuesFromArrayUnderCaps(COUNTRY_CONSTANT,"DESTINATION"));
    }, [])

    return <>
        <div className="destination-menu-container flex-center">
                <Row className="submenu-row">   
                        { destinationList.map((item,index) => {
                                return (
                                    <Col className="submenu-col" {...destinationSize}>
                                        <Link to={`/country/${item}`}>{item}</Link>
                                    </Col>
                                )
                            }) }
                    </Row> 
            
        </div>
    </>
} 
export default DestinationMenu;