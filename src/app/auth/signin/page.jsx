"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const SignInForm = () => {
  const handleSignIn = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
        email,
        password,
        callbackURL:'/'
      });
      console.log({data, error});
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-gray-100">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">Welcome Back</h2>
          <p className="text-center text-sm text-gray-500 mb-6">Log in to access your digital library.</p>
          
          <form onSubmit={handleSignIn}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Email Address</span>
              </label>
              <input 
                name="email"
                type="email" 
                placeholder="email@example.com" 
                required
                className="input input-bordered w-full focus:border-[#00d1b2] focus:outline-none" 
              />
            </div>

            <div className="form-control w-full mt-4">
              <div className="flex justify-between items-center mb-1">
                <label className="label p-0">
                  <span className="label-text font-semibold text-gray-700">Password</span>
                </label>
              </div>
              <input 
                name="password"
                type="password" 
                placeholder="••••••••" 
                required
                className="input input-bordered w-full focus:border-[#00d1b2] focus:outline-none" 
              />
            </div>

            <div className="form-control mt-8">
              <button type="submit" className="btn border-none bg-[#00d1b2] hover:bg-[#00bfa5] text-white normal-case text-lg">
                Login
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-500">Don't have an account? </span>
            <Link href="/auth/signup" className="font-semibold text-[#00d1b2] hover:underline">
              Sign up for free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;