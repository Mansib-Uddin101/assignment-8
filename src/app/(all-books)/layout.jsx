import Banner from "@/components/Banner"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import NewArrivals from "@/components/NewArrivals"


const AllBooksLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <div className="">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default AllBooksLayout
