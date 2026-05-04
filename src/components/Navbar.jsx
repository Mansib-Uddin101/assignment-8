'use client'

import logo from "@/assets/logo.png"
import { authClient } from "@/lib/auth-client"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  const userData = authClient.useSession()
  const user = userData.data?.user

  const handleSignOut = async ()=>{
    await authClient.signOut()
  }

  return (
    <header className="bg-white shadow-md py-3.5 px-8 flex justify-between items-center sticky top-0 z-50">
      <Link href={"/"}>
        <Image
          src={logo}
          alt="logo"
          width={200}
          height={100}
          className="h-16 w-auto"
        />

      </Link>


      <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
        <a href="/" className="hover:text-blue-500 transition">Home</a>
        <a href="/all-books" className="hover:text-blue-500 transition">All Books</a>
        <a href="/profile" className="hover:text-blue-500 transition">My Profile</a>
      </nav>

      <div className="flex items-center gap-4">
        {!user && (<Link href={"/auth/signin"} className="bg-[#00D3BB]/50 text-xl px-6 py-3 font-semibold rounded-md hover:bg-gray-200 transition">
          Login</Link>)
        }
        {user && (<div className="flex justify-center items-center gap-4">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={user?.image}
              referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div>
            <button onClick={handleSignOut} className="bg-[#00D3BB]/50 text-xl px-4 py-2.5 font-semibold rounded-md hover:bg-gray-200 transition">Sign Out</button>
          </div>
          </div>)
        }
      </div>
    </header>
  )
}

export default Navbar
