import Image from 'next/image';
import React from 'react';
import { FaUserTie } from 'react-icons/fa';

type LeadershipMember = {
    name: string;
    title: string;
    image: string;
};

const leadershipTeam: LeadershipMember[] = [
    {
        name: 'David "Hossie" Sanchez',
        title: 'Owner / Chief Executive Officer',
        image: '/DavidHossieSanchez1.jpg',
    },
    {
        name: 'Micah Sanchez',
        title: '1st Vice President / Chief Operating Officer',
        image: '/MicahSanchez1.jpg',
    },
    {
        name: 'Shaun Berry',
        title: 'Chief Financial Officer',
        image: '/ShaunBerry1.jpg',
    },
    {
        name: 'Frank Sanchez',
        title: 'SVP of Sign Shop Operations',
        image: '/FrankSanchez1.jpg',
    },
    {
        name: 'Austin Baca',
        title: 'Project Manager',
        image: '/AustinBaca1.png',
    },
    {
        name: 'Eli Richardson',
        title: 'Project Manager',
        image: '/EliRIchardson1.jpg',
    },
    {
        name: 'Devin Vigil',
        title: 'Director of Inventory & Sales',
        image: '/DevinVigil1.jpg',
    },
    {
        name: 'Daniel Argueta',
        title: 'Sign Shop Manager',
        image: '/DanielArgueta1.jpg',
    },
    {
        name: 'Kody Robison',
        title: 'Warehouse Manager / Electronic Tech',
        image: '/KodyRobison1.jpg',
    },
    {
        name: 'Sam Boggs',
        title: 'Fleet Manager',
        image: '/SamBoggs1.jpg',
    },
    {
        name: 'Chris Cartwright',
        title: 'Chief Estimator',
        image: '/ChrisCartwright1.jpg',
    },
];

const LeadershipMemberRow = ({
                                 member,
                                 index,
                             }: {
    member: LeadershipMember;
    index: number;
}) => {
    const isReversed = index % 2 !== 0;

    return (
        <article className="border-b border-neutral-800/80 py-10 last:border-b-0 lg:py-14">
            <div
                className={`grid items-center gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-14 ${
                    isReversed ? 'lg:grid-flow-col-dense' : ''
                }`}
            >
                <div className={isReversed ? 'lg:col-start-2' : ''}>
                    <div className="relative h-[340px] w-full overflow-hidden bg-gradient-to-b from-neutral-900/40 to-neutral-950 sm:h-[390px] lg:h-[430px]">
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="object-contain object-bottom p-4 transition duration-500 hover:scale-[1.03]"
                            priority={index < 3}
                        />
                    </div>
                </div>

                <div className={isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#F7D117]">
                        {String(index + 1).padStart(2, '0')} / Leadership
                    </p>

                    <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        {member.name}
                    </h3>

                    <div className="mt-5 h-1 w-20 bg-[#F7D117]" />

                    <p className="mt-6 max-w-xl text-lg font-semibold uppercase tracking-[0.16em] text-neutral-300">
                        {member.title}
                    </p>
                </div>
            </div>
        </article>
    );
};

const Leadership = () => {
    return (
        <section className="bg-neutral-950 text-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden border-b border-[#F7D117]/30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(247,209,23,0.18),_transparent_35%),linear-gradient(to_bottom,_rgba(0,0,0,0.15),_rgba(0,0,0,0.95))]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,_transparent_1px),linear-gradient(90deg,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[size:48px_48px]" />

                <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
                    <div className="max-w-3xl">
                        <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#F7D117]/40 bg-[#F7D117]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#F7D117]">
                            <FaUserTie />
                            Leadership
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Meet the Team Behind
                            <span className="block text-[#F7D117]">
                                San Bar Construction
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-300 sm:text-lg">
                            Our leadership team brings together experienced professionals who help guide
                            San Bar Construction with a focus on quality, safety, service, and dependable
                            project execution.
                        </p>
                    </div>
                </div>
            </div>

            {/* Leadership List */}
            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
                <div className="mb-6 max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F7D117]">
                        Our Team
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Leadership Team
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-neutral-400 sm:text-base">
                        Dedicated professionals supporting the people, projects, and operations that keep
                        San Bar moving forward.
                    </p>
                </div>

                <div>
                    {leadershipTeam.map((member, index) => (
                        <LeadershipMemberRow
                            key={member.name}
                            member={member}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;