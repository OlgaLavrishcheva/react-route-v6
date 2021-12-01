import React from 'react';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function OwnUserProfile() {
    let navigate = useNavigate();

    function handleClick() {
        navigate("/Users");
    }

    return (
        <div>
            <Link to="..">Home</Link>
            <h2>_OwnUserProfile_</h2>
            <button onClick={handleClick}>Go to Users</button>
        </div>
    );
}
export default OwnUserProfile;
