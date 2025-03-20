import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const MyJob = () => {
    return (
        <>
            <h1>MyJob</h1>
            <nav>
                {<Link to="/">HOME</Link>}
                {<Link to="/MyJob">MyJob</Link>}
                {<Link to="/Profile">Profile</Link>}
                <Button/>
            </nav>
        </>
    )
}

export default MyJob