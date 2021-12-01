import React from 'react';
import {Link, useParams} from "react-router-dom";

const users = [
    {
        name: `Param`
    },
    {
        name: `Vennila`
    },
    {
        name: `Afrin`
    }
];

export function UserPage() {
    const { userId } = useParams();

    return (
        <>
            <p>
                <strong>User ID: </strong>
                {userId}
            </p>
            <p>
                <strong>User Name: </strong>
                {users[userId - 1].name}
            </p>
        </>

    );
}
export function Users() {

    return (
        <div className="AppUsers">
            <div>
                <Link style={{margin: "20px"}} to="/">Home</Link>
                <Link style={{margin: "20px"}} to="/users1">Users1</Link>
                <p>Page Users</p>
            </div>
        </div>
    )
}

export function UsersPage() {
    return (
        <div style={{backgroundColor: "#b58638", padding: "30px"}}>
            {users.map((user, index) => (
                <h5 key={index}>
                    <Link to={`/user/${index + 1}`}>{user.name}'s Page</Link>
                </h5>
            ))}
        </div>
    );
}
