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

    if (!error) {
      router.push('/')
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-gray-100">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">Create an Account</h2>
          <p className="text-center text-sm text-gray-500 mb-6">Join NextRead to manage your digital books.</p>

          <button 
            onClick={handleGoogleSignIn}
            className="btn btn-outline border-gray-300 hover:bg-gray-50 hover:text-gray-700 normal-case w-full"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
            Sign up with Google
          </button>

          <div className="divider text-xs text-gray-400 uppercase">or</div>

          <form onSubmit={handleSignUp}>
            <div className="form-control w-full">
              <label className="label"><span className="label-text font-semibold text-gray-700">Full Name</span></label>
              <input name="name" type="text" placeholder="Mansib Uddin" required className="input input-bordered w-full focus:border-[#00d1b2] focus:outline-none" />
            </div>

            <div className="form-control w-full mt-4">
              <label className="label"><span className="label-text font-semibold text-gray-700">Email Address</span></label>
              <input name="email" type="email" placeholder="email@example.com" required className="input input-bordered w-full focus:border-[#00d1b2] focus:outline-none" />
            </div>

            <div className="form-control w-full mt-4">
              <label className="label"><span className="label-text font-semibold text-gray-700">Image URL</span></label>
              <input name="image" type="url" placeholder="https://site.com/img.jpeg" required className="input input-bordered w-full focus:border-[#00d1b2] focus:outline-none" />
            </div>

            <div className="form-control w-full mt-4">
              <label className="label"><span className="label-text font-semibold text-gray-700">Password</span></label>
              <input name="password" type="password" placeholder="••••••••" required className="input input-bordered w-full focus:border-[#00d1b2] focus:outline-none" />
            </div>

            <div className="form-control mt-8">
              <button type="submit" className="btn border-none bg-[#00d1b2] hover:bg-[#00bfa5] text-white normal-case text-lg">
                Sign Up
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-500">Already have an account? </span>
            <Link href="/auth/signin" className="font-semibold text-[#00d1b2] hover:underline">Login here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;