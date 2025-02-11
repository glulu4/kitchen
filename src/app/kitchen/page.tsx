
"use client"
import ContactForm from '@/components/ContactForm';
import ServicePage from '@/components/ServicePage';
import ThreeImageLayout from '@/components/ThreeImage';
import React from 'react';

const posts = [
    {
        id: 1,
        title: 'Transform Your Kitchen with a Stunning Remodel',
        description:
            'Upgrade your kitchen with a sleek, modern design that enhances both functionality and aesthetics. From custom cabinetry to high-end countertops, we bring your dream kitchen to life.',
        imageUrl: "/images/modern-kitchen2.jpg",
    },
    {
        id: 2,
        title: 'Custom Kitchen Cabinet Installation',
        description:
            'Give your kitchen a fresh new look with expertly crafted cabinets. Our team specializes in custom kitchen cabinetry that maximizes space, style, and storage.',
        imageUrl: "/images/modern-kitchen3.jpg",
    },
    {
        id: 3,
        title: 'Increase Your Home’s Value with Kitchen Renovations',
        description:
            'A beautifully remodeled kitchen not only enhances your home’s appeal but also increases property value. Invest in a kitchen renovation that combines elegance and efficiency.',
        imageUrl: "/images/modern-kitchen4.jpg",
    },
];

export type ThreeImageArrayType = typeof posts[number];

export default function page() {
    return (
        <div>
            <ServicePage
                title='Kitchen Remodeling Services'
                parapgraphHeader='Expert Kitchen Renovations'
                paragraph1='Our expert kitchen remodeling services help transform your space into a modern, functional, and stylish kitchen. From new countertops to cabinet upgrades, we handle every detail of your renovation project.'
                paragraph2='We specialize in kitchen renovations, including custom cabinetry, backsplash installation, and high-quality countertops. Whether you prefer a contemporary or traditional design, we bring your vision to life with expert craftsmanship.'
                imgSrc="/images/modern-kitchen1.png"
            />

            <ThreeImageLayout posts={posts} />

            <div className="pt-36">
                <ContactForm />
            </div>
        </div>
    )
}
