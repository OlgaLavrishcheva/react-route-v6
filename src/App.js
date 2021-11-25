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
        <div>
            <nav>
                <Link to="/">Home!</Link>
                <Link to="Users">My Users!</Link>
                <Link to="UserProfile">UserProfile!</Link>
                <Link to="OwnUserProfile">OwnUserProfile!</Link>
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
