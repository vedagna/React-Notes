// src/pages/Success.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <h2>Registration Successful!</h2>
      <p>Your account has been created. You can now proceed to log in.</p>
      <button onClick={() => navigate('/login')}>Proceed to Login</button>
    </div>
  );
};

export default Success;
