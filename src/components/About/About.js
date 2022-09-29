import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='w-75 m-auto mb-5 about'>
            <h2 className='mt-5 pt-5 text-center fw-bold mb-5'>About React</h2>
            <h4>1. How does React work?</h4>
            <h5>- React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components. It's important to note that ReactJS is not a JavaScript framework. It's a library. <br /> <br /> React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. </h5>
            <br />
            <br />
            <h4>2. What's the difference between props and state?</h4>
            <h5>- State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</h5>
            <br />
            <br />
            <h4>3. What's the use of useEffect except data load with API?</h4>
            <h5>- By using this useEffect Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</h5>

        </div>
    );
};

export default About;