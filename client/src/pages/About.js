import React from "react";
// import Skyfaxi from "../images/Skyfaxi.jpg";
import Iceland4 from "../images/Iceland4.jpg";
import Summary from "../components/Summary";

function About() {
    return (
        <>
        {/* First parallax container */}
        <div class="parallax-container valign-wrapper">
            <div class="section no-pad-bot">
                <div class="container">
                    <div class="row center">
                        <h5 class="header col s12 light white-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in veniam atque mollitia! Consequatur, dicta accusantium. Magnam autem distinctio sunt.</h5>
                    </div>
                </div>
            </div>
            <div class="parallax"><img src={Iceland4} alt="Background"/></div>
        </div>

        {/* About me section */}
        <Summary />

        {/* Second parallax container */}
        <div class="parallax-container valign-wrapper">
            <div class="section no-pad-bot">
                <div class="container">
                    <div class="row center">
                        <h5 class="header col s12 light white-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in veniam atque mollitia! Consequatur, dicta accusantium. Magnam autem distinctio sunt.</h5>
                    </div>
                </div>
            </div>
            <div class="parallax"><img src="assets/images/Iceland2.jpg" alt="Background"/></div>
        </div>

        </>
    );
};

export default About;