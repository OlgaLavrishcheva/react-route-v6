import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="users" element={<Users/>}/>
                <Route path="userProfile" element={<UserProfile/>}/>
                <Route path="ownUserProfile" element={<OwnUserProfile/>}/>
            </Routes>
        </BrowserRouter>
    );
}

function Home() {
    return (
        <div style={{backgroundColor: "#023c5d", padding: "30px"}}>
            <nav>
                <Link style={{color: "white", margin: "10px"}} to="/">Home!</Link>
                <Link style={{color: "white", margin: "10px"}} to="Users">My Users!</Link>
                <Link style={{color: "white", margin: "10px"}} to="UserProfile">UserProfile!</Link>
                <Link style={{color: "white", margin: "10px"}} to="OwnUserProfile">OwnUserProfile!</Link>
            </nav>

            <Outlet/>
        </div>
    );
}

function Users() {
    return (
        <div>
            <h2>_My_Users_</h2>
        </div>
    );
}

function UserProfile() {
    return (
        <div>
            <h2>_UserProfile_</h2>
        </div>
    );
}

function OwnUserProfile() {
    return (
        <div>
            <h2>_OwnUserProfile_</h2>
        </div>
    );
}

export default App;
