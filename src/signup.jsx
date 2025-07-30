import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

function Signup() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function postData() {
    if (!name || !mail || !password) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = { name, mail, password };

    try {
      const response = await fetch('https://686f565d91e85fac42a08ccb.mockapi.io/api/users/ecomerse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Signup successful!');
        navigate('/login');
      } else {
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error. Please check your connection.');
    }
  }

  return (
    <div className="signup-container">
      <h2>Create Your Account</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email Address"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={postData}>Register</button>
      <p className="login-redirect">
        Already have an account? <span onClick={() => navigate('/login')}>Login</span>
      </p>
    </div>
  );
}

export default Signup;


