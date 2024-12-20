import React, { useState } from 'react';
import axios from '../axiosConfig';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; // Create this CSS file for styling

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/auth/login', {
      username,
      password,
    })
      .then((response) => {
        // Save the token and user role to localStorage
        const { token, roles } = response.data;
        const role = roles.length === 0 ?'':roles [0]
        localStorage.setItem('token', token);
        localStorage.setItem('role', role ); // Save the user's role

        // Redirect to home page or role-specific page
        if (role === 'Admin') {
          navigate('/');
        } else {
          navigate('/');
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        setError('Invalid username or password');
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </form>
    </div>
  );
}

export default Login;
