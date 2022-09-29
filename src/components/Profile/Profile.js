import React from 'react';

const Profile = (props) => {
    const { time } = props;
    console.log(time);

    let total = 0;
    for (const exercise of time) {
        total = total + exercise.timeRequired;
    }

    return (
        <div>
            <div className='text-center mt-5'>
                <h4>Anamul</h4>
                <p>Minnesota, USA</p>
            </div>

            <div className='d-flex justify-content-between mt-5 shadow-lg p-3 rounded'>
                <div>
                    <h4>75kg</h4>
                    <p>Weight</p>
                </div>
                <div>
                    <h4>5.10</h4>
                    <p>Height</p>
                </div>
                <div>
                    <h4>55</h4>
                    <p>Age</p>
                </div>
            </div>

            <div className='mt-5'>
                <h4>Add A Break</h4>
                <div className='d-flex justify-content-between shadow-lg p-3 rounded mt-3'>
                    <button className='border-0 rounded-pill gray-400 p-2 fw-bold'><p>10s</p></button>
                    <button className='border-0 rounded-pill bg-primary p-2 fw-bold text-white'><p>20s</p></button>
                    <button className='border-0 rounded-pill gray-400 p-2 fw-bold'><p>30s</p></button>
                    <button className='border-0 rounded-pill gray-400 p-2 fw-bold'><p>40s</p></button>
                </div>
            </div>

            <h4 className='mt-5'>Exercise Details</h4>
            <div className='d-flex justify-content-between shadow-lg p-3 rounded mt-3'>
                <h5>Exercise Time: </h5>
                <p>{total}s</p>
            </div>

            <div className='pt-3 d-flex justify-content-between shadow-lg p-3 rounded mt-4'>
                <h5>Break Time</h5>
                <p>:</p>
            </div>

            <button className='btn btn-primary w-100 mt-5'>Activity Completed</button>
        </div>


    );
};

export default Profile;