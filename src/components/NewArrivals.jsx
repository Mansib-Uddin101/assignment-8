  import Marquee from "react-fast-marquee";

  const NewArrivals = async () => {
    const res = await fetch("https://assignment-8-zeta-rust.vercel.app/data.json")
    const allBooks = await res.json()
    const NewBooks = allBooks.slice(6,11);



    return (
      <div className="container w-5/6 rounded-lg mx-auto px-3 py-2 bg-orange-50 space-y-2">
        <h1 className="px-2 text-xl font-bold flex justify-center items-center">New Arrivals!</h1>
        <Marquee
          pauseOnHover
          speed={125}
        >
          {NewBooks.map((book, index) => (
            <span key={index} className="mx-10 text-lg font-medium">
              {book.title}
            </span>
          ))}
        </Marquee>
        <h2 className="px-2 text-xl font-bold flex justify-center items-center">Special Discount on Memberships..</h2>
      </div>
    );
  };
  export default NewArrivals;