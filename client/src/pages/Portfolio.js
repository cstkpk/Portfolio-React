import React from "react";
import PortfolioLinks from "../components/PortfolioLinks";
import { Parallax1, Parallax2 } from "../components/Parallax";

function Portfolio() {
    return (
        <>
            <Parallax1 />
            <PortfolioLinks />
            <Parallax2 />
        </>
    );
};

export default Portfolio;