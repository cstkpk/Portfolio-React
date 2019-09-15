import React from "react";
import { Container, Section, Row, Col, Divider } from "react-materialize";

export default function ContactInfo() {
    return (
        <Container>
            <Section>
                <Row>
                    <Col s={12} className="center">
                        <h4>Contact</h4>
                        <Divider></Divider>
                    </Col>
                </Row>
                <Row>
                    <h5>Email: <span><a class="blue-text text-darken-4" href="mailto:cnsunberg@gmail.com">cnsunberg@gmail.com</a></span></h5>
                    <h5>GitHub: <span><a class="blue-text text-darken-4" href="https://github.com/cstkpk" target="_blank" rel="noopener noreferrer">cstkpk</a></span></h5>
                    <h5>LinkedIn: <span><a class="blue-text text-darken-4" href="https://www.linkedin.com/in/cara-sunberg" target="_blank" rel="noopener noreferrer">Cara Sunberg</a></span></h5>
                </Row>
            </Section>
        </Container>
    );
};