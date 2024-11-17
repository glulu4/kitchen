import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface TileProps {
    text: string;
    imagePath: string;
    onClick: () => void;
}

export default function Tile({text, imagePath, onClick}: TileProps) {
    return (


        <div className="w-full max-w-96 max-h-90 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        onClick={onClick}>
            <Link href="#">
                <div className="aspect-[16/9] relative">
                    <Image
                        alt="modern kitchens miami"
                        className="object-cover"
                        src={imagePath || "/images/placeholder.webp"}
                        fill
                    />
                </div>

                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{text}</h5>
                </div>
            </Link>
        </div>

    )
}
