import React from "react";
import { Container, Section, Row, Col, Divider } from "react-materialize";
// import images from "../../assets/images";
import data from "../../assets/images/portfolioData.json";

export default function PortfolioLinks() {
    return (
        <Container>
            <Section>
                <Row>
                    <Col s={12} className="center">
                        <h4>Portfolio</h4>
                        <Divider></Divider>
                    </Col>
                </Row>
                <Row>
                    <Col m={6} s={12}>
                        {data.map(data => (
                            <a href={data.link} target="_blank" rel="noopener noreferrer">
                                <img src={data.image} alt={data.alt} class="responsive-img hoverable"/>
                                <div class="grey darken-2 text-block"> 
                                    <p class="white-text">{data.title}</p>
                                </div>
                            </a> 
                        ))}
                    </Col>
                </Row>
            </Section>
        </Container>
    );
};