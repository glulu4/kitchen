interface StatItem {
    label: string;
    value: string;
}

interface StatsProps {
    stats: StatItem[];
}

const Stats = ({stats}: StatsProps) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
                {stats.map((stat, statIdx) => (
                    <div key={statIdx}>
                        <dt className="text-sm/6 font-semibold text-gray-600">{stat.label}</dt>
                        <dd className="mt-2 text-3xl/10 font-bold tracking-tight text-gray-900">{stat.value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
};

export default Stats;