import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";
import UserProfile from "./UserProfile";
import OwnUserProfile from "./OwnUserProfile";
import {UserPage, Users, UsersPage} from "./Users";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="user/:userId" element={<UserPage/>}/>
                <Route path="users1" element={<UsersPage/>}/>
                <Route path="Users" element={<Users/>}/>
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

export default App;
