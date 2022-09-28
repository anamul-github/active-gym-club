import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';

const Exercises = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    return (
        <div>
            <h2>I am from Exercises. I am the father of Exercise.</h2>
            {
                exercises.map(exercise => <Exercise
                    key={exercise.id}
                    exercise={exercise}
                ></Exercise>)
            }
        </div>
    );
};

export default Exercises;