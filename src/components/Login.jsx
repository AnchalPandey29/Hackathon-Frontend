import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login/', { email, password });
      const { redirectUrl } = response.data;
      window.location.href = redirectUrl;
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='outer'>

      <div className="login-container">
        <h2 className="login-heading">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
      <img className="loginimg" src="\loginform.png" alt="Login" />
    </div>

  );
};

export default LoginPage;
