import { set } from "mongoose";
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from "../components/OAuth";

const SignIn = () => {

    const [formData, setFormData] = useState({});  
    const { loading, error } = useSelector((state) => state.user);
    const navigate = useNavigate();
    
    const dispatch = useDispatch();
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
      console.log(formData);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        dispatch(signInStart());
        const res = await fetch("/server/auth/signin", {  
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log(data);
  
        if (data.success == false) {
          dispatch(signInFailure(data.message));
          return;
        }
  
        dispatch(signInSuccess(data));
        navigate("/");
        
      } catch (error) {
        dispatch(signInFailure(error.message));
      }
  
    };


    return (
        <div className="w-full p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 h-full">
                <input
                    type="email"
                    placeholder="Email"
                    className="border p-3 rounded-lg my-3"
                    id="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border p-3 rounded-lg my-3"
                    id="password"
                    onChange={handleChange}
                />
                <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
                    {loading ? "Loading..." : "Sign In"}
                </button>
                <OAuth />
            </form>

            <div className="flex gap-2 mt-5">
                <p>Dont have an account?</p>
                <Link to={"/sign-up"}>
                    <span className="text-blue-700 hover">Sign Up</span>
                </Link>
            </div>
            {error && <p className="text-red-500 m">{error}</p>}
        </div>
    );
};

export default SignIn;
