"use client"

// import Tile from "@/components/Tile";
// import {useState} from "react";

// const Page = () => {

//     const cabinetTypes = [
//         {
//             name: "Classic Oak",
//             path: "/images/wood.jpg",
//         },
//         {
//             name: "Marble",
//             path: "/images/marble.jpeg",
//         },
//         {
//             name: "Cherry Wood",
//             path: "/images/cherry.jpg",
//         },
//         {
//             name: "Dark Oak",
//             path: "/images/dark-wood.jpg",
//         },
//         {
//             name: "Classic Oak",
//             path: "/images/wood.jpg",
//         },
//         {
//             name: "Marble",
//             path: "/images/marble.jpeg",
//         },
//         {
//             name: "Cherry Wood",
//             path: "/images/cherry.jpg",
//         },
//         {
//             name: "Dark Oak",
//             path: "/images/dark-wood.jpg",
//         },
//         {
//             name: "Classic Oak",
//             path: "/images/wood.jpg",
//         },
//         {
//             name: "Marble",
//             path: "/images/marble.jpeg",
//         },
//         {
//             name: "Cherry Wood",
//             path: "/images/cherry.jpg",
//         },
//         {
//             name: "Dark Oak",
//             path: "/images/dark-wood.jpg",
//         },

//     ];
    // const TileData = typeof cabinetTypes[number];
//     // grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]
//     //             auto-cols-fr

//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedTile, setSelectedTile] = useState(null);

//     const handleTileClick = (tile: ) => {
//         setSelectedTile(tile);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setSelectedTile(null);
//     };
//     return (
        // <div className="mx-8 mb-10">

        //     <div className="grid gap-6 justify-items-center  grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))]">
        //         {cabinetTypes.map((obj, index) => (
        //             <Tile
        //                 text={obj.name}
        //                 imagePath={obj.path}
        //                 onClick={() => handleTileClick(obj)}
        //             />
        //         ))}
        //     </div>


        // </div>
//     );
// };

// export default Page;


import {useState} from "react";
// import ModalExample from "@/components/ModalExample";
import Tile from "@/components/Tile";
import Modal from "@/components/Modal";
import Image from "next/image";

const Page = () => {
    const cabinetTypes = [
        {name: "Classic Oak", path: "/images/wood.jpg"},
        {name: "Marble", path: "/images/marble.jpeg"},
        {name: "Cherry Wood", path: "/images/cherry.jpg"},
        {name: "Dark Oak", path: "/images/dark-wood.jpg"},
    ];
    const TileData = typeof cabinetTypes;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTile, setSelectedTile] = useState<{name: string; path: string} | null>(null);

    const handleTileClick = (tile: {name: string; path: string}) => {
        setSelectedTile(tile);
        setIsModalOpen(true);
    };

    return (

        // <div className="mx-8 mb-10">




        // </div>
        <div className="mx-8 mb-10">
            <div className="grid gap-6 justify-items-center  grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))]">
                {cabinetTypes.map((obj, index) => (
                    <Tile
                        text={obj.name}
                        imagePath={obj.path}
                        onClick={() => handleTileClick(obj)}
                    />
                ))}
            </div>

            {selectedTile && (
                <Modal
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                    title={selectedTile.name}
                    description="This is an example modal. Add more details here."
                    imagePath={selectedTile.path}
                >
                    {/* <Image
                        alt="modern kitchens miami"
                        className="object-cover"
                        src={selectedTile.path}
                        fill
                    /> */}
                    {/* <img src={selectedTile.path} alt={selectedTile.name} className="w-full rounded-md" /> */}
                </Modal>
            )}
        </div>
    );
};

export default Page;
