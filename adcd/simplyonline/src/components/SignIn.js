import React, { useState } from 'react';
import axios from 'axios';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    const res = await axios.post('/api/auth/login', { email, password });
    localStorage.setItem('token', res.data.token);
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
