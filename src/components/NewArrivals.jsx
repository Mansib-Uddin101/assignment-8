  import Marquee from "react-fast-marquee";

  const NewArrivals = () => {
    const NewBooks = [
      "The Great Gatsby", "Atomic Habits", "Project Hail Mary"
    ];

    return (
      <div className="container w-5/6 rounded-lg mx-auto px-3 py-2 bg-gray-200 space-y-2">
        <h1 className="px-2 text-xl font-bold flex justify-center items-center">New Arrivals!</h1>
        <Marquee
          pauseOnHover
          speed={100}
        >
          {NewBooks.map((book, index) => (
            <span key={index} className="mx-10 text-lg font-medium">
              {book}
            </span>
          ))}
        </Marquee>
      </div>
    );git 
  };
  export default NewArrivals;