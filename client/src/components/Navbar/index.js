import React from "react";
import { Navbar, NavItem } from "react-materialize";
import "./style.css"

export default function Navigationbar() {
    return(
        <>
        {/* TODO: Instead of adding a margin-left to the brand, how to put all links inside of a container like I was able to do in my original portfolio? */}
            <Navbar brand={<a href="/" className="navbrand-custom">Cara Sunberg</a>} alignLinks="right" className="grey darken-4 z-depth-3">
                <NavItem href="/">About</NavItem>
                <NavItem href="#">Portfolio</NavItem>
                <NavItem href="/contact">Contact</NavItem>
            </Navbar>
        </>
    );
};