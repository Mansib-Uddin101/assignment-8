import logo from "@/assets/logo.png"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <header className="bg-white shadow-md py-3.5 px-8 flex justify-between items-center">
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

      <div className="flex items-center space-x-4">
        <button className="text-xl px-6 py-3 bg-gray-100 font-semibold rounded-md hover:bg-gray-200 transition">Login</button>
      </div>
    </header>
  )
}

export default Navbar
