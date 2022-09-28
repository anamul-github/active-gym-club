import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-9">
                    <h1 class="text-primary mt-5 mb-5"><span><FontAwesomeIcon icon={faWeightHanging}></FontAwesomeIcon></span> Active Gym Club</h1>
                    <h2>Select your Exercise:</h2>
                </div>
                <div class="col-3">
                    <h2>I am from Right Side</h2>
                </div>
            </div>
        </div>


    );
};

export default Header;