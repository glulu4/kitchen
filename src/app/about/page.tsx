// "use client"

// import Hero from "@/components/about/Hero";
// import ContactForm from "@/components/ContactForm";



// // AboutUs.jsx (main component)
// export default function AboutUs() {
//   const heroContent = {
//     quote: "Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor.",
//     author: "Judith Rogers",
//     role: "CEO at Workcation",
//     companyLogo: "/api/placeholder/120/48",
//     companyValues: "Company values",
//     missionTitle: "On a mission to empower remote teams",
//     description: [
//       "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.",
//       "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.",
//       "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci."
//     ]
//   };



//   return (
//     <>
//       <div className="py-24 sm:py-32">
//         <div className="mx-auto w-5/6 px-6 lg:px-8">
//           <Hero {...heroContent} />
//           {/* <Stats stats={stats} /> */}
//         </div>
//       </div>


//       <div className="pt-36 w-5/6 flex flex-col mx-auto">
//         <ContactForm />
//       </div>
//     </>
//   );
// }
"use client";

import Hero from "@/components/about/Hero";
import ContactForm from "@/components/ContactForm";

// AboutUs.jsx (main component)
export default function AboutUs() {
  const heroContent = {
    quote: "A well-designed kitchen is more than a place to cook—it's the heart of the home. Our mission is to bring style, functionality, and comfort to every space we remodel.",
    author: "Gabriel Lulu",
    role: "Founder & Lead Designer",
    companyLogo: "/api/placeholder/120/48",
    companyValues: "Our Commitment to Excellence",
    missionTitle: "Transforming Kitchens, Elevating Homes",
    description: [
      "At Modern Kitchen's Miami, we specialize in modern kitchen remodeling, combining innovative designs with high-quality materials. Our goal is to create stunning, functional kitchens tailored to our clients' lifestyles.",
      "From contemporary minimalist designs to timeless elegance, our team ensures every detail is crafted to perfection. We work with premium countertops, cabinetry, and smart appliances to enhance both aesthetics and efficiency.",
      "With years of experience in home renovation, we take pride in our craftsmanship, attention to detail, and customer satisfaction. Whether you're looking for a sleek new layout or a complete kitchen transformation, we're here to bring your vision to life."
    ]
  };

  return (
    <>
      <div className="py-24 sm:py-32">
        <div className="mx-auto w-5/6 px-6 lg:px-8">
          <Hero {...heroContent} />
        </div>
      </div>

      <div className="pt-36 w-5/6 flex flex-col mx-auto">
        <ContactForm />
      </div>
    </>
  );
}
