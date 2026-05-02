import Image from 'next/image'
import React from 'react'

const Card = () => {
    const bookData = {
    "id": 1,
    "title": "Nexus",
    "author": "Yuval Noah Harari",
    "description": "An exploration of how information networks have shaped our world and the existential risks posed by AI.",
    "category": "Science",
    "available_quantity": 14,
    "image_url": ""
  }
    return (
        <div className="card bg-base-100  shadow-sm hover:scale-103 transition-all duration-300">
            <figure className="px-10 pt-10">
                <Image
                src={"https://i.ibb.co/Ps0GT5Zv/nexus.jpg"}
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
                <h2 className="card-title">{bookData.title}</h2>
                <div className="card-actions">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    )
}

export default Card
