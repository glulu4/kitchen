import {Dialog, Transition} from '@headlessui/react';
import {Fragment} from 'react';

export default function Modal({
    isOpen,
    setIsOpen,
    title,
    description,
    imagePath,
}: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    title: string;
    description: string;
    imagePath: string;
}) {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-50" />
                </Transition.Child>

                <div className="fixed inset-0 flex items-center justify-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="fixed inset-0 grid grid-cols-2 bg-zinc-100">
                            {/* Left Section: Image */}
                            <div className="relative flex items-center justify-center">
                                <img
                                    src={imagePath}
                                    alt="modern kitchens miami"
                                    className="object-contain h-2/3 w-2/3"
                                />
                                {/* Navigation Controls */}
                                {/* <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl text-white">
                                    &#8249;
                                </button> */}
                                {/* <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl text-white">
                                    &#8250;
                                </button> */}
                            </div>

                            {/* Right Section: Content */}
                            <div className="p-8 flex flex-col justify-center">
                                {/* Close Button */}
                                <button
                                    className="absolute top-4 right-4 text-gray-600 text-6xl"
                                    onClick={() => setIsOpen(false)}
                                >
                                    &times;
                                </button>

                                <Dialog.Title className="text-4xl font-semibold">{title}</Dialog.Title>
                                {/* <Dialog.Description className="mt-4 text-lg text-gray-600">
                                    {description}
                                </Dialog.Description> */}
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
}
