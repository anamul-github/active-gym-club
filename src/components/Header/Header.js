import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
    return (
        <div className='ms-5 ps-4 w-75'>
            <h1 className='text-primary m-5 mb-5 text-center'><span><FontAwesomeIcon icon={faWeightHanging}></FontAwesomeIcon></span> Active Gym Club</h1>
            <h2 className='ms-5'>Select your Exercise:</h2>
        </div>
    );
};

export default Header;