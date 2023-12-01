import React from 'react';
import { Link } from 'react-router-dom';


const SignUpPage = ({ switchToLogin }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-300">
      <div className="bg-white p-8 rounded shadow-md w-9/12">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>
        <form>
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
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="username">
              Username:
            </label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="text"
              id="username"
              placeholder="Username"
              required
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
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" htmlFor="phoneNumber">
              Phone Number:
            </label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="tel"
              id="phoneNumber"
              placeholder="Phone Number"
              required
            />
          </div>
          <p className="m-4 text-center">
          Already have an account?{' '}
          <Link to="/Login" className="text-pink-500 cursor-pointer">
            Sign In
          </Link>
        </p>
          <button className="w-full bg-pink-400 text-white py-2 rounded">
            Sign Up
          </button>
        </form>
        
      </div>
    </div>

  );
};

export default SignUpPage;
