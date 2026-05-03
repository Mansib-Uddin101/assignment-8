import Image from 'next/image'
import React from 'react'

const bookDetails = async ({params}) => {
  const {id} = await params
  const res = await fetch("https://assignment-8-zeta-rust.vercel.app/data.json")
  const allBooks = await res.json()
  const selectedBook = allBooks.filter((book)=> book.id ==id)[0]
  console.log(selectedBook);
  
  return (
    <div className='w-4/5 mx-auto my-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 p-4'>
      <div className='shadow-lg'>
        <Image
        src={selectedBook.image_url}
        alt='cover'
        width={330}
        height={330}
        className=''
        />
      </div>
      <div className='flex flex-col'>
        <div>
          <h1 className='text-4xl font-bold'>{selectedBook.title}</h1>
          <h2 className='text-lg text-gray-400'>By {selectedBook.author}</h2>
        </div>
        <div>
          <p className='text-lg'>
            {selectedBook.description}
          </p>
        </div>
        <div className='my-10 text-xl'>
          <h2 className='font-semibold'>Available Quantity: {selectedBook.available_quantity}</h2>
        </div>
        <div className='mt-auto'>
          
          <button className='btn btn-accent font-bold mx-auto text-xl w-full py-8'>Borrow Now</button>
        </div>
      </div>
    </div>
  )
}

export default bookDetails
