import React from 'react';
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import {Users} from "./Users";

function HomeUser() {
    let navigate = useNavigate();
    return (
        <div>
            <Link to="..">Home</Link>
            <h2>_UserProfile_</h2>

            <div><Users /></div>

            <div style={{backgroundColor: "#4f8a3c", padding: "30px"}}>
                <Link to="../users" params={{ testValue: "hello" }}>Props through render USERS</Link>
                <Routes>
                    <Route name="ideas" path="/:testValue" handler={Users} />
                </Routes>
            </div>
            <>
                <button onClick={() => navigate(-2)}>
                    Go 2 pages back
                </button>
                <button onClick={() => navigate(-1)}>Go back</button>
                <button onClick={() => navigate(1)}>
                    Go forward
                </button>
                <button onClick={() => navigate(2)}>
                    Go 2 pages forward
                </button>
            </>
        </div>
    );
}

function UserProfile() {
    return (
        HomeUser()
    );
}

export default UserProfile;
