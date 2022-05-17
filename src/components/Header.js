import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

function Header(props) {

    const [isOpen, setIsOpen]=useState(window.innerWidth >= 900);

    const toggle = ()=>{
        setIsOpen(!isOpen);
    }

    useEffect(()=>{

    })

    return (
            <div>
                <Navbar color="primary" light expand="md" style={{padding:'10px',fontSize:'18px'}}>
                <NavbarBrand href="/">VSR</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/#about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/#contactus">Contact Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/peoples">Peoples</NavLink>
                            </NavItem>
                            
                            
                            <NavItem>
                                <NavLink href="/suggestions">Suggestions</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/login">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/signup">Sign-Up</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/mentor-login">Mentor-Login</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

            </div>
    );
}

export default Header;