import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { HomeRounded, SchoolRounded ,WorkRounded, Telegram,Facebook, Twitter, LinkedIn, GitHub, Instagram} 
from "@material-ui/icons";
import {Link, NavLink, withRouter} from "react-router-dom";
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button/Button';
import './Header.css'

const Header = (props) => {
    const pathName = props?.location?.pathName
    return (
        <Navbar expand="lg" sticky="top" className="header">
            {/* Home link */}
            <Nav.Link as={NavLink} to="/" className="header_navlink">
                <Navbar.Brand className="header_home">
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="header_left">
                {/* Resume Link */}
                    <Nav.Link 
                    as = {NavLink} 
                    to ="/" 
                    className={pathName == '/' ? 'header_link_active' : 'header_link'}>
                    Resume
                    </Nav.Link>
                {/* Portfolio Link */}
                    <Nav.Link 
                    as = {NavLink} 
                    to ="/Portfolio" 
                    className={pathName == '/Portfolio' ? 'header_link_active' : 'header_link'}>
                    Portfolio
                    </Nav.Link>
                </Nav>
                <div className="header_right">
                    {Object.keys(resumeData.socials).map(key => (
                        <a href = {resumeData.socials[key].link} target="_blank">
                            {resumeData.socials[key].icon}
                        </a>
                    ))}
                    <CustomButton text={"Tuyển"} icon = {<Telegram/>}/>
                </div>
            </Navbar.Collapse> 
        </Navbar>
    );
};

export default Header;
