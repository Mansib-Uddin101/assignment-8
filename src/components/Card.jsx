import Image from 'next/image'
import React from 'react'

const Card = ({book}) => {
    console.log(book.image_url);
    
    return (
        <div className="card bg-base-200/50  shadow-sm hover:scale-103 transition-all duration-300">
            <figure className="px-10 pt-10">
                <Image
                src={book.image_url}
                alt='book'
                width={200}
                height={200}
                style={{ height: 'auto' }}
                className='rounded-lg '
                priority={true}
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{book.title}</h2>
                <div className="card-actions">
                    <button className="btn btn-accent font-semibold">View Details</button>
                </div>
            </div>
        </div>
    )
}

export default Card
