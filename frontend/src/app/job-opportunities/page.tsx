import React from 'react';
import Link from 'next/link';
import { FaHardHat, FaTools, FaWarehouse, FaSign } from 'react-icons/fa';

interface JobPositionProps {
    title: string;
    icon: JSX.Element;
    summary: string;
    qualifications: string[];
    responsibilities: string[];
    jobType?: string;
    compensation?: string;
    benefits?: string;
}

function JobPosition({ title, icon, summary, qualifications, responsibilities, jobType, compensation, benefits }: JobPositionProps) {
    return (
        <div className="w-full bg-black p-6 rounded-lg mb-12">
            <div className="bg-white p-6 rounded-lg flex flex-wrap">
                <div className="w-full text-center mb-6">
                    <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-4 flex justify-center items-center">
                        {icon}
                        <span className="ml-4">{title}</span>
                    </h2>
                </div>
                <div className="w-full">
                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6"><strong>Position Summary:</strong> {summary}</p>
                </div>
                <div className="w-full md:w-1/2 mb-6">
                    <h3 className="text-xl font-semibold text-black mb-2"><strong>Qualifications:</strong></h3>
                    <ul className="list-disc list-inside text-gray-800 mb-4">
                        {qualifications.map((qualification, index) => (
                            <li key={index}>{qualification}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-full md:w-1/2 mb-6">
                    <h3 className="text-xl font-semibold text-black mb-2"><strong>Duties & Responsibilities:</strong></h3>
                    <ul className="list-disc list-inside text-gray-800 mb-4">
                        {responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                        ))}
                    </ul>
                </div>
                {jobType && (
                    <div className="w-full md:w-1/2 mb-6">
                        <h3 className="text-xl font-semibold text-black mb-2"><strong>Job Type:</strong></h3>
                        <p className="text-gray-800">{jobType}</p>
                    </div>
                )}
                {compensation && (
                    <div className="w-full md:w-1/2 mb-6">
                        <h3 className="text-xl font-semibold text-black mb-2"><strong>Compensation:</strong></h3>
                        <p className="text-gray-800">{compensation}</p>
                    </div>
                )}
                {benefits && (
                    <div className="w-full md:w-1/2">
                        <h3 className="text-xl font-semibold text-black mb-2"><strong>Benefits:</strong></h3>
                        <p className="text-gray-800">{benefits}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function JobOpportunities() {
    return (
        <section id="job-opportunities" className="relative min-h-screen py-16 bg-[#F7D117] mt-6">
            {/* Banner */}
            <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/LogoBackground.png')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-7xl font-bold text-white text-center">Job Opportunities</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-30 mt-10">
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 font-sans text-center bg-white rounded-xl">
                    Apply now online or in person. San Bar Construction Corp. is an Equal Opportunity Employer and encourages diversity in the workforce.
                </p>
                <p className="font-bold md:text-2xl lg:text-4xl text-gray-800 leading-relaxed mb-8 font-sans text-center bg-white rounded-2xl">
                    San Bar is a Drug Free workplace.
                </p>
                <p className="font-sans md:text-2xl lg:text-3xlxl text-gray-800 leading-relaxed mb-8 text-center bg-white rounded-2xl">
                    To apply, please click the button below and submit your application.
                </p>


                <div className="flex justify-center">
                    <Link href="/job-application">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg text-xl shadow-xl mb-8"
                        >
                            Application
                        </button>
                    </Link>
                </div>

                <JobPosition
                    title="Field Technician/Laborer"
                    icon={<FaHardHat/>}
                    summary="The Field Technician/Laborer will load and unload required material to and from work sites, operate various types of equipment required for the job in a safe manner to include company vehicles and perform basic maintenance and repair of equipment."
                    qualifications={[
                        "1 – 2 years of road construction experience preferred",
                        "Possess a CDL preferred",
                        "Experience working in a team or crew",
                        "Good hand and eye coordination",
                        "Detailed and safety oriented",
                        "Flexible and adaptable to change",
                        "Ability to work independently on assigned duties",
                        "Experience operating construction equipment",
                        "Ability to travel 100% of the time on work assignments",
                        "Ability to lift up to 50 to 75# for extended periods of time",
                        "Ability to follow processes",
                        "Ability to manage a variety of priorities simultaneously while meeting deadlines",
                        "Possess a valid driver’s license"
                    ]}
                    responsibilities={[
                        "Responsible transporting material, equipment and vehicles to and from job sites",
                        "Responsible for proper operation of the equipment ensuring proper quality and consistency standards are followed",
                        "Responsible for the safe operation of all company vehicles",
                        "Manually load and lift material as part of work process",
                        "Read and execute plans and place layout marks",
                        "Perform basic repair and maintenance of equipment",
                        "Safely operate a variety of hand and power tools to include a forklift",
                        "Keep vehicles and job sites clean and free of debris",
                        "Other duties as assigned"
                    ]}
                    jobType="Full-time"
                    compensation="Dependent on Project"
                    benefits="Medical, Dental, and Vision Insurance, Health Reimbursement, Supplemental Insurance, Paid Holidays, H.W.A. (Healthy Workplace Act), 401k"
                />

                {/* Other JobPosition Components Here */}
            </div>
        </section>
    );
}
