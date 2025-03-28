import React from 'react';
import Link from 'next/link';
import { FaHardHat, FaTools, FaWarehouse, FaSign, FaTruck } from 'react-icons/fa';

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
        <div className="w-full max-w-6xl mx-auto bg-black p-8 rounded-lg mb-16">
            <div className="bg-white p-8 rounded-lg flex flex-wrap">
                <div className="w-full text-center mb-8">
                    <div className="flex justify-center mb-6">
                        <span className="text-6xl lg:text-7xl">{icon}</span>
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-semibold text-black">
                        {title}
                    </h2>
                </div>
                <div className="w-full">
                    <p className="font-sans text-2xl md:text-3xl text-gray-700 leading-relaxed mb-8">
                        <strong>Position Summary:</strong> {summary}
                    </p>
                </div>
                <div className="w-full md:w-1/2 mb-8">
                    <h3 className="text-2xl font-semibold text-black mb-4">
                        <strong>Qualifications:</strong>
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 font-sans text-lg md:text-xl">
                        {qualifications.map((qualification, index) => (
                            <li key={index}>{qualification}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-full md:w-1/2 mb-8 ">
                    <h3 className="text-2xl font-semibold text-black mb-4">
                        <strong>Duties & Responsibilities:</strong>
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 mb-6 font-sans text-lg md:text-xl">
                        {responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                        ))}
                    </ul>
                </div>
                {jobType && (
                    <div className="w-full md:w-1/2 mb-8">
                        <h3 className="text-2xl font-semibold text-black mb-4">
                            <strong>Job Type:</strong>
                        </h3>
                        <p className="text-gray-700 font-sans text-lg md:text-xl">{jobType}</p>
                    </div>
                )}
                {compensation && (
                    <div className="w-full md:w-1/2 mb-8">
                        <h3 className="text-2xl font-semibold text-black mb-4">
                            <strong>Compensation:</strong>
                        </h3>
                        <p className="text-gray-700 font-sans text-lg md:text-xl">{compensation}</p>
                    </div>
                )}
                {benefits && (
                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-semibold text-black mb-4">
                            <strong>Benefits:</strong>
                        </h3>
                        <p className="text-gray-700 font-sans text-lg md:text-xl">{benefits}</p>
                    </div>
                )}
            </div>
        </div>
    );
}


export default function JobOpportunities() {
    return (
        <section id="job-opportunities" className="relative min-h-screen py-16 bg-[#F7D117] mt-6">
            <div className="relative w-full h-96 bg-cover bg-center" style={{backgroundImage: "url('/LogoBackground.png')"}}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-7xl font-bold text-white text-center">Job Opportunities</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-6 md:px-12 lg:px-16 py-12 mt-10 bg-white rounded-2xl shadow-lg mb-16 max-w-4xl mx-auto">
                <p className="text-left text-xl md:text-2xl lg:text-3xl leading-relaxed mb-6 font-sans">
                    Apply now online or in person. <br/> <strong>San Bar Construction Corp.</strong> is an Equal Opportunity Employer and encourages diversity in the workforce.
                </p>

                <p className="text-left text-2xl md:text-xl lg:text-4xl font-bold leading-relaxed mb-6">
                    San Bar is a Drug Free Workplace.
                </p>

                <p className="text-left text-xl md:text-xl lg:text-2xl leading-relaxed mb-8 font-sans">
                    To apply, please click the button below and submit your application.
                </p>

                <div className="flex justify-start mt-10">
                    <Link href="/job-application">
                        <button
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg md:text-xl lg:text-2xl shadow-md transition-transform duration-200 transform hover:scale-105"
                        >
                            Apply Here
                        </button>
                    </Link>
                </div>
            </div>


            <JobPosition
                title="Crew Foreman"
                icon={<FaHardHat />}
                summary="San Bar Construction Corp. is currently recruiting to fill the position of crew foreman who will supervise and coordinate the work for highway construction crew members in guardrail and/or sign installation."
                qualifications={[
                    "5 plus years in the highway construction industry",
                    "2-4 years of experience as a lead, foreman, or supervisor",
                    "Good communication skills both written and verbal",
                    "Must perform heavy physical activity",
                    "Ability to operate hydraulically operated jack hammers and other heavy equipment",
                    "Work outdoors with exposure to changing weather conditions",
                    "Good understanding of the construction industry",
                    "Must possess a valid driver’s license"
                ]}
                responsibilities={[
                    "Coordinate daily tasks according to plans, adjust as necessary due to weather and personnel",
                    "Delegate responsibilities to crew members and contractors",
                    "Provide leadership through example and sharing of knowledge/skills",
                    "Plan the work schedule to achieve maximum production",
                    "Ensure safe operation and transportation of equipment",
                    "Instruct crews on procedures and methods to be used",
                    "Monitor and collaborate with crew members to complete projects",
                    "Maintain accurate records and meet deadlines"
                ]}
                jobType="Full-time"
                compensation="Dependent on experience"
                benefits="Medical, Dental and Vision Insurance, Health Reimbursement, Supplemental Insurance, Holiday Pay, HWA, 401K"
            />

            {/*<JobPosition*/}
            {/*    title="Sign Shop Laborer - Entry Level"*/}
            {/*    icon={<FaSign />}*/}
            {/*    summary="San Bar Construction Corp. is hiring full-time entry-level Sign Shop Laborers. Training will be provided for those with the desire to learn and advance with this dynamic company."*/}
            {/*    qualifications={[*/}
            {/*        "Detail oriented",*/}
            {/*        "Dependable and reliable",*/}
            {/*        "Ability to work in a fast-paced environment",*/}
            {/*        "Work independently and in a team environment",*/}
            {/*        "A self-starter",*/}
            {/*        "Ability to multi-task",*/}
            {/*        "Ability to lift 25 to 30 lbs.",*/}
            {/*        "Stand for long periods of time",*/}
            {/*        "Knowledge of using a tape measurer preferred",*/}
            {/*        "Good communication skills"*/}
            {/*    ]}*/}
            {/*    responsibilities={[*/}
            {/*        "Manufacture signs, banners, and digital printed media",*/}
            {/*        "Cut metal, wood, and other materials as required",*/}
            {/*        "Operate various saws and equipment"*/}
            {/*    ]}*/}
            {/*    jobType="Full-time"*/}
            {/*    compensation="$14.50 per hour"*/}
            {/*    benefits="Medical, Dental and Vision Insurance, Health Reimbursement, Supplemental Insurance, Holiday Pay, HWA, 401K"*/}
            {/*/>*/}

            <JobPosition
                title="Warehouse Worker"
                icon={<FaWarehouse />}
                summary="The Warehouse Worker will perform a variety of tasks including receiving and processing incoming stock, materials, or equipment and preparing and shipping orders."
                qualifications={[
                    "Regularly lift or move objects 10 to 50 lbs.",
                    "Occasionally lift or move objects over 100 lbs. using equipment",
                    "Frequently required to stand, walk, stoop, kneel, or crawl",
                    "Good driving record",
                    "Dependable and reliable",
                    "Team player with the ability to work independently"
                ]}
                responsibilities={[
                    "Process requests, pull materials, and prepare orders",
                    "Load and unload trucks and check in merchandise",
                    "Maintain a clean and safe environment",
                    "Deliver orders to customers when needed"
                ]}
                jobType="Full-time"
                compensation="$13.50 per hour"
                benefits="Medical, Dental and Vision Insurance, Health Reimbursement, Supplemental Insurance, Holiday Pay, HWA, 401K"
            />

            <JobPosition
                title="CDL Driver"
                icon={<FaTruck />}
                summary="The CDL Driver will load, transport, and unload materials to and from work sites, operating various equipment safely, and performing basic maintenance."
                qualifications={[
                    "Possess a valid Class A or B CDL License",
                    "Excellent driving record",
                    "1-2 years of road construction experience preferred",
                    "Safety and detail-oriented",
                    "Experience operating construction equipment",
                    "Ability to lift up to 75 lbs. for extended periods",
                    "Flexible and adaptable to change"
                ]}
                responsibilities={[
                    "Transport materials, equipment, and vehicles to job sites",
                    "Perform pre-trip and post-trip inspections",
                    "Load and manually lift materials",
                    "Keep vehicles and job sites clean",
                    "Perform basic repairs as needed"
                ]}
                jobType="Full-time"
                compensation="Dependent on Project"
                benefits="Medical, Dental and Vision Insurance, Health Reimbursement, Supplemental Insurance, Holiday Pay, HWA, 401K"
            />

            {/*<JobPosition*/}
            {/*    title="Field Technician/Laborer"*/}
            {/*    icon={<FaTools />}*/}
            {/*    summary="The Field Technician/Laborer will work on preparing and executing projects professionally, including loading and unloading materials, operating equipment, and basic maintenance."*/}
            {/*    qualifications={[*/}
            {/*        "1-2 years of road construction experience preferred",*/}
            {/*        "Possess a CDL preferred",*/}
            {/*        "Experience operating construction equipment",*/}
            {/*        "Ability to travel 100% of the time",*/}
            {/*        "Ability to lift up to 75 lbs. for extended periods",*/}
            {/*        "Flexible and adaptable to change"*/}
            {/*    ]}*/}
            {/*    responsibilities={[*/}
            {/*        "Transport materials and equipment to job sites",*/}
            {/*        "Perform maintenance of equipment",*/}
            {/*        "Safely operate tools and machinery",*/}
            {/*        "Maintain cleanliness of job sites",*/}
            {/*        "Read and execute plans for layout marks"*/}
            {/*    ]}*/}
            {/*    jobType="Full-time"*/}
            {/*    compensation="Dependent on Project"*/}
            {/*    benefits="Medical, Dental and Vision Insurance, Health Reimbursement, Supplemental Insurance, Holiday Pay, HWA, 401K"*/}
            {/*/>*/}
        </section>
    );
}
