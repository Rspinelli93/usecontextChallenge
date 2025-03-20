import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Profile = () => {
    return (
        <>
            <h1>Profile</h1>
            <nav>
                {<Link to="/">HOME</Link>}
                {<Link to="/MyJob">MyJob</Link>}
                {<Link to="/Profile">Profile</Link>}
                <Button/>
            </nav>
        </>
    )
}

export default Profile