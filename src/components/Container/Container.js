import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons';
import './Container.css';

const Container = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-9'>
                    <h1 className='text-primary mt-5 mb-5'><span><FontAwesomeIcon icon={faWeightHanging}></FontAwesomeIcon></span> Active Gym Club</h1>
                    <h2>Select your Exercise:</h2>
                </div>
                <div className='col-3'>
                    <h2>I am from Right Side</h2>
                </div>
            </div>
        </div>


    );
};

export default Container;