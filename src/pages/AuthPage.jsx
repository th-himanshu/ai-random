import React, { useState } from "react";
import { Link } from "react-router-dom";
import robotImage from "../assets/benefits/benefitImage2.webp";  // Imported image
import "animate.css";  // For Animate.css animations

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Left side - Form */}
      <div className="w-full sm:w-1/2 flex justify-center items-center bg-[#0f172a]">
        <div className="bg-[#1e293b] p-8 rounded-lg shadow-lg w-96 text-white animate__animated animate__fadeIn animate__duration-350">
          <h2 className="text-2xl font-semibold text-center mb-4">
            {isLogin ? "Sign In" : "Sign Up"}
          </h2>
          <form>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-300">Full Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-600 bg-[#334155] rounded mt-1 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-gray-300">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-600 bg-[#334155] rounded mt-1 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-600 bg-[#334155] rounded mt-1 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#2563eb] text-white py-2 rounded-lg hover:bg-[#1d4ed8] transition-all transform hover:scale-105"
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <p className="text-center mt-4 text-gray-400">
            {isLogin ? "Don't have an account?" : "Already have an account?"} 
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-400 hover:underline ml-1"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
          <p className="text-center mt-4">
            <Link to="/" className="text-gray-400 hover:underline">Back to Home</Link>
          </p>
        </div>
      </div>

      {/* Right side - Image */}
      <div
        className="w-1/2 bg-cover bg-center hidden sm:block animate__animated animate__fadeInRight animate__duration-400"
        style={{
          backgroundImage: `url(${robotImage})`, // Use the imported image here
        }}
      ></div>
    </div>
  );
};

export default AuthPage;
