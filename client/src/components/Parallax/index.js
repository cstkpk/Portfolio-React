import React from "react";
import { Parallax } from "react-materialize";
import images from "../../assets/images";

function Parallax1() {
    return(
        <Parallax image={<img src={images.iceland4.image} alt="Background"/>}/>
    );
};

function Parallax2() {
    return(
        <Parallax image={<img src={images.iceland2.image} alt="Background"/>}/>
    );
};

export {
    Parallax1,
    Parallax2
};