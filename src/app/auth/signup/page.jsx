'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SignUpForm = () => {
  const router = useRouter()
  const handleSignUp = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
    name,
    email,
    password,
    image
  });
  console.log({data, error});
  if(!error){
    router.push('/')
  }
  
  };
  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-gray-100">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">Create an Account</h2>
          <p className="text-center text-sm text-gray-500 mb-6">Join NextRead to manage your digital books.</p>

          <form onSubmit={handleSignUp}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Full Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Mansib Uddin"
                required
                className="input input-bordered w-full focus:border-[#00d1b2] focus:outline-none"
              />
            </div>

            <div className="form-control w-full mt-4">
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
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Image URL</span>
              </label>
              <input
                name="image"
                type="url"
                placeholder="https://site.com/img.jpeg"
                required
                className="input input-bordered w-full focus:border-[#00d1b2] focus:outline-none"
              />
            </div>

            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Password</span>
              </label>
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
                Sign Up
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-500">Already have an account? </span>
            <Link href="/auth/signin" className="font-semibold text-[#00d1b2] hover:underline">
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
