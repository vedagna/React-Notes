import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotesPage from './pages/NotesPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Success from './components/Success';  // Import Success page
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        {/* Navigation Bar */}
        <nav>
          <Link to="/">Home</Link>
          {/* <Link to="/notes">Notes</Link> */}
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/about">About</Link>
        </nav>

        {/* Main Content */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/success" element={<Success />} /> {/* Add Success route */}
            
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
