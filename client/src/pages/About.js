import React from "react";
import Summary from "../components/Summary";
import { Parallax1, Parallax2 } from "../components/Parallax";

function About() {
    return (
        <>
            <Parallax1 />
            <Summary />
            <Parallax2 />
        </>
    );
};

export default About;