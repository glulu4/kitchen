

"use client"
import ContactForm from "@/components/ContactForm";
import ServicesSection from "@/components/Services";
import Image from 'next/image';

const Page = () => {


  return (
    <div className="mx-auto mb-10 border">

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center h-[80vh] bg-gray-100 text-center pb-10">
        <div className="absolute inset-0 flex justify-center items-center  pb-10">
          <img
            src="/images/kitchen.jpg" // Replace with your image path
            alt="Furniture Display"
            className="object-cover w-full h-full"
            // layout="fill"
            // objectFit="cover"
            // quality={100}
            // className="opacity-80"
          />
        </div>
      </div>
      <div className="pt-36 m-4">
        <ServicesSection />
        <div className="pt-36">
          <ContactForm />

        </div>
      </div>

    </div>
  );
};

export default Page;
