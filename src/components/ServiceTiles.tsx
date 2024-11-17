import React from "react";

const projects = [
    {
        id: 1,
        title: "Project Name",
        description:
            "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work.",
        imageUrl:
            "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
    },
    {
        id: 2,
        title: "Project Name",
        description:
            "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work.",
        imageUrl:
            "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        title: "Project Name",
        description:
            "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work.",
        imageUrl:
            "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
    },
    {
        id: 4,
        title: "Project Name",
        description:
            "This is your Project description. Provide a brief summary to help visitors understand the context and background of your work.",
        imageUrl:
            "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    // Add more projects as needed
];

// 
export const ServiceTiles = () => {
    return (
        <section className="pb-16">
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

            {/* Projects section */}
            <div className="max-w-6xl mx-auto pt-48 sm:pt-80">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="flex flex-col md:flex-row items-center justify-center md:items-center gap-4 mb-12 px-4 border-b-2 border-black pb-6"
                    >
                        <div className="flex-1">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover rounded-lg"
                                style={{maxHeight: '300px'}} // Set a consistent max height
                            />
                        </div>
                        <div className="flex-1 p-4 bg-gray-100 rounded-lg ">
                            <h2 className="text-3xl font-semibold mb-2">
                                {String(project.id).padStart(2, "0")}
                            </h2>
                            <h2 className="text-3xl font-semibold mb-2">{project.title}</h2>
                            <p className="text-gray-700 text-xl py-8">{project.description}</p>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    );
};
