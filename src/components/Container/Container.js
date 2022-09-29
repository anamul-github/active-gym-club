import React, { useEffect, useState } from 'react';
import About from '../About/About';
import Exercise from '../Exercise/Exercise';
import Profile from '../Profile/Profile';
import './Container.css';

const Container = () => {
    const [exercises, setExercises] = useState([]);
    const [time, setTime] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    const handleAddToList = (exercise) => {
        const newTime = [...time, exercise];
        setTime(newTime);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-9 card-container'>
                    {
                        exercises.map(exercise => <Exercise
                            key={exercise.id}
                            exercise={exercise}
                            handleAddToList={handleAddToList}
                        ></Exercise>)
                    }
                </div>
                <div className='col-3 shadow rounded profile'>
                    <Profile time={time}></Profile>
                </div>
                <div>
                    <About></About>
                </div>
            </div>
        </div>
    );
};

export default Container;