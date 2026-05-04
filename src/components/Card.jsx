'use client'

import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Card = ({ book }) => {
    const { data: session } = authClient.useSession();
    const router = useRouter();

    const handleViewDetails = (e) => {
        if (!session) {
            e.preventDefault();
            toast.error("Please login to view book details");
            router.push('/auth/signin');
        }
    };

    return (
        <div className="card bg-base-200/50 shadow-sm hover:scale-103 transition-all duration-300 h-full flex flex-col">
            <figure className="px-10 pt-10">
                <Image
                    src={book.image_url}
                    alt='book'
                    width={200}
                    height={300}
                    style={{ objectFit: 'contain' }}
                    className='rounded-lg'
                    priority={true}
                />
            </figure>
            <div className="card-body items-center text-center flex flex-col grow">
                <h2 className="card-title line-clamp-2 grow items-center">{book.title}</h2>
                <div className="card-actions mt-auto w-full">
                    <Link 
                        href={`/details/${book.id}`} 
                        className="mx-auto"
                        onClick={handleViewDetails}
                    >
                        <button className="btn btn-accent font-semibold">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card;