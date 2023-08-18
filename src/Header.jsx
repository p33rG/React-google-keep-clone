import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import image from './images/bkr.png'
import './style.css'

const Header = () => {
    return (

        <div className="navBar" >
            <img src={image} height='   50px' alt="Bkr's Keep" />

            <h1>Bkr's Keep</h1>
        </div>
    );
}

export default Header;