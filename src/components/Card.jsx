import Image from 'next/image'
import React from 'react'

const Card = ({book}) => {
    return (
        <div className="card bg-base-100  shadow-sm hover:scale-103 transition-all duration-300">
            <figure className="px-10 pt-10">
                <Image
                src={"book.image_url"}
                alt='book'
                width={200}
                height={200}
                className='rounded-lg'
                />
                {/* <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                    className="rounded-xl" /> */}
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{book.title}</h2>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    )
}

export default Card
