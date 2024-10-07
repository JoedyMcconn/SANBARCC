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
        <div className="w-full max-w-4xl mx-auto bg-black p-6 rounded-lg mb-12">
            <div className="bg-white p-6 rounded-lg flex flex-wrap">
                <div className="w-full text-center mb-6">
                    {/* Move the icon above the title and make it centered */}
                    <div className="flex justify-center mb-4">
                        <span className="text-5xl lg:text-6xl">{icon}</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-semibold text-black">
                        {title}
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
            <div className="relative w-full h-96 bg-cover bg-center"
                 style={{backgroundImage: "url('/LogoBackground.png')"}}>
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="bg-black p-4">
                        <div className="bg-yellow-500 p-4">
                            <h1 className="text-4xl lg:text-7xl font-bold text-white text-center">Job Opportunities</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Text and Apply Button Section */}
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

            {/* Job Listings */}
            <JobPosition
                title="Field Technician/Laborer"
                icon={<FaHardHat />}
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

            <JobPosition
                title="Sign Shop Laborer"
                icon={<FaSign />}
                summary="The Sign Installer will install various types of traffic signs and posts for roads, highways, and parking lots in accordance with MUTCD standards."
                qualifications={[
                    "Detail oriented",
                    "Dependable and reliable",
                    "Ability to work in a fast-paced environment",
                    "Work independently and in a team environment",
                    "A self-starter",
                    "Ability to multi-task",
                    "Ability to lift 25 to 30 lbs",
                    "Stand for long periods of time",
                    "Knowledge and experience working with a tape measurer preferred",
                ]}
                responsibilities={[
                    "Manufacturing signs, banner and digital printed media",
                    "Cut metal, wood and other materials per designated order",
                    "Operate a variety of saws and equipment in the manufacturing process"
                ]}
                jobType="Full-time"
                compensation="$14.50"
                benefits="Medical, Dental, Vision Insurance, 401k, Paid Holidays"
            />

            <JobPosition
                title="Warehouse Laborer"
                icon={<FaWarehouse />}
                summary="The Warehouse Technician will manage the receiving, storing, and shipping of materials and equipment needed for construction projects."
                qualifications={[
                    "2+ years of warehouse or logistics experience",
                    "Knowledge of construction materials and equipment",
                    "Ability to operate forklifts and other warehouse equipment",
                    "Organizational skills and attention to detail",
                    "Ability to lift heavy materials",
                    "Possess a valid driver’s license"
                ]}
                responsibilities={[
                    "Receive and verify incoming materials and equipment",
                    "Organize and store items in the warehouse",
                    "Prepare materials for delivery to job sites",
                    "Maintain accurate inventory records",
                    "Ensure the cleanliness and safety of the warehouse",
                    "Other duties as assigned"
                ]}
                jobType="Full-time"
                compensation="$13.50"
                benefits="Medical, Dental, Vision Insurance, 401k, Paid Holidays"
            />
        </section>
    );
}
