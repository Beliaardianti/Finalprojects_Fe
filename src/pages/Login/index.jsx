import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const LoginPage = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'user@example.com' && password === 'password') {
      history('/dashboard');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };
  
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-pink-300">
      <div className="bg-white p-8 rounded shadow-md w-4/12">
        <h2 className="text-2xl font-bold mb-4 text-center">Log in to your Account</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="email"
              id="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="password"
              id="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="m-4 text-center">
          Don't have an account?{' '}
          <Link to="/SignUp" className="text-pink-500 cursor-pointer">
            Register
          </Link>
        </p>
          <button type="submit" className="w-full bg-pink-400 text-white py-2 rounded">
            Sign In
          </button>
        </form>
      </div>
    </div>

  );
};

export default LoginPage;
