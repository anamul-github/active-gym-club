import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    console.log(props.exercise);
    const { img, category, info, timeRequired } = props.exercise;
    return (
        <div className='card mb-5'>
            <img src={img} className='card-img-top img-fluid w-100 image' alt=""></img>
            <div className='card-body'>
                <h3 className='card-title'>{category}</h3>
                <p className='card-text'>{info}</p>
                <p>Time Required: {timeRequired}</p>
                <a href="/button" className='btn btn-primary'>Add to list</a>
            </div>
        </div>
    );
};

export default Exercise;