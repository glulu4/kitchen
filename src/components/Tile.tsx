import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface TileProps {
    text: string;
    imagePath: string;
    onClick: () => void;
    subtext:string;
}

export default function Tile({text, imagePath, onClick, subtext}: TileProps) {
    return (


        <div className="w-full max-w-96 rounded-sm max-h-90 bg-white borderrounded-lg shadow dark:bg-gray-800"
        onClick={onClick}>
            <Link href="#">
                <div className="aspect-[16/9] relative">
                    <Image
                        alt="modern kitchens miami"
                        className="object-cover"
                        src={imagePath}
                        fill
                    />
                </div>

                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{text}</h5>
                </div>
                <div className="p-5">
                    <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-white">{subtext}</h6>
                </div>
            </Link>
        </div>

    )
}
