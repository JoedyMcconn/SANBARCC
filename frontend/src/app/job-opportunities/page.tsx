import React from 'react';
import Link from 'next/link';
import {FaTools, FaWarehouse, FaTruck, FaCalculator, FaSign, FaHardHat, FaUserTie} from 'react-icons/fa';

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
                title="Retail Store Associate"
                icon={<FaUserTie />}
                summary="We are seeking a Retail Store Associate to serve as the first point of contact for walk-in customers and incoming sales calls. This role supports inside sales, customer orders, billing, month-end reporting, and accounts receivable processes while helping maintain a clean, organized, and customer-focused retail environment."
                qualifications={[
                    "1+ years of relevant professional experience",
                    "Experience processing and managing invoices",
                    "Strong organizational, time management, and active listening skills",
                    "Proficient in Microsoft Office Suite, including Microsoft Excel",
                    "Experience with database applications and business software systems",
                    "Ability to multitask, prioritize responsibilities, and solve problems effectively",
                    "Self-motivated, dependable, and able to work independently",
                    "Excellent written and verbal communication skills with a professional and personable demeanor",
                    "Construction industry experience preferred",
                    "Ability to handle confidential and sensitive information with discretion",
                    "Following a conditional offer, employment is contingent on passing a pre-employment drug test and completion of a satisfactory background check",
                    "San Bar Construction Corp. is an Equal Opportunity Employer and encourages diversity in the workforce"
                ]}
                responsibilities={[
                    "Assist walk-in customers and respond to incoming sales calls",
                    "Prepare customer quotes and orders while confirming inventory availability prior to sale",
                    "Assist the Front Desk position with daily phone coverage",
                    "Coordinate with the Sign Shop Production Supervisor to ensure orders are correct and completed in a timely manner",
                    "Call customers when orders are ready for pickup and confirm packing slips are acknowledged for completed orders",
                    "Work with the Warehouse Manager when customer orders need to be shipped",
                    "Maintain customer sales files, quote files, equipment rental files, and pending sales records",
                    "Assist the Director of Inventory and Sales with PPE distribution to employees as needed",
                    "Keep the store clean, stocked, staged, and organized to promote sales",
                    "Create and complete the purchase order process",
                    "Monitor taxable and non-taxable purchases and invoice accordingly",
                    "Process credit card and check payments and handle receipts according to San Bar policies and procedures",
                    "Invoice customers daily, including tax, freight, and credit card fees when applicable",
                    "Close out invoices at month end and prepare monthly reports for the Director of Inventory and Sales",
                    "Monitor sales accounts receivable bi-weekly, review AR aging monthly, and follow up on balances older than 31 days",
                    "Assist customers with invoice copies, credits, and account questions to help resolve past-due issues",
                    "Meet with the Director of Inventory and Sales and CFO/Treasurer to review collection issues and receivables"
                ]}
                jobType="Full-time"
                compensation="$18.00/hour"
                benefits="Medical, Dental, and Vision Insurance, Health Reimbursement Account (HRA), Supplemental Insurance, Holiday Pay, Healthy Workplace Act Sick Leave (HWA), 401K, and Vacation Leave"
            />


            <JobPosition
                title="Sign Designer / Print & Production Technician"
                icon={<FaSign />}
                summary="San Bar Construction Corp. is a fast-paced roadway construction company specializing in roadway striping, traffic sign fabrication and installation, and guardrail installation. We are seeking a Sign Designer / Print & Production Technician to join our in-house sign shop. This is a hands-on production role ideal for someone with experience in sign design, fabrication setup, and large-format printing rather than traditional or marketing-focused graphic design."
                qualifications={[
                    "Experience in sign design or production, ideally within a fabrication, construction, or municipal signage environment",
                    "Proficiency in Adobe Illustrator required; experience with FlexiPrint/FlexiSign or similar sign-making software is a plus",
                    "Strong computer skills, including the ability to import/export files and manage digital assets",
                    "Understanding of sign construction processes including materials, substrates, vinyl application, and lamination; training provided",
                    "Excellent attention to detail with the ability to manage print queues and prioritize tasks independently",
                    "Strong problem-solving abilities with clear verbal and written communication skills",
                    "Reliable, with consistent attendance, a positive attitude, and a solid work ethic",
                    "Comfortable working in a fast-paced, production-driven environment",
                    "Physically able to lift up to 50 lbs occasionally and remain on your feet for extended periods",
                    "1–2 years in a sign shop or print production role",
                    "High school diploma or equivalent"
                ]}
                responsibilities={[
                    "Collaborate with the sign shop production supervisor and internal departments to design, set up, and print various signs that meet project requirements",
                    "Prepare files for printing, plotting, cutting, and laminating using large-format printers and related equipment",
                    "Manage multiple signage projects, ensuring accurate production and timely delivery",
                    "Perform daily, weekly, and monthly maintenance on printers, laminators, and other sign shop equipment",
                    "Ensure that all materials and supplies are stocked for uninterrupted production",
                    "Occasionally interact with customers to clarify specifications or provide sign proofs"
                ]}
                jobType="Full-time"
                compensation="$23.00 per hour"
                benefits="Medical, Dental and Vision Insurance, HRA, Supplemental Insurance, Holiday Pay, HWA, 401K, and Vacation"
            />

            {/*<JobPosition*/}
            {/*    title="Senior Project Manager"*/}
            {/*    icon={<FaHardHat />}*/}
            {/*    summary="San Bar Construction Corp. is seeking an experienced Senior Project Manager to oversee roadway infrastructure projects throughout New Mexico. This position is responsible for managing multiple projects from contract award through closeout, coordinating field operations, maintaining client and vendor relationships, and ensuring projects are completed safely, efficiently, and profitably."*/}
            {/*    qualifications={[*/}
            {/*        "Minimum five (5) years of construction management, project management, operations management, or related experience",*/}
            {/*        "Strong organizational, leadership, and communication skills",*/}
            {/*        "Ability to manage multiple projects simultaneously",*/}
            {/*        "Proficiency with Microsoft Office Suite",*/}
            {/*        "Valid driver's license with acceptable driving record",*/}
            {/*        "Ability to read and interpret plans and specifications",*/}
            {/*        "Experience with roadway construction preferred",*/}
            {/*        "Experience with pavement markings preferred",*/}
            {/*        "Experience with traffic control operations preferred",*/}
            {/*        "Experience with guardrail installation preferred",*/}
            {/*        "Experience with roadway signage preferred",*/}
            {/*        "Experience with NMDOT projects preferred",*/}
            {/*        "Experience with public works contracting preferred",*/}
            {/*        "Experience with construction scheduling preferred",*/}
            {/*        "Experience with contract administration preferred",*/}
            {/*        "Experience with estimating and project budgeting preferred"*/}
            {/*    ]}*/}
            {/*    responsibilities={[*/}
            {/*        "Manage multiple roadway construction projects simultaneously",*/}
            {/*        "Receive and administer contracts from award through closeout",*/}
            {/*        "Order and coordinate delivery of pavement marking materials, guardrail components, square tubing, sign materials, and other project-related products",*/}
            {/*        "Schedule field crews, equipment, and project activities",*/}
            {/*        "Coordinate crew assignments and lodging arrangements",*/}
            {/*        "Develop and maintain strong relationships with vendors, customers, subcontractors, and NMDOT personnel",*/}
            {/*        "Track project costs, budgets, profitability, and production",*/}
            {/*        "Prepare and manage change orders, RFIs, submittals, and project documentation",*/}
            {/*        "Conduct frequent field visits throughout New Mexico",*/}
            {/*        "Assist with project billing and payment tracking",*/}
            {/*        "Lead collection efforts and actively monitor Accounts Receivable aging reports",*/}
            {/*        "Work directly with customers, project managers, and accounting personnel to ensure receivables remain current and outstanding balances are collected promptly"*/}
            {/*    ]}*/}
            {/*    jobType="Full-time"*/}
            {/*    compensation="Dependent on Experience"*/}
            {/*    benefits="Medical, Dental and Vision Insurance, Health Reimbursement Account (HRA), Supplemental Insurance, Holiday Pay, Healthy Workplace Act Sick Leave (HWA), 401K, Vacation Leave, and Company Vehicle"*/}
            {/*/>*/}

            <JobPosition
                title="Diesel Technician / Mechanic"
                icon={<FaTools />}
                summary="San Bar Construction Corporation is currently recruiting to fill the position of Diesel Technician / Mechanic. The primary duties include diagnosis, repair, and maintenance of primarily diesel-powered vehicles, equipment, light-duty trucks, and heavy-duty trucks. San Bar Construction repairs, rebuilds, and manufactures specialized equipment for highway striping, guardrail, rumble strip, and ultra-high-pressure water blasting in a large climate-controlled mechanic shop."
                qualifications={[
                    "Minimum of 5 years automotive/diesel mechanic experience",
                    "Valid driver license required; CDL license is a plus but not required",
                    "Proficiency with maintenance and repair tools",
                    "Strong attention to detail",
                    "Ability to meet all company, government, and equipment-related safety requirements",
                    "Ability to communicate effectively with operators, supervisors, and co-workers",
                    "Physically fit and able to lift up to 60 pounds",
                    "Capable of climbing, kneeling, twisting, and bending as required to complete necessary repairs"
                ]}
                responsibilities={[
                    "Perform inspections, diagnosis, troubleshooting, maintenance, and repair of highway safety construction vehicles and equipment",
                    "Analyze diagnostic test results",
                    "Service vehicles and equipment as required to ensure safe and proper operation",
                    "Operate equipment such as forklifts, skid loaders, stationary and portable air compressors, brooms, boom trucks, and other industry-related equipment",
                    "Diagnose and repair a wide variety of mechanical and electrical equipment",
                    "Read and understand specifications, schematics, and manuals",
                    "Ensure cleanliness of the shop"
                ]}
                jobType="Full-time"
                compensation="Dependent on Experience"
                benefits="Medical, Dental and Vision Insurance, HRA, Supplemental Insurance, Holiday Pay, HWA, 401K, Vacation"
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