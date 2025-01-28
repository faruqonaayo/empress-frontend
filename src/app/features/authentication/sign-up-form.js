"use client";
import Button from "@/app/ui/button";
import Heading from "@/app/ui/heading";
import Link from "next/link";
import React, { useState } from "react";

function SignUpForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    // Perform form submission or other actions
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <Heading level={2} className=" text-center">
          Sign Up
        </Heading>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-[#11296B] mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E96FC] focus:border-transparent outline-none transition-all"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#11296B] mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E96FC] focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
              value={password}
              onChange={handlePasswordChange}
            />
            <p className="flex items-center text-xs text-[#11296B] mt-1">
              <span className="a-icon a-icon-alert mr-2"></span>
              Password must consist of at least 6 characters.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#11296B] mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              className={`w-full px-4 py-2 border ${
                passwordMatch ? "border-gray-300" : "border-red-500"
              } rounded-lg focus:ring-2 focus:ring-[#1E96FC] focus:border-transparent outline-none transition-all`}
              placeholder="••••••••"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {!passwordMatch && (
              <p className="text-red-500 text-xs mt-1">
                Passwords do not match
              </p>
            )}
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-[#11296B] mb-1">
                First Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E96FC] focus:border-transparent outline-none transition-all"
                placeholder="firstname"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium text-[#11296B] mb-1">
                Last Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E96FC] focus:border-transparent outline-none transition-all"
                placeholder="lastname"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#11296B] mb-1">
              Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E96FC] focus:border-transparent outline-none transition-all"
              placeholder="your_username"
            />
          </div>

          <div className="mt-10 border-t border-gray-300"></div>

          <div>
            <label className="block text-sm font-medium text-[#11296B] mb-1">
              Address
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E96FC] focus:border-transparent outline-none transition-all"
              placeholder="Street Address"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E96FC] focus:border-transparent outline-none transition-all"
              placeholder="city"
            />

            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E96FC] focus:border-transparent outline-none transition-all"
              placeholder="province"
            />

            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E96FC] focus:border-transparent outline-none transition-all"
              placeholder="postcode"
            />
          </div>

          <Button>Create Account</Button>
        </form>

        <div className="mt-10 ml-10 mr-10 border-t border-gray-300"></div>
        <div className="mt-2 text-center text-sm text-gray-600 flex justify-center items-center gap-1">
          <p>Already have an account?</p>
          <span className="text-[#11296B] hover:text-[#1E96FC] font-semibold">
            <Link href="/auth/sign-in">Sign in</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
