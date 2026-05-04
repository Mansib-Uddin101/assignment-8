'use client'

import { useState } from "react"
import logo from "@/assets/logo.png"
import { authClient } from "@/lib/auth-client"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const userData = authClient.useSession()
  const user = userData.data?.user

  const handleSignOut = async () => {
    await authClient.signOut()
  }

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-5/6 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3.5">
          <Link href={"/"} className="shrink-0">
            <Image
              src={logo}
              alt="logo"
              width={200}
              height={100}
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
            <Link href="/" className="hover:text-blue-500 transition">Home</Link>
            <Link href="/all-books" className="hover:text-blue-500 transition">All Books</Link>
            <Link href="/profile" className="hover:text-blue-500 transition">My Profile</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {!user ? (
              <Link href={"/auth/signin"} className="bg-[#00D3BB]/50 px-6 py-2.5 font-semibold rounded-md hover:bg-[#00D3BB]/70 transition text-gray-800">
                Login
              </Link>
            ) : (
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-semibold text-gray-700">{user?.name}</h2>
                <button onClick={handleSignOut} className="bg-red-300 px-4 py-2 font-semibold rounded-md hover:bg-gray-200 transition text-gray-800">
                  Sign Out
                </button>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 space-y-4 shadow-inner">
          <nav className="flex flex-col space-y-4 font-medium text-gray-700">
            <Link href="/" onClick={toggleMenu} className="hover:text-blue-500 transition">Home</Link>
            <Link href="/all-books" onClick={toggleMenu} className="hover:text-blue-500 transition">All Books</Link>
            <Link href="/profile" onClick={toggleMenu} className="hover:text-blue-500 transition">My Profile</Link>
          </nav>
          
          <div className="pt-4 border-t border-gray-100">
            {!user ? (
              <Link href={"/auth/signin"} onClick={toggleMenu} className="block text-center bg-[#00D3BB]/50 py-3 font-semibold rounded-md">
                Login
              </Link>
            ) : (
              <div className="space-y-4 text-center">
                <p className="font-semibold text-gray-700">{user?.name}</p>
                <button onClick={() => { handleSignOut(); toggleMenu(); }} className="w-full bg-gray-100 py-3 font-semibold rounded-md">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar