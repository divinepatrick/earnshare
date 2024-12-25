import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="p-6 max-w-lg w-full mx-auto flex-grow flex flex-col justify-center">
        <form className="flex flex-col gap-6 bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-4xl text-center font-bold mb-4">Sign Up</h1>
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="username"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="password"
          />
          <button
            className="bg-blue-600 text-white py-4 rounded-md text-lg font-semibold hover:bg-blue-700 disabled:opacity-70"
          >
            Sign Up
          </button>
        </form>

        <div className="flex justify-center gap-2 mt-6 text-sm">
          <p>Already have an account?</p>
          <a href="/signin" className="text-blue-700 font-medium hover:underline">
            <Link to="/sign-in">
              Sign In
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;