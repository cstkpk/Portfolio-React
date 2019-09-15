import React from "react";
import ContactInfo from "../components/ContactInfo";
import { Parallax1, Parallax2 } from "../components/Parallax";

function About() {
    return (
        <>
            <Parallax1 />
            <ContactInfo />
            <Parallax2 />
        </>
    );
};

export default About;