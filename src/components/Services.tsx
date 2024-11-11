import React from 'react';

const services = [
    {title: "Kitchens", image: "/images/modern-kitchen.avif"},
    {title: "Custom Kitchens", image: "/images/modern-kitchen.avif"},
    {title: "Living Rooms", image: "/images/modern-kitchen.avif"},
    {title: "Dining Rooms", image: "/images/modern-kitchen.avif"},
];

const ServicesSection = () => {
    return (
        <section className="py-40">
            <div className="text-left mb-8">
                <h1 className="text-6xl font-bold mb-4">Services</h1>
                <p className="text-gray-700 text-2xl">
                    This is your Services section. This is a great place to give more information about the services you provide. You can write a general description of what your business offers then add more details below. This section can be adapted for your website.
                </p>
                <p className="text-gray-700 mt-4 text-xl">
                    You may choose to highlight other things like courses or programs, or to share special features about your business that you want to promote.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((service, index) => (
                    <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-200">
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-70 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-center text-gray-800 hover:underline">
                                {service.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
