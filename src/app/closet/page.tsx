
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
//     imageUrl: "/images/closet6.jpeg",
//   },
//   {
//     id: 2,
//     title: 'Custom Kitchen Cabinet Installation',
//     description:
//       'Give your kitchen a fresh new look with expertly crafted cabinets. Our team specializes in custom kitchen cabinetry that maximizes space, style, and storage.',
//     imageUrl: "/images/closet3.jpeg",
//   },
//   {
//     id: 3,
//     title: 'Increase Your Home’s Value with Kitchen Renovations',
//     description:
//       'A beautifully remodeled kitchen not only enhances your home’s appeal but also increases property value. Invest in a kitchen renovation that combines elegance and efficiency.',
//     imageUrl: "/images/closet4.jpeg",
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
//         imgSrc="/images/closet5.jpeg"
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
    title: 'Maximize Your Space with a Custom Closet',
    description:
      'Transform your storage with a beautifully designed custom closet that enhances organization and accessibility. Our tailored solutions optimize space while maintaining a sleek, modern aesthetic.',
    imageUrl: "/images/closet6.jpeg",
  },
  {
    id: 2,
    title: 'Stylish and Functional Closet Systems',
    description:
      'Our expertly designed closet systems feature built-in shelving, drawers, and smart storage solutions. Whether you need a walk-in closet or a compact wardrobe, we create designs that fit your needs.',
    imageUrl: "/images/closet3.jpeg",
  },
  {
    id: 3,
    title: 'Increase Home Value with a Custom Closet',
    description:
      'A well-designed custom closet not only keeps your belongings organized but also enhances your home’s value. Invest in a stylish, functional closet that complements your interior.',
    imageUrl: "/images/closet4.jpeg",
  },
];

export type ThreeImageArrayType = typeof posts[number];

export default function page() {
  return (
    <div>
      <ServicePage
        title='Custom Closet Solutions'
        parapgraphHeader='Expert Closet Design & Installation'
        paragraph1='Our custom closet solutions help transform your space into an elegant, organized, and highly functional storage area. From walk-in closets to wardrobe systems, we ensure every detail is tailored to fit your lifestyle.'
        paragraph2='We specialize in designing and installing custom closets with features like built-in drawers, adjustable shelving, and space-saving storage solutions. Whether you prefer a sleek, modern style or a more traditional look, our expert team brings your vision to life.'
        imgSrc="/images/closet5.jpeg"
      />

      <ThreeImageLayout posts={posts} />

      <div className="pt-36">
        <ContactForm />
      </div>
    </div>
  )
}
