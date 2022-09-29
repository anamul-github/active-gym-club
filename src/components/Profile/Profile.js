import React from 'react';

const Profile = () => {
    return (
        <div>
            <div className='text-center mt-3'>
                <h4>Anamul</h4>
                <p>Minnesota, USA</p>
            </div>

            <div className='d-flex justify-content-between pt-3 shadow p-3'>
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

            <div className='mt-3'>
                <h4>Add A Break</h4>
                <div className='d-flex justify-content-between'>
                    <p>10s</p>
                    <p>20s</p>
                    <p>30s</p>
                    <p>40s</p>
                </div>
            </div>

            <h4 className='mt-3'>Exercise Details</h4>
            <div>
                <h5>Exercise Time</h5>
                <p></p>
            </div>

            <div className='pt-3'>
                <h5>Break Time</h5>
                <p></p>
            </div>

            <button className='btn btn-primary w-100 mt-5'>Activity Completed</button>
        </div>


    );
};

export default Profile;