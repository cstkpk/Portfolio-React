import React from "react";
import { Footer } from "react-materialize";
import "./style.css";

export default function FooterComp() {
    return (

        <Footer
            copyrights="Made by Cara Sunberg"
            links={
                <div>
                    <h5>Connect</h5>
                    <ul>
                        <li><a className="white-text" href="https://github.com/cstkpk" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a className="white-text" href="https://www.linkedin.com/in/cara-sunberg" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a className="white-text" href="mailto:cnsunberg@gmail.com">Email</a></li>
                    </ul>
                </div>
            }
            className="grey darken-4 z-depth-3"
        >
            <h5 className="white-text">Welcome!</h5>
            <p className="grey-text text-lighten-4">This portfolio is a work in progress. Please check back soon for improvements!</p>
        </Footer>

/* <div class="page-footer grey darken-4 z-depth-3">
    <div class="container">
        <div class="row">
        <div class="col l6 s12">
            <h5 class="white-text">Welcome!</h5>
            <p class="grey-text text-lighten-4">This portfolio is a work in progress. Please check back soon for improvements!</p>
        </div>
        <div class="col l3 s6">
            <h5 class="white-text">Settings</h5>
            <ul>
            <li><a class="white-text" href="#!">Link 1</a></li>
            <li><a class="white-text" href="#!">Link 2</a></li>
            <li><a class="white-text" href="#!">Link 3</a></li>
            <li><a class="white-text" href="#!">Link 4</a></li>
            </ul>
        </div>
        <div class="col l3 s6">
            <h5 class="white-text">Connect</h5>
            <ul>
            <li><a class="white-text" href="https://github.com/cstkpk" target="_blank">GitHub</a></li>
            <li><a class="white-text" href="https://www.linkedin.com/in/cara-sunberg" target="_blank">LinkedIn</a></li>
            <li><a class="white-text" href="mailto:cnsunberg@gmail.com">Email</a></li>
            </ul>
        </div>
        </div>
    </div>
    <div class="footer-copyright">
        <div class="container">
        Made by <a class="brown-text text-lighten-3" href="#">Cara Sunberg</a>
        </div>
    </div>
</div> */


    );
};