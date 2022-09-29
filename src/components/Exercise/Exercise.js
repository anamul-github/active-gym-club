import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const { handleAddToList, exercise } = props;
    const { img, category, info, timeRequired } = exercise;

    return (
        <div className='card'>
            <img src={img} className='card-img-top img-fluid w-100 image' alt=""></img>
            <div className='card-body'>
                <h3 className='card-title'>{category}</h3>
                <p className='card-text'>{info}</p>
                <p>Time Required: {timeRequired}</p>
                <div>
                    <button onClick={() => handleAddToList(exercise)} className='btn btn-primary'>Add to list</button>
                </div>
            </div>
        </div>
    );
};

export default Exercise;