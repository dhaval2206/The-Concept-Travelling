import { Card, Col,  List,  Row } from "antd";
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
            <div style={{
                display:"flex",
                justifyContent:"flex-start",
                flexWrap:"wrap",
                height:"100%",
                width:"100%",
                flexDirection:"row",
                verticalAlign:"top"
            }}>

                    {
                        COUNTRY_CONSTANT.map((country,index) => (
                            <ul style={{color:"#D7B56D"}}>
                                <li className="destination-font" style={{color:"#D7B56D"}}>
                                    {country.DESTINATION}
                                    <ul style={{color:"#785C20"}}>
                                        {
                                           country.CHILDREN.map((child,index) => 
                                                <li key={"SUB_LI_"+child.DESTINATION.replaceAll(" ","-").toUpperCase()} style={{padding:"0px 15px 0px 15px"}}>
                                                    <Link key={"HEADER_LINK_"+child.DESTINATION.replaceAll(" ","-").toUpperCase()} style={{color:"#785C20 !important"}} to={`/country/`+child.DESTINATION.replaceAll(" ","-").toUpperCase()}>{child.DESTINATION}</Link>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </li>
                              </ul>
                        ))
                    }
            </div>
            </>
} 
export default DestinationMenu;