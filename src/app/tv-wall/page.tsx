
// "use client"
// import ContactForm from '@/components/ContactForm';
// import ServicePage from '@/components/ServicePage';
// import ThreeImageLayout from '@/components/ThreeImage';
// import React from 'react';

// const posts = [
//   {
//     id: 1,
//     title: 'Transform Your Kitchen with a Stunning Remodel',
//     description:
//       'Upgrade your kitchen with a sleek, modern design that enhances both functionality and aesthetics. From custom cabinetry to high-end countertops, we bring your dream kitchen to life.',
//     imageUrl: "/images/tv-wall2.jpg",
//   },
//   {
//     id: 2,
//     title: 'Custom Kitchen Cabinet Installation',
//     description:
//       'Give your kitchen a fresh new look with expertly crafted cabinets. Our team specializes in custom kitchen cabinetry that maximizes space, style, and storage.',
//     imageUrl: "/images/tv-wall3.jpeg",
//   },
//   {
//     id: 3,
//     title: 'Increase Your Home’s Value with Kitchen Renovations',
//     description:
//       'A beautifully remodeled kitchen not only enhances your home’s appeal but also increases property value. Invest in a kitchen renovation that combines elegance and efficiency.',
//     imageUrl: "/images/tv-wall4.jpeg",
//   },
// ];

// export type ThreeImageArrayType = typeof posts[number];

// export default function page() {
//   return (
//     <div>
//       <ServicePage
//         title='Kitchen Remodeling Services'
//         parapgraphHeader='Expert Kitchen Renovations'
//         paragraph1='Our expert kitchen remodeling services help transform your space into a modern, functional, and stylish kitchen. From new countertops to cabinet upgrades, we handle every detail of your renovation project.'
//         paragraph2='We specialize in kitchen renovations, including custom cabinetry, backsplash installation, and high-quality countertops. Whether you prefer a contemporary or traditional design, we bring your vision to life with expert craftsmanship.'
//         imgSrc="/images/tv-wall5.jpeg"
//       />

//       <ThreeImageLayout posts={posts} />

//       <div className="pt-36">
//         <ContactForm />
//       </div>
//     </div>
//   )
// }


"use client"
import ContactForm from '@/components/ContactForm';
import ServicePage from '@/components/ServicePage';
import ThreeImageLayout from '@/components/ThreeImage';
import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Elevate Your Living Space with a Custom TV Wall',
    description:
      'Enhance your entertainment experience with a modern, custom-designed TV wall unit. From sleek floating shelves to built-in storage, we create stylish solutions that complement your home’s interior.',
    imageUrl: "/images/tv-wall2.jpg",
  },
  {
    id: 2,
    title: 'Seamless & Modern TV Wall Installations',
    description:
      'Our expert team designs and installs TV wall units with precision, ensuring a seamless fit for your space. Choose from custom cabinetry, LED backlighting, and integrated sound systems for a luxurious touch.',
    imageUrl: "/images/tv-wall3.jpeg",
  },
  {
    id: 3,
    title: 'Increase Your Home’s Aesthetic Appeal',
    description:
      'A well-designed TV wall transforms your living area into a sophisticated entertainment hub. Add value to your home with high-end materials and a customized layout tailored to your style.',
    imageUrl: "/images/tv-wall4.jpeg",
  },
];

export type ThreeImageArrayType = typeof posts[number];

export default function page() {
  return (
    <div>
      <ServicePage
        title='Custom TV Wall Units'
        parapgraphHeader='Modern TV Wall Installations'
        paragraph1='Upgrade your home entertainment with a professionally designed TV wall unit. We specialize in crafting sleek, space-saving solutions that integrate your TV, speakers, and storage seamlessly.'
        paragraph2='Our TV wall services include custom cabinetry, floating shelves, LED accent lighting, and integrated media consoles. Whether you prefer a contemporary or classic style, we tailor each design to fit your space perfectly.'
        imgSrc="/images/tv-wall5.jpeg"
      />

      <ThreeImageLayout posts={posts} />

      <div className="pt-36">
        <ContactForm />
      </div>
    </div>
  )
}
