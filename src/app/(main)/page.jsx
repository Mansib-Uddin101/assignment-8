import Card from "@/components/Card"


const home = async () => {
  const res = await fetch("https://assignment-8-zeta-rust.vercel.app/data.json")
  const allBooks = await res.json()
  const featuredBooks = allBooks.slice(0,5);
  

  return (
    <div className="w-5/6 mx-auto my-10 ">
      <div className="pb-4 flex justify-center items-center">
        <h1 className="text-3xl font-bold">Featured Books</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {featuredBooks.map((book)=> <Card book={book} key={book.id}/>)}
      </div>
    </div>
  )
}

export default home






