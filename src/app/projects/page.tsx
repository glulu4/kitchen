

"use client"
import ContactForm from "@/components/ContactForm";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {ImageGallery} from "@/components/ImageGallery";
import ServicesSection from "@/components/Services";
import {wisp} from "@/lib/wisp";
import Image from 'next/image';

const Page = async ({
    searchParams,
}: {
    searchParams: {[key: string]: string | string[] | undefined};
}) => {
    const page = searchParams.page ? parseInt(searchParams.page as string) : 1;
    const result = await wisp.getPosts({limit: 6, page});

    return (
        <>
        
            <div className="mx-auto mb-10 p-10">

                <div className="text-left mb-8">
                    <h1 className="text-6xl font-bold mb-4">Projects</h1>
                    <p className="text-gray-700 text-2xl">
                        This is your Services section. This is a great place to give more information about the services you provide. You can write a general description of what your business offers then add more details below. This section can be adapted for your website.
                    </p>
                    <p className="text-gray-700 mt-4 text-xl">
                        You may choose to highlight other things like courses or programs, or to share special features about your business that you want to promote.
                    </p>
                </div>

                <ImageGallery />
            
                {/* <Footer /> */}
            </div>

        </>
    );
};

export default Page;
