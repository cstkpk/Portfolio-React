import React from "react";

export default function Navbar() {
    return(
        <>
            <nav class="grey darken-4 z-depth-3 header-custom" role="navigation">
                <div class="nav-wrapper container">
                <a href="#" class="brand-logo">Cara Sunberg</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="index.html">About</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                </div>
            </nav>

            <ul class="sidenav" id="mobile-demo">
                <li><a href="index.html">About</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="contact.html˙">Contact</a></li>
            </ul>
        </>
    );
};