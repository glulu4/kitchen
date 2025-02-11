

import {signOgImageUrl} from "@/lib/og-image";
import {LucideALargeSmall, LucideAlarmClock, LucideAlignVerticalSpaceAround} from "lucide-react";
import Image from "next/image";
import SecondaryText from "./SecondaryText";


// export async function generateMetadata() {
//     return {
//         title: "About Paragon Exterior",
//         description: "Learn more about Paragon Exterior, our values, and our commitment to excellence.",
//         openGraph: {
//             title: "About Paragon Exterior",
//             description: "Learn more about Paragon Exterior, our values, and our commitment to excellence.",
//             images: [
//                 signOgImageUrl({
//                     title: "Paragon Exterior",
//                     label: "About Us",
//                     brand: "Paragon Exterior",
//                 }),
//             ],
//         },
//     };
// }

interface ServicePageProps {
    title: string;
    parapgraphHeader: string;
    paragraph1: string;
    paragraph2: string;
    imgSrc:string
}

const ServicePage = ({title, parapgraphHeader, paragraph1, paragraph2, imgSrc}: ServicePageProps) => {
    return (
        <div className="">
            <main className="container mx-auto px-5 py-16 sm:py-24 lg:py-32">
                {/* Hero Section */}
                <div className="text-left">
                    <h1 className="text-pretty text-5xl font-semibold tracking-tight text-primaryblue sm:text-6xl">
                        {title}
                    </h1>
                </div>

                {/* Image and Intro */}
                <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="text-center lg:text-left">
                        <Image
                            src={imgSrc} // Replace with your actual image
                            alt="Paragon Exterior Team"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-primaryblue sm:text-4xl">
                            {parapgraphHeader}
                        </h2>
                        <SecondaryText>
                            {paragraph1}
                        </SecondaryText>
                        <p className="mt-4 text-lg text-gray-600">
                            {paragraph2}
                        </p>
                    </div>
                </div>






            </main>
        </div>
    );
};

export default ServicePage;
