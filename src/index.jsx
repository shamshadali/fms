import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './assets/css/index.css';
import './assets/css/App.css';
//import reportWebVitals from './reportWebVitals';
import Footer from './Footer';
import Main from './Main';
import About from './About';
import Dashboard from './Dashboard';
import Login from './Login';

const App = () => {
  return (
    <Router>
        <nav className="header">
            <title>Childcare app</title>
            <div className="nav">
                <Link to="/"><img src="logo.png" height="100px" width="100px" alt="logo" /></Link>
                <div className="align-middle">
                    <ul className="nav-parent">
                      <li className="nav-items">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="nav-items">
                        <Link to="/about">About</Link>
                      </li>
                      <li className="nav-items">
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li className="nav-items">
                        <Link to="/login">Login</Link>
                      </li>
                    </ul>
                </div>
            </div>
        </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
