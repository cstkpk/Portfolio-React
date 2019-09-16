import React from "react";
import { Container, Section, Row, Col, Divider } from "react-materialize";
import data from "../../assets/images/portfolioData.js";
import "./style.css";

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
                            <a href={data.link} target="_blank" rel="noopener noreferrer" key={data.id}>
                                <img src={data.image} alt={data.alt} className="responsive-img hoverable"/>
                                <div className="grey darken-2 text-block"> 
                                    <p className="white-text">{data.title}</p>
                                </div>
                            </a> 
                        ))}
                        {/* {data.map(data => (
                        <Card 
                            header={<CardTitle className="black-text">{data.title}</CardTitle>}
                            actions={
                                <a href={data.link}><img src={data.image} className="responsive-img"/></a>
                            }
                        />
                        ))} */}
                    </Col>
                </Row>
            </Section>
        </Container>
    );
};