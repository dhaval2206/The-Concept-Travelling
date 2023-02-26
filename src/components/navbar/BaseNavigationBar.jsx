import React,{useEffect, useState} from "react";
import { Constants } from "../Constants";
import './base-navigation-bar.scss'
import { CommonUtils } from "../CommonUtils";
import { COUNTRY_CONSTANT } from "../CountryConstants";
import { Col, Image, Menu, Row } from "antd";
import { EnvironmentFilled, EnvironmentOutlined, HomeFilled, HomeOutlined, MenuOutlined, PhoneFilled, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import DestinationMenu from "./DestinationMenu";


const BaseNavigationBar = () => {

   

    const webMenuItems = [
        {
            icon :<HomeOutlined className="navbar-icon" />,
            label:<Link to={"/home"}>Home</Link>,
            key : "Home",
        },
        {
            icon :<EnvironmentOutlined className="navbar-icon" />,
            label : "Destinations",
            key : "Destinations",
            children : [
                {
                    label:<DestinationMenu></DestinationMenu>,
                    key : "destinationsMenu",
                    style : {
                        height:"fit-content",
                        display:"flex",
                        justifyContent:"center"
                    }
                }
            ]
        },
        {
            icon :<PhoneOutlined className="navbar-icon" />,
            label : "Contact Us",
            key : "ContactUs",
        },
        {
            icon :<UserOutlined className="navbar-icon" />,
            label : "About Us",
            key : "AboutUs",
        }  
    ];

    return (
        <>
            <div className="nav-card" fluid>
                <Row>
                    <Col span={4}>
                        <Link to={`/home`}>
                            <Image src={Constants.FIT} className={"main-logo"} preview={false}></Image>
                        </Link>
                    </Col>
                    <Col span={16} className="bigMenu">
                        <Menu mode={"horizontal"} className="bigMenu base-navbar flex-center" items={webMenuItems}>
                        </Menu>
                    </Col>
                    <Col span={16} className="smallMenu">
                        <MenuOutlined className={"smallMenu flex-right burger-icon"} /> 
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default BaseNavigationBar;