import React from 'react';
import { FaUserTie } from 'react-icons/fa';

const leadershipTeam = [
    {
        name: 'Devin Vigil',
        title: '',
        image: '/DevinVigil1.jpg',
    },
    {
        name: 'Eli Richardson',
        title: '',
        image: '/EliRichardson1.jpg',
    },
    {
        name: 'Micah Sanchez',
        title: 'Operations Manager Assistant',
        image: '/MicahSanchez1.jpg',
    },
    {
        name: 'Daniel Argueta',
        title: '',
        image: '/DanielArgueta1.jpg',
    },
    {
        name: 'Kody Robison',
        title: '',
        image: '/KodyRobison1.jpg',
    },
    {
        name: 'Shaun Berry',
        title: 'Chief Financial Officer',
        image: '/ShaunBerry1.jpg',
    },
    {
        name: 'Sam Boggs',
        title: 'Fleet Manager',
        image: '/SamBoggs1.jpg',
    },
    {
        name: 'Austin Baca',
        title: 'Project Manager',
        image: '/AustinBaca1.png',
    },
    {
        name: 'Frank Sanchez',
        title: 'SVP of Business & Market Development',
        image: '/FrankSanchez1.jpg',
    },
    {
        name: 'David "Hossie" Sanchez',
        title: 'Owner',
        image: '/DavidHossieSanchez1.jpg',
    },
    {
        name: 'Chris Cartwright',
        title: '',
        image: '/ChrisCartwright1.jpg',
    },
];

const Leadership = () => {
    return (
        <section className="bg-neutral-950 text-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden border-b border-[#F7D117]/30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(247,209,23,0.18),_transparent_35%),linear-gradient(to_bottom,_rgba(0,0,0,0.15),_rgba(0,0,0,0.95))]" />

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

            {/* Leadership Grid */}
            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
                <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F7D117]">
                            Our Team
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Leadership Team
                        </h2>
                    </div>

                    <p className="max-w-xl text-sm leading-7 text-neutral-400">
                        Dedicated professionals supporting the people, projects, and operations that keep
                        San Bar moving forward.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {leadershipTeam.map((member) => (
                        <article
                            key={member.name}
                            className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#F7D117]/70 hover:shadow-2xl"
                        >
                            <div className="relative overflow-hidden bg-black">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                            </div>

                            <div className="p-5">
                                <h3 className="text-xl font-bold text-white">
                                    {member.name}
                                </h3>

                                {member.title && (
                                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#F7D117]">
                                        {member.title}
                                    </p>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;