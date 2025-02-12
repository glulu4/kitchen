// import React from 'react';

// const services = [
//     {title: "Kitchens", image: "/images/mdrn-kitchen.png"},
//     {title: "Closets", image: "/images/mdrn-kitchen.png"},
//     {title: "TV Wall Units", image: "/images/mdrn-dining-room.webp"},
// ];

// const ServicesSection = () => {
//     return (
//         <section className="py-20 bg-gray-100 rounded-sm">
//             <div className="text-center mb-12">
//                 <h1 className="text-5xl font-bold mb-6">Our Services</h1>
//                 <p className="text-gray-600 text-lg">
//                     Explore the range of spaces we design with style and functionality. Whether you&apos;re looking to revamp your living room or customize your kitchen, we have you covered.
//                 </p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
//                 {services.map((service, index) => (
//                     <div
//                         key={index}
//                         className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
//                     >
//                         {/* Image Section */}
//                         <div className="relative w-full h-96 overflow-hidden">
//                             <img
//                                 src={service.image}
//                                 alt={service.title}
//                                 className="w-full h-full object-cover"
//                             />
//                             <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                                 <h3 className="text-white text-2xl font-semibold">{service.title}</h3>
//                             </div>
//                         </div>


//                         {/* Text Section */}
//                         <div className="p-4 bg-white">
//                             <h3 className="text-lg font-bold text-gray-800 text-center">
//                                 {service.title}
//                             </h3>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default ServicesSection;
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SecondaryText from './SecondaryText';

const services = [
    {title: "Kitchens", image: "/images/modern-kitchen10.jpeg", link: "/kitchen"},
    {title: "Closets", image: "/images/closet1.jpeg", link: "/closet"},
    {title: "TV Wall Units", image: "/images/tv-wall1.jpeg", link: "/tv-wall"},
];

const ServicesSection = () => {
    return (
        <section className="py-20 bg-gray-100 rounded-sm">
            <div className="text-center mb-12 w-5/6 flex flex-col mx-auto justify-center">
                <h1 className="text-5xl font-bold mb-6">Our Services</h1>
                <SecondaryText className="text-gray-600 font-nokora">
                    Explore the range of spaces we design with style and functionality. Whether you&apos;re looking to revamp your living room or customize your kitchen, we have you covered.
                </SecondaryText>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {services.map((service, index) => (
                    <Link key={index} href={service.link} passHref>
                        <div
                            className="cursor-pointer bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
                        >
                            {/* Image Section */}
                            <div className="relative w-full h-96 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-opacity duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-white text-2xl font-semibold">{service.title}</h3>
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="p-4 bg-white text-center">
                                <h3 className="text-lg font-nokora font-bold text-gray-800">{service.title}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
