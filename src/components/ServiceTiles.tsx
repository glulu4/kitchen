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


            {/* Projects section */}
            <div className="max-w-6xl mx-auto pt-48 sm:pt-80">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`flex flex-col md:flex-row items-center justify-center md:items-center gap-4 mb-12 pb-20 ${index % 2 === 0 ? "pl-28 pr-4" : "pl-4 pr-28"
                            }`}
                    >
                        <div className="flex-1">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover rounded-lg"
                                style={{maxHeight: '300px'}} 
                            />
                        </div>
                        <div className="flex-1 p-4  rounded-lg ">
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
