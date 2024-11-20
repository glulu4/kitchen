"use client"
import {useState} from "react";
import Tile from "@/components/Tile";
import Modal from "@/components/Modal";
import Image from "next/image";
import {CabinetInfo, cabinets} from "./cabinetTypes";

const Page = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTile, setSelectedTile] = useState<CabinetInfo>({} as CabinetInfo);

    const handleTileClick = (cabinet:CabinetInfo) => {
        setSelectedTile(cabinet);
        setIsModalOpen(true);
    };

    return (
        <div className="mx-8 mb-10">
            <div className="grid gap-6 justify-items-center  grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))]">
                {cabinets.map((cabinet:CabinetInfo, index) => (
                    <Tile
                        key={index}
                        text={cabinet.title}
                        subtext={cabinet.subtitle}
                        imagePath={cabinet.imagePath}
                        onClick={() => handleTileClick(cabinet)}
                    />
                ))}
            </div>

            {selectedTile && (
                <Modal
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                    title={selectedTile.title}
                    description="This is an example modal. Add more details here."
                    imagePath={selectedTile.imagePath}
                >
                </Modal>
            )}
        </div>
    );
};

export default Page;
