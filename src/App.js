//не видно содержания дочерних элементов
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
        </Routes>
      </BrowserRouter>
  );
}

function Users() {
  return (
      <div>
          <h1>Home page</h1>
        <nav>
          <Link to="me">My Users</Link>
          <Link to="UserProfile">My UserProfile</Link>
          <Link to="OwnUserProfile">My OwnUserProfile</Link>
        </nav>

        <Routes>
          <Route path=":id" element={<UserProfile />} />
          <Route path="me" element={<OwnUserProfile />} />
        </Routes>
      </div>
  );
}

function UserProfile() {
    return (
        <div>
            <h2>UserProfile</h2>
        </div>
    );
}

function OwnUserProfile() {
    return (
        <div>
            <h2>OwnUserProfile</h2>
        </div>
    );
}

export default App;
