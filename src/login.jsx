import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin() {
    if (!mail || !password) {
      alert('Please enter both email and password.');
      return;
    }

    alert('Login successful!');
    navigate('/home');
  }

  return (
    <div className="login-container">
      <h2>LOGIN PAGE</h2>
      <input
        type="email"
        placeholder="Email"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p className="signup-redirect">
        New user? <span onClick={() => navigate('/signup')}>Create an account</span>
      </p>
    </div>
  );
}

export default Login;
