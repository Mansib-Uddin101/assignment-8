import Banner from "@/components/Banner"
import BenefitsSection from "@/components/benefits_section"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import NewArrivals from "@/components/NewArrivals"


const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Banner />
      <NewArrivals />
      <main className="grow">
        <div className="">
          {children}
        </div>
        <BenefitsSection/>
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
