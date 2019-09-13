import React from "react";
import { Navbar, NavItem } from "react-materialize";
import "./style.css"

export default function Navigationbar() {
    return(
        <>
            <Navbar brand={<a href="/" className="navbrand-custom">Cara Sunberg</a>} alignLinks="right" className="grey darken-4 z-depth-3">
                <NavItem href="/">About</NavItem>
                <NavItem href="#">Portfolio</NavItem>
                <NavItem href="#">Contact</NavItem>
            </Navbar>
        </>
    );
};