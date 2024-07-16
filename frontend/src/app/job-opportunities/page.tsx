import React from 'react';
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
        <section id="job-opportunities" className="relative min-h-screen py-16 bg-yellow-300 mt-8">
            {/* Banner */}
            <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('/job-opportunities-banner.jpg')" }}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white text-center">Job Opportunities</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 lg:px-16 py-30 mt-10">
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 font-sans text-center">
                    Applicants are required to apply in person at the business location. San Bar Construction Corp. is an Equal Opportunity Employer and encourages diversity in the workforce.
                </p>

                <JobPosition
                    title="Field Technician/Laborer"
                    icon={<FaHardHat />}
                    summary="The Field Technician/Laborer will work in a team environment ensuring daily tasks of preparing and executing of projects are performed in a professional and safe manner. The Field Technician/Laborer will load and unload required material to and from work sites, operate various types of equipment required for the job in a safe manner to include company vehicles and perform basic maintenance and repair of equipment."
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
                    benefits="Medical and Dental Insurance, PTO, Holiday Pay"
                />

                <JobPosition
                    title="Diesel Technician/Mechanic"
                    icon={<FaTools />}
                    summary="The Diesel Technician/Mechanic will perform a variety of skilled duties which may involve inspections, diagnosis, troubleshooting, maintenance and repair of highway safety construction vehicles and equipment."
                    qualifications={[
                        "Minimum of 5 years automotive/diesel mechanic experience",
                        "Valid driver license, CDL license a plus but not required",
                        "Proficiency with maintenance and repair tools",
                        "Attention to detail",
                        "Meet all company, government and equipment related safety requirements",
                        "Communicate effectively with operators, supervisors and co-workers",
                        "Physically fit and able to lift up to 60 pounds",
                        "Capable of climbing, kneeling, twisting and bending as required to complete necessary repair",
                        "Must provide own basic hand tools"
                    ]}
                    responsibilities={[
                        "Perform a variety of skilled duties which may involve inspections, diagnosis, troubleshooting, maintenance and repair of highway safety construction vehicles and equipment.",
                        "Analyze diagnostic test results",
                        "Service vehicles and equipment as required ensuring safe and proper operation",
                        "Operate equipment such as forklifts, skid loaders, stationary as well as portable air compressor, brooms, boom trucks and other equipment pertinent to industry",
                        "Diagnose and repair a wide variety of mechanical and electrical equipment",
                        "Read and understand specifications, schematics and manuals",
                        "Ensure cleanliness of the shop"
                    ]}
                    jobType="Full-time"
                    compensation="Dependent on experience"
                    benefits="Medical and Dental Insurance, Sick and Vacation Time, Holiday Pay, 401K"
                />

                <JobPosition
                    title="Warehouse Worker"
                    icon={<FaWarehouse />}
                    summary="The Warehouse Worker will perform a variety of functions that include receiving and processing incoming stock, materials or equipment verifying proper documentation. Load and unload vehicles utilizing forklift as required. Pick and fill orders from stock, pack and ship orders."
                    qualifications={[
                        "Regularly lift or move objects 10 to 50 lbs.",
                        "Occasionally lift or move objects that weigh more than 100lbs utilizing equipment provided",
                        "Frequently required to stand, walk, stoop, kneel, crouch or crawl",
                        "Occasionally required to sit and climb or balance",
                        "Dependable and reliable",
                        "Good driving record",
                        "Team player with ability to work independently"
                    ]}
                    responsibilities={[
                        "Prepare orders by processing requests and supply orders, pull materials, pack boxes and place orders in delivery area",
                        "Load and secure merchandise for transportation",
                        "Unload trucks and check in merchandise",
                        "Verify bill-of-lading and file appropriately",
                        "Sort and place materials in designated areas",
                        "Maintain a safe and clean environment; organize, clean, sweep, mop and keep areas the warehouse orderly",
                        "Wear proper safety equipment and follow safety requirements",
                        "Deliver orders to customers when necessary"
                    ]}
                    jobType="Full-time, Summer Hire"
                    compensation="Dependent on experience"
                    benefits="Medical and Dental Insurance, PTO, Holiday Pay"
                />

            </div>
        </section>
    );
}
