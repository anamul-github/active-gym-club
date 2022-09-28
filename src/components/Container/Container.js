import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Profile from '../Profile/Profile';
import './Container.css';

const Container = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-9'>
                    {
                        exercises.map(exercise => <Exercise
                            key={exercise.id}
                            exercise={exercise}
                        ></Exercise>)
                    }
                </div>
                <div className='col-3'>
                    <Profile></Profile>
                </div>
            </div>
        </div>
    );
};

export default Container;