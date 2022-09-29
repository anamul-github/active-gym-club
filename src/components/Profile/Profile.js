import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = (props) => {
    const { time } = props;

    let total = 0;
    for (const exercise of time) {
        total = total + exercise.timeRequired;
    }

    const [breakTime, setBreakTime] = useState(0);

    // local storage
    const currentBreak = JSON.parse(localStorage.getItem('break-time'));

    const setRest = (item) => {
        localStorage.setItem('break-time', JSON.stringify(item));

        const newBreakTime = JSON.parse(localStorage.getItem('break-time'));
        setBreakTime(newBreakTime);
    }

    // toast
    const notify = () => toast.success("Congratulations! You are done with your workout!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


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
                    <button onClick={() => setRest(10)} className='border-0 rounded-pill gray-400 p-2 fw-bold'>10s</button>
                    <button onClick={() => setRest(20)} className='border-0 rounded-pill bg-primary p-2 fw-bold text-white'>20s</button>
                    <button onClick={() => setRest(30)} className='border-0 rounded-pill gray-400 p-2 fw-bold'>30s</button>
                    <button onClick={() => setRest(40)} className='border-0 rounded-pill gray-400 p-2 fw-bold'>40s</button>
                </div>
            </div>

            <h4 className='mt-5'>Exercise Details</h4>
            <div className='d-flex justify-content-between shadow-lg p-3 rounded mt-3'>
                <h5>Exercise Time: </h5>
                <p>{total}s</p>
            </div>

            <div className='pt-3 d-flex justify-content-between shadow-lg p-3 rounded mt-4'>
                <h5>Break Time</h5>
                <p>{currentBreak ? currentBreak : 0}s</p>
            </div>

            <button onClick={notify} className='btn btn-primary w-100 mt-5'>Activity Completed</button>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            ></ToastContainer>
        </div>
    );
};

export default Profile;