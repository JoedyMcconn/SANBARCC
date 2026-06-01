import React from 'react';
import Link from 'next/link';
import {FaTools, FaWarehouse, FaTruck, FaCalculator} from 'react-icons/fa';

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

function JobPosition({
                         title,
                         icon,
                         summary,
                         qualifications,
                         responsibilities,
                         jobType,
                         compensation,
                         benefits,
                     }: JobPositionProps) {
    return (
        <div className="w-full max-w-4xl mx-auto bg-black/90 p-2 rounded-2xl mb-6 shadow-xl">
            <div className="bg-white p-4 md:p-5 rounded-2xl border border-black/10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7D117] text-xl text-black shadow-sm">
                        {icon}
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-black leading-tight">
                        {title}
                    </h2>
                </div>

                <p className="font-sans text-sm text-gray-700 leading-relaxed mb-4">
                    <strong>Position Summary:</strong> {summary}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div>
                        <h3 className="text-base font-bold text-black mb-2">
                            Qualifications
                        </h3>

                        <ul className="list-disc pl-5 text-gray-700 font-sans text-sm leading-snug space-y-1">
                            {qualifications.map((qualification, index) => (
                                <li key={index}>{qualification}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base font-bold text-black mb-2">
                            Duties & Responsibilities
                        </h3>

                        <ul className="list-disc pl-5 text-gray-700 font-sans text-sm leading-snug space-y-1">
                            {responsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5 pt-4 border-t border-gray-200">
                    {jobType && (
                        <div className="rounded-xl bg-gray-50 p-3 border border-gray-100">
                            <h3 className="text-sm font-bold text-black mb-1">
                                Job Type
                            </h3>
                            <p className="text-gray-700 font-sans text-sm">{jobType}</p>
                        </div>
                    )}

                    {compensation && (
                        <div className="rounded-xl bg-gray-50 p-3 border border-gray-100">
                            <h3 className="text-sm font-bold text-black mb-1">
                                Compensation
                            </h3>
                            <p className="text-gray-700 font-sans text-sm">
                                {compensation}
                            </p>
                        </div>
                    )}

                    {benefits && (
                        <div className="rounded-xl bg-gray-50 p-3 border border-gray-100">
                            <h3 className="text-sm font-bold text-black mb-1">
                                Benefits
                            </h3>
                            <p className="text-gray-700 font-sans text-sm leading-relaxed">
                                {benefits}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function JobOpportunities() {
    return (
        <section id="job-opportunities" className="relative min-h-screen py-8 bg-[#F7D117] mt-6">
            <div
                className="relative w-full h-48 md:h-64 bg-cover bg-center"
                style={{ backgroundImage: "url('/LogoBackground.png')" }}
            >
                <div className="absolute inset-0 flex justify-center items-center px-4">
                    <div className="bg-black/90 p-2 rounded-xl shadow-xl">
                        <div className="bg-[#F7D117] px-5 py-3 rounded-lg border border-white/30">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight">
                                Job Opportunities
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-5 md:px-8 py-7 mt-8 bg-white rounded-2xl shadow-xl mb-8 max-w-4xl mx-auto border border-black/10">
                <p className="text-left text-base md:text-lg leading-relaxed mb-4 font-sans text-gray-800">
                    Apply now online or in person. <br />
                    <strong>San Bar Construction Corp.</strong> is an Equal Opportunity Employer and encourages diversity in the workforce.
                </p>

                <p className="text-left text-xl md:text-2xl font-bold leading-relaxed mb-4 text-black">
                    San Bar is a Drug Free Workplace.
                </p>

                <p className="text-left text-base md:text-lg leading-relaxed mb-6 font-sans text-gray-800">
                    To apply, please click the button below and submit your application.
                </p>

                <div className="flex justify-start">
                    <Link href="/job-application">
                        <button className="bg-black hover:bg-gray-900 text-white font-bold py-2.5 px-5 rounded-xl text-base md:text-lg shadow-md transition-transform duration-200 transform hover:scale-105">
                            Apply Here
                        </button>
                    </Link>
                </div>
            </div>

            <JobPosition
                title="Accountant"
                icon={<FaCalculator />}
                summary="The Accountant is responsible for supporting the company’s financial operations through fixed asset management, inventory control, month-end accounting activities, tax reporting, and insurance administration. This position ensures the accuracy of financial records related to capital assets, inventory, and operational expenses while assisting with month-end close processes and regulatory reporting. The Accountant will report directly to the CFO and work closely with Accounting, Fleet Management, and Operations personnel to maintain accurate accounting records."
                qualifications={[
                    "Bachelor’s degree in Accounting required",
                    "3-5 years of accounting experience preferred",
                    "Construction industry experience preferred",
                    "Experience with fixed assets, inventory accounting, and month-end close processes preferred",
                    "Strong organizational and analytical skills",
                    "Ability to maintain accurate financial records",
                    "Ability to work independently and as part of a team",
                    "Professional integrity and attention to detail"
                ]}
                responsibilities={[
                    "Ensure capitalized assets are recorded properly",
                    "Coordinate with Accounts Payable on new fixed assets",
                    "Maintain current year vehicle lists and additions worksheets",
                    "Review asset disposals with Fleet Manager and maintain disposal records",
                    "Reconcile additions worksheets to the General Ledger",
                    "Coordinate with CPA regarding fixed asset additions and disposals",
                    "Book depreciation and disposal journal entries",
                    "Maintain vehicle, property, and liability insurance records",
                    "Coordinate insurance and registration updates for vehicles and equipment",
                    "Manage inventory control processes and cost of materials sold calculations",
                    "Identify obsolete inventory and assist with disposition planning",
                    "Assist with month-end close and account reconciliations",
                    "Process daily cash journal entries and maintain petty cash records",
                    "Prepare tax reporting including CRS-1, WWT-1, and CMP-1 filings",
                    "Serve as backup to the CFO when needed",
                    "Perform other accounting duties as assigned"
                ]}
                jobType="Full-time"
                compensation="Dependent on Experience"
                benefits="Medical, Dental and Vision Insurance, Health Reimbursement Account (HRA), Supplemental Insurance, Holiday Pay, Healthy Workplace Act Sick Leave (HWA), 401K, and Vacation Leave"
            />

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
                    "Team player with the ability to work independently",
                ]}
                responsibilities={[
                    "Process requests, pull materials, and prepare orders",
                    "Load and unload trucks and check in merchandise",
                    "Maintain a clean and safe environment",
                    "Deliver orders to customers when needed",
                ]}
                jobType="Full-time"
                compensation="$15.00 per hour"
                benefits="Medical, Dental and Vision Insurance, Health Reimbursement, Supplemental Insurance, Holiday Pay, HWA, 401K"
            />

            <JobPosition
                title="Payroll Specialist"
                icon={<FaCalculator />}
                summary="San Bar Construction Corporation is currently recruiting to fill the position of Payroll Specialist. The primary function of the Payroll Specialist will be to process weekly payroll for employees, including certified payrolls, employee benefit changes, maintaining payroll database integrity, accounting-related activities as directed, and providing excellent customer service."
                qualifications={[
                    "3+ years of payroll processing experience required",
                    "Construction in-house payroll experience required",
                    "Certified Payroll (Davis Bacon) experience and related reporting required",
                    "Strong work ethic, professional integrity, and reliability in handling highly confidential information",
                    "Strong time management and organizational skills",
                    "Self-starter capable of working with minimal supervision",
                    "Strong Excel skills",
                    "Strong Microsoft Office skills",
                    "Experience with General Ledger account responsibilities as assigned by the Controller"
                ]}
                responsibilities={[
                    "Process weekly payroll for 80+ employees",
                    "Process bonus payroll",
                    "Process weekly 401K uploads",
                    "Process all Certified Payrolls weekly and ensure delivery to job-specific contractors",
                    "Enter new employee information during onboarding and deactivate employees during offboarding",
                    "Process employee changes including pay rates, tax withholding, direct deposit, and deductions",
                    "Calculate child support garnishments and liens and coordinate third-party payroll payments",
                    "Maintain vacation and sick leave records and monitor accuracy",
                    "Provide exceptional customer service to employees",
                    "Serve as a resource for employee payroll and paystub questions",
                    "Perform all other duties as assigned"
                ]}
                jobType="Full-time"
                compensation="Dependent on Experience"
                benefits="Medical, Dental and Vision Insurance, Health Reimbursement Account (HRA), Supplemental Insurance, Holiday Pay, Healthy Workplace Act Sick Leave (HWA), 401K, and Vacation Leave"
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
                    "Flexible and adaptable to change",
                ]}
                responsibilities={[
                    "Transport materials, equipment, and vehicles to job sites",
                    "Perform pre-trip and post-trip inspections",
                    "Load and manually lift materials",
                    "Keep vehicles and job sites clean",
                    "Perform basic repairs as needed",
                ]}
                jobType="Full-time"
                compensation="Dependent on Project"
                benefits="Medical, Dental and Vision Insurance, Health Reimbursement, Supplemental Insurance, Holiday Pay, HWA, 401K"
            />

            <JobPosition
                title="Field Technician / Laborer"
                icon={<FaTools />}
                summary="The Field Technician/Laborer will work on preparing and executing projects professionally, including loading and unloading materials, operating equipment, and basic maintenance."
                qualifications={[
                    "1-2 years of road construction experience preferred",
                    "Possess a CDL preferred",
                    "Experience operating construction equipment",
                    "Ability to travel 100% of the time",
                    "Ability to lift up to 75 lbs. for extended periods",
                    "Flexible and adaptable to change",
                ]}
                responsibilities={[
                    "Transport materials and equipment to job sites",
                    "Perform maintenance of equipment",
                    "Safely operate tools and machinery",
                    "Maintain cleanliness of job sites",
                    "Read and execute plans for layout marks",
                ]}
                jobType="Full-time"
                compensation="Dependent on Project"
                benefits="Medical, Dental and Vision Insurance, Health Reimbursement, Supplemental Insurance, Holiday Pay, HWA, 401K"
            />
        </section>
    );
}