

"use client"

import {ServiceTiles} from "@/components/ServiceTiles";

const Page = async ({
    searchParams,
}: {
    searchParams: {[key: string]: string | string[] | undefined};
}) => {
    const page = searchParams.page ? parseInt(searchParams.page as string) : 1;

    return (
        <div className="mx-auto mb-10 border">
            {/* Header section with background */}
            <div
                className="bg-cover bg-center flex items-center justify-center h-80 md:h-96"
                style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80)",
                }}
            >

                <div className="flex flex-col gap-8 bg-opacity-90 bg-white w-3/4 md:w-2/3 text-left py-10 border-b-2 border-black mt-80 p-10 rounded-sm">
                    <h1 className="text-6xl md:text-4xl sm:text-3xl font-bold text-black">Services</h1>
                    <p className="text-gray-700 text-xl sm:text-lg leading-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, architecto perspiciatis soluta est eveniet aperiam, eius vero accusantium, sint voluptates totam. Libero autem nulla ab repellat nihil nesciunt. Fugiat, quasi?
                        You may choose to highlight other things like courses or programs, or
                        to share special features about your business that you want to
                        promote. Double click on the text box to edit the text and make it
                        your own.
                    </p>
                </div>
            </div>
            <ServiceTiles/>

            {/* Hero Section */}
            {/* <div className="relative flex flex-col items-center justify-center h-[80vh] bg-gray-100 text-center pb-10">
                <div className="absolute inset-0 flex justify-center items-center  pb-10">
                    <Image
                        src="/images/kitchen.jpg" // Replace with your image path
                        alt="Furniture Display"
                        layout="fill"
                        objectFit="cover"
                    // quality={100}
                    // className="opacity-80"
                    />
                </div>
            </div>
            <div className="p-8">
                <ServicesSection />
                <ContactForm />
            </div> */}

            {/* <Footer /> */}
        </div>
    );
};

export default Page;
