import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import App from './App';
import Profile from './Profile';
import {PropagateLoader} from "react-spinners";

const Home = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<App />} />
        </Routes>
        <div>
          <h1>My App</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="profile">About</Link>
          </nav>
        </div>
      </Router>
    </div>
  );
};

export default Home;
