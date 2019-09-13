import React from "react";
import { Container, Section, Row, Col, Divider, MediaBox } from "react-materialize";
import * as images from "../../images/assets.js";
import "./style.css";
// import "../../assets/js/materialize.min.js";

export default function Summary() {
    return(
        <Container>
            <Section>
                <Row>
                    <Col s={12} className="center">
                        <h4>About Me</h4>
                        <Divider></Divider>
                        <br/><br/>
                        <MediaBox className="img-about">
                            <img className="responsive-img" src={images.skyfaxi.image} alt="Cara"/>  
                        </MediaBox>
                        <p className="left-align light index-text">Full Stack Web Developer with experience in team management and operations. I graduated with high honors from Wesleyan University and recently completed my certificate in Full Stack Web Development through George Washington University.</p>
                        <p className="left-align light index-text">I’m an organized, creative problem-solver with a knack for analytical thinking, as demonstrated by my thesis, which I recently wrote about the fundamental interpretational difficulties of understanding how and why the mathematics of quantum mechanics works.</p>
                        <p className="left-align light index-text">I’ve especially enjoyed and gained proficiency in HTML, CSS, JavaScript, SQL and noSQL database management, Express routing, and React. As an operations manager, I recently helped lead a startup team from the ground up into having a fully functioning, global web platform. After that experience, I decided that I wanted to be more involved in the technical programming of projects and am looking to immerse myself in a professional environment where I can continue to use and strengthen my skills.</p>
                    </Col>
                </Row>
            </Section>
        </Container>
    );
};