import Image from "next/image";
import SecondaryText from "../SecondaryText";

interface HeroSectionProps {
    quote: string;
    author: string;
    role: string;
    companyValues: string;
    missionTitle: string;
    description: string[];
}

const Hero = ({companyValues, missionTitle, description}: HeroSectionProps) => {
    return (
        <div className="mx-auto  px-6 lg:px-12 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                {/* Text Section */}
                <div className="text-center lg:text-left">
                    <p className="text-lg font-semibold text-red-600">{companyValues}</p>
                    <h1 className="mt-4 text-6xl md:text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        {missionTitle}
                    </h1>
                    <div className="mt-6 max-w-xl text-gray-700 space-y-6">
                        {description.map((paragraph, idx) => (
                            <SecondaryText key={idx}>{paragraph}</SecondaryText>
                        ))}
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-sm">
                    <Image
                        alt="Modern Kitchen"
                        src="/images/modern-kitchen8.jpeg"
                        className="absolute inset-0 h-full w-full object-cover object-center shadow-sm"
                        width={600}
                        height={400}
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
