"use client";

import React, { useEffect, useState } from "react";

// Declare grecaptcha as a global object
declare global {
    interface Window {
        grecaptcha: any;
    }
}

export default function JobApplicationForm() {
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

    useEffect(() => {
        // Load the reCAPTCHA script once
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;
        script.defer = true;

        // Append the script to the document head
        document.head.appendChild(script);

        script.onload = () => {
            if (window.grecaptcha) {
                window.grecaptcha.ready(() => {
                    // Check if the reCAPTCHA widget has already been rendered
                    const existingRecaptcha = document.getElementById("recaptcha-container")?.childElementCount;
                    if (existingRecaptcha === 0) {
                        // Render the reCAPTCHA widget if it hasn't been rendered yet
                        window.grecaptcha.render("recaptcha-container", {
                            sitekey: "6LdZKUYqAAAAAJgimqqGQG0cfJ4-IqWP3equbrMJ",
                            callback: handleRecaptchaSuccess,
                        });
                    }
                });
            }
        };
    }, []);

    // Function that is called when reCAPTCHA is completed successfully
    const handleRecaptchaSuccess = (token: string) => {
        setRecaptchaToken(token); // Save the token in state
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // Prevent form submission

        // Check if reCAPTCHA has been completed
        if (!recaptchaToken) {
            alert("Please complete the reCAPTCHA before submitting the form.");
            return;
        }

        // If reCAPTCHA is completed, proceed with form submission
        (event.target as HTMLFormElement).submit();
    };

    return (
        <section className="container mx-auto px-6 md:px-12 lg:px-16 py-30 mt-40 bg-white">
            <h2 className="text-6xl font-bold text-center mb-20">Pre-Employment Application</h2>
            <form action="https://getform.io/f/ayvpzjrb" method="POST" className="bg-gray-100 p-6 rounded-lg shadow-lg">
                {/* Applicant Information */}
                <h3 className="text-4xl font-semibold mb-6">Applicant Information</h3>

                {/* Full Name and Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="fullName" className="block text-lg font-sans mb-2">Full Name</label>
                        <input type="text" name="Full-Name" id="fullName" required
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="date" className="block text-lg font-sans mb-2">Date</label>
                        <input type="date" name="Date" id="date" required
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                {/* Address */}
                <div>
                    <label htmlFor="address" className="block text-lg font-sans my-2">Address (Street Address, City, State, Zip Code)</label>
                    <input type="text" name="Address" id="address" required
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                {/* Phone, Email, Driver's License, and Class */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="phone" className="block text-lg font-sans my-2">Cell #</label>
                        <input type="tel" name="Phone" id="phone" required
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-sans my-2">Email Address</label>
                        <input type="email" name="Email-Address" id="email" required
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="driversLicense" className="block text-lg font-sans my-2">Driver’s License #</label>
                        <input type="text" name="Drivers-License" id="driversLicense" required
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="class" className="block text-lg font-sans my-2">Class of Drivers License</label>
                        <input type="text" name="Drivers-License-Class" id="class" required
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                {/* Date Available and Wage Desired */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="dateAvailable" className="block text-lg font-sans my-2">Date Available</label>
                        <input type="date" name="Date-Available" id="dateAvailable" required
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="wageDesired" className="block text-lg font-sans my-2">Wage Desired</label>
                        <input type="text" name="Wage-Desired" id="wageDesired" required
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                {/* Employment Desired */}
                <div>
                    <label className="block text-lg font-sans my-4">Employment Desired</label>
                    <div className="flex gap-4 font-sans">
                        <label className="flex items-center">
                            <input type="radio" name="Employment-Type" value="Full-time" required
                                   className="mr-2"/> Full-time
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="Employment-Type" value="Part-time" required
                                   className="mr-2"/> Part-time
                        </label>
                    </div>
                </div>

                {/* Employment Status and Employer Contact */}
                <div>
                    <label className="block text-lg font-sans my-2">Are you currently employed?</label>
                    <div className="flex gap-4 font-sans mt-2">
                        <label className="flex items-center">
                            <input type="radio" name="Currently-Employed" value="Yes" required className="mr-2"/> Yes
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="Currently-Employed" value="No" required className="mr-2"/> No
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block text-lg font-sans my-2">May we contact your employer?</label>
                    <div className="flex gap-4 font-sans">
                        <label className="flex items-center">
                            <input type="radio" name="Contact-Employer" value="Yes" required className="mr-2"/> Yes
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="Contact-Employer" value="No" required className="mr-2"/> No
                        </label>
                    </div>
                </div>

                {/* Cannabis/Marijuana Card */}
                <div>
                    <label className="block text-lg font-sans my-2">Do you possess a medical cannabis/marijuana card?</label>
                    <div className="flex gap-4 font-sans">
                        <label className="flex items-center">
                            <input type="radio" name="Marijuana-Card" value="Yes" required className="mr-2"/> Yes
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="Marijuana-Card" value="No" required className="mr-2"/> No
                        </label>
                    </div>
                </div>




                {/* Positions Applying For */}
                <h3 className="text-2xl font-sans my-6">Position(s) Applying for</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans mb-6">
                    <label className="flex items-center">
                        <input type="checkbox" name="position" value="Laborer" className="mr-2"/> Laborer
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" name="position" value="Field/Technician" className="mr-2"/> Field/Technician
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" name="position" value="Striper" className="mr-2"/> Guardrail Operator
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" name="position" value="Striper Operator" className="mr-2"/> Striper
                        Operator
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" name="position" value="Striper Driver" className="mr-2"/> Striper
                        Driver
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" name="position" value="Truck Driver" className="mr-2"/> CDL Truck Driver
                    </label>

                    <label className="flex items-center">
                        <input type="checkbox" name="position" value="Clerical" className="mr-2"/> Clerical
                    </label>
                    <label className="flex items-center">
                        <input type="checkbox" name="position" value="Other" className="mr-2"/> Other:
                    </label>
                </div>
                <div>
                    <label htmlFor="skills" className="block text-xl font-sans mb-2">If Other, Specify:</label>
                    <textarea name="skills" id="skills" required
                              className="w-full p-3 rounded-md border border-gray-300 mb-4"></textarea>
                </div>

                {/* Skills/Experience */}
                <div>
                    <label htmlFor="skills" className="block text-xl font-sans mb-2">What specific skills,
                        experience, or qualifications do you possess relating to the position?</label>
                    <textarea name="skills" id="skills" required
                              className="w-full p-3 rounded-md border border-gray-300 mb-4"></textarea>
                </div>

                {/* Previous Employment with Company */}
                <div>
                    <label className="block text-lg font-sans mb-2">Have you ever worked for this company?</label>
                    <div className="flex gap-4 font-sans my-2">
                        <label className="flex items-center">
                            <input type="radio" name="Worked-For-Company" value="Yes" required className="mr-2"/> Yes
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="Worked-For-Company" value="No" required className="mr-2"/> No
                        </label>
                    </div>
                    <div className="mt-2">
                        <label htmlFor="workedForCompanyWhen" className="block text-lg font-sans my-2">If yes,
                            when?</label>
                        <input type="text" name="Worked-For-Company-When" id="workedForCompanyWhen"
                               className="w-full p-3 rounded-md border border-gray-300 mb-4"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="relatives" className="block text-xl font-sans my-2">Do you have any relatives
                        employed by this company? If yes, please list their names:</label>
                    <input type="text" name="relatives" id="relatives"
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>
                <div>
                    <label className="block text-lg font-sans my-2">Referral Source</label>
                    <div className="flex gap-4 font-sans my-2">
                        <label className="flex items-center ">
                            <input type="radio" name="Referral-Source" value="Advertisement"
                                   className="mr-2"/> Advertisement
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="Referral-Source" value="Employment Agency"
                                   className="mr-2"/> Employment Agency
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="Referral-Source" value="Friend" className="mr-2"/> Friend
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="Referral-Source" value="Relative" className="mr-2"/> Relative
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="Referral-Source" value="Other" className="mr-2"/> Other
                        </label>
                    </div>
                    <div className="mt-2">
                        <label htmlFor="referralSourceName" className="block text-lg font-sans my-2">If other,
                            please specify Name:</label>
                        <input type="text" name="Referral-Source-Name" id="referralSourceName"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <h3 className="text-4xl font-semibold my-8">Previous Employment</h3>

                {/* First Previous Employment (Required) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans my-2">
                    <div>
                        <label htmlFor="company1" className="block text-lg ">Company</label>
                        <input type="text" name="Company-Name-1" id="company1" required
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="phone1" className="block text-lg ">Phone</label>
                        <input type="tel" name="Company-Phone-1" id="phone1" required
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <div>
                    <label htmlFor="address1" className="block text-lg font-sans my-2">Address (Street Address, City, State, Zip Code)</label>
                    <input type="text" name="Company-Address-1" id="address1" required
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans my-2">
                    <div>
                        <label htmlFor="supervisor1" className="block text-lg ">Supervisor</label>
                        <input type="text" name="Company-Supervisor-1" id="supervisor1" required
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="jobTitle1" className="block text-lg ">Job Title</label>
                        <input type="text" name="Job-Title-1" id="jobTitle1" required
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans my-2">
                    <div>
                        <label htmlFor="startingSalary1" className="block text-lg ">Starting Salary</label>
                        <input type="text" name="Starting-Salary-1" id="startingSalary1" required
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="endingSalary1" className="block text-lg">Ending Salary</label>
                        <input type="text" name="Ending-Salary-1" id="endingSalary1" required
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <div>
                    <label htmlFor="responsibilities1" className="block text-lg font-sans my-2">Responsibilities</label>
                    <textarea name="Responsibilities-1" id="responsibilities1" required
                              className="w-full p-3 rounded-md border border-gray-300"></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans my-2">
                    <div>
                        <label htmlFor="startDate1" className="block text-lg ">Start Date</label>
                        <input type="date" name="Start-Date-1" id="startDate1" required
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="endDate1" className="block text-lg ">End Date</label>
                        <input type="date" name="End-Date-1" id="endDate1" required
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <div>
                    <label htmlFor="reasonForLeaving1" className="block text-lg font-sans my-2">Reason for Leaving</label>
                    <input type="text" name="Reason-For-Leaving-1" id="reasonForLeaving1" required
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                <div>
                    <label className="block text-lg font-sans my-2">May we contact your previous supervisor for a reference?</label>
                    <div className="flex gap-4">
                        <label className="flex items-center">
                            <input type="radio" name="Contact-Supervisor-1" value="Yes" className="mr-2" required/> Yes
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="Contact-Supervisor-1" value="No" className="mr-2" required/> No
                        </label>
                    </div>
                </div>


                {/* Second Previous Employment (Optional) */}
                <div className="my-8">
                    <h4 className="text-3xl font-semibold mb-4">Second Previous Employment (Optional)</h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans my-2">
                    <div>
                        <label htmlFor="company2" className="block text-lg">Company</label>
                        <input type="text" name="Company-Name-2" id="company2"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="phone2" className="block text-lg ">Phone</label>
                        <input type="tel" name="Company-Phone-2" id="phone2"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <div>
                    <label htmlFor="address2" className="block text-lg font-sans my-2">Address (Street Address, City, State, Zip Code)</label>
                    <input type="text" name="Company-Address-2" id="address2"
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans my-2">
                    <div>
                        <label htmlFor="supervisor2" className="block text-lg ">Supervisor</label>
                        <input type="text" name="Supervisor-2" id="supervisor2"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="jobTitle2" className="block text-lg ">Job Title</label>
                        <input type="text" name="Job-Title-2" id="jobTitle2"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans my-2">
                    <div>
                        <label htmlFor="startingSalary2" className="block text-lg">Starting Salary</label>
                        <input type="text" name="Starting-Salary-2" id="startingSalary2"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="endingSalary2" className="block text-lg">Ending Salary</label>
                        <input type="text" name="Ending-Salary-2" id="endingSalary2"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <div>
                    <label htmlFor="responsibilities2" className="block text-lg font-sans my-2">Responsibilities</label>
                    <textarea name="Responsibilities-2" id="responsibilities2"
                              className="w-full p-3 rounded-md border border-gray-300"></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans my-2">
                    <div>
                        <label htmlFor="startDate2" className="block text-lg ">Start Date</label>
                        <input type="date" name="Start-Date-2" id="startDate2"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="endDate2" className="block text-lg ">End Date</label>
                        <input type="date" name="End-Date-2" id="endDate2"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <div>
                    <label htmlFor="reasonForLeaving2" className="block text-lg font-sans my-2">Reason for Leaving</label>
                    <input type="text" name="Reason-For-Leaving-2" id="reasonForLeaving2"
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                <div>
                    <label className="block text-lg font-sans my-2">May we contact your previous supervisor for a reference?</label>
                    <div className="flex gap-4 font-sans my-2">
                        <label className="flex items-center">
                            <input type="radio" name="Contact-Supervisor-2" value="Yes" className="mr-2"/> Yes
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="Contact-Supervisor-2" value="No" className="mr-2"/> No
                        </label>
                    </div>
                </div>



                <h3 className="text-4xl font-semibold my-8">Education</h3>

                {/* High School */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans my-2">
                    <div>
                        <label htmlFor="highSchool" className="block text-2xl">High School</label>
                        <input type="text" name="High-School" id="highSchool" required
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="highSchoolAddress" className="block text-lg">Address</label>
                        <input type="text" name="High-School-Address" id="highSchoolAddress" required
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans my-2">
                    <div>
                        <label htmlFor="highSchoolFrom" className="block text-lg ">From</label>
                        <input type="date" name="High-School-Start" id="highSchoolFrom" required
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="highSchoolTo" className="block text-lg ">To</label>
                        <input type="date" name="High-School-End" id="highSchoolTo" required
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <div>
                    <label className="block text-lg font-sans my-2">Did you graduate?</label>
                    <div className="flex gap-4 font-sans my-2">
                        <label className="flex items-center">
                            <input type="radio" name="High-School-Graduate" value="Yes" required className="mr-2"/> Yes
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="High-School-Graduate" value="No" required className="mr-2"/> No
                        </label>
                    </div>
                </div>

                {/* College */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans mt-16 mb-4">
                    <div>
                        <label htmlFor="college" className="block text-2xl">College</label>
                        <input type="text" name="College" id="college"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="collegeAddress" className="block text-lg">Address</label>
                        <input type="text" name="College-Address" id="collegeAddress"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans my-2">
                    <div>
                        <label htmlFor="collegeFrom" className="block text-lg">From</label>
                        <input type="date" name="College-Start" id="collegeFrom"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="collegeTo" className="block text-lg">To</label>
                        <input type="date" name="College-End" id="collegeTo"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <div>
                    <label className="block text-lg font-sans my-2">Did you graduate?</label>
                    <div className="flex gap-4 font-sans my-2">
                        <label className="flex items-center">
                            <input type="radio" name="College-Graduate" value="Yes" className="mr-2"/> Yes
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="College-Graduate" value="No" className="mr-2"/> No
                        </label>
                    </div>
                </div>

                <div className="mt-4 font-sans mb-4">
                    <label htmlFor="collegeDegree" className="block text-lg ">Degree</label>
                    <input type="text" name="College-Degree" id="collegeDegree"
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                {/* Other Education */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans mb-4 mt-16">
                    <div>
                        <label htmlFor="other" className="block text-2xl">Other Education</label>
                        <input type="text" name="Other-Education" id="other"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="otherAddress" className="block text-lg">Address</label>
                        <input type="text" name="Other-Education-Address" id="otherAddress"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans my-2">
                    <div>
                        <label htmlFor="otherFrom" className="block text-lg">From</label>
                        <input type="date" name="Other-Education-Start" id="otherFrom"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="otherTo" className="block text-lg">To</label>
                        <input type="date" name="Other-Education-End" id="otherTo"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <div>
                    <label className="block text-lg font-sans my-2">Did you graduate?</label>
                    <div className="flex gap-4 font-sans my-2">
                        <label className="flex items-center">
                            <input type="radio" name="Other-Education-Graduate" value="Yes" className="mr-2"/> Yes
                        </label>
                        <label className="flex items-center">
                            <input type="radio" name="Other-Education-Graduate" value="No" className="mr-2"/> No
                        </label>
                    </div>
                </div>

                <div className="mt-4 font-sans my-2">
                    <label htmlFor="otherDegree" className="block text-lg">Degree</label>
                    <input type="text" name="Other-Education-Degree" id="otherDegree"
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>



                {/* Military Service */}
                <h3 className="text-4xl font-semibold my-8">Military Service (Optional)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans my-2">
                    <div>
                        <label htmlFor="branch" className="block text-lg">Branch</label>
                        <input type="text" name="Military-Branch" id="branch"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="fromMilitary" className="block text-lg">From</label>
                        <input type="date" name="Military-Start" id="fromMilitary"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans my-2">
                    <div>
                        <label htmlFor="toMilitary" className="block text-lg">To</label>
                        <input type="date" name="Military-End" id="toMilitary"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="rankAtDischarge" className="block text-lg">Rank at Discharge</label>
                        <input type="text" name="Military-Rank-At-Discharge" id="rankAtDischarge"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans my-2">
                    <div>
                        <label htmlFor="typeOfDischarge" className="block text-lg">Type of Discharge</label>
                        <input type="text" name="Military-Type-Of-Discharge" id="typeOfDischarge"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <div>
                    <label htmlFor="dischargeExplanation" className="block text-lg font-sans my-2">If other than honorable, explain</label>
                    <textarea name="Military-Discharge-Explanation" id="dischargeExplanation"
                              className="w-full p-3 rounded-md border border-gray-300"></textarea>
                </div>

                {/* References */}
                <h3 className="text-4xl font-semibold my-8">References:</h3>
                {/* Reference 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans my-2">
                    <div>
                        <label htmlFor="referenceName1" className="block text-lg">Name</label>
                        <input type="text" name="Reference-Name-1" id="referenceName1"
                               required className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="referenceCompany1" className="block text-lg">Company/Title</label>
                        <input type="text" name="Reference-Company-1" id="referenceCompany1"
                               required className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <div>
                    <label htmlFor="referencePhone1" className="block text-lg font-sans my-2">Phone #</label>
                    <input type="tel" name="Reference-Phone-1" id="referencePhone1"
                           required className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                {/* Reference 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 font-sans my-2">
                    <div>
                        <label htmlFor="referenceName2" className="block text-lg">Name</label>
                        <input type="text" name="Reference-Name-2" id="referenceName2"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="referenceCompany2" className="block text-lg">Company/Title</label>
                        <input type="text" name="Reference-Company-2" id="referenceCompany2"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <div>
                    <label htmlFor="referencePhone2" className="block text-lg font-sans my-2">Phone #</label>
                    <input type="tel" name="Reference-Phone-2" id="referencePhone2"
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                {/* Reference 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 font-sans my-2">
                    <div>
                        <label htmlFor="referenceName3" className="block text-lg font-semibold mb-2">Name</label>
                        <input type="text" name="Reference-Name-3" id="referenceName3"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                    <div>
                        <label htmlFor="referenceCompany3" className="block text-lg font-semibold mb-2">Company/Title</label>
                        <input type="text" name="Reference-Company-3" id="referenceCompany3"
                               className="w-full p-3 rounded-md border border-gray-300"/>
                    </div>
                </div>

                <div>
                    <label htmlFor="referencePhone3" className="block text-lg font-sans my-2">Phone #</label>
                    <input type="tel" name="Reference-Phone-3" id="referencePhone3"
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>



                <h3 className="text-4xl font-bold my-8">Disclaimer and E-Signature</h3>

                <div className="mb-6 text-lg">
                    <p className="font-sans my-2">
                        I hereby declare that the information is complete and accurate and that there are no omissions.
                        I understand that any conditional or firm offer of employment will be based on the information
                        that I have provided, and that any misrepresentation or omission of relevant information may be
                        grounds for dismissal and will release San Bar Construction Corp. from any liability by having
                        acted upon such facts.
                    </p>
                    <p className="font-sans my-2">
                        I understand that San Bar Construction Corp. may give me a conditional job offer, following
                        which I may be required to furnish information regarding medical problems and Worker’s
                        Compensation claim history, may be asked to take a medical examination, and will be required to
                        pass a drug screen. I will also be required to furnish information regarding any pre-existing
                        physical or mental disability. Your signature below certifies that you have read or have been
                        read and understand this Pre-Employment Application and the conditional employment criteria.
                    </p>
                    <p className="font-sans my-2 text-xl">
                        I hereby authorize San Bar Construction Corp. to investigate and verify the facts claimed by me
                        on this application.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans my-2">
                    <div>
                        <label htmlFor="signature" className="block text-lg font-sans my-2">Applicant Signature
                            (E-Signature)</label>
                        <input
                            type="text"
                            name="signature"
                            id="signature"
                            required
                            className="w-full p-3 rounded-md border border-gray-300"
                            placeholder="Type your full name as a signature"
                        />
                    </div>
                    <div>
                        <label htmlFor="signatureDate" className="block text-lg font-sans my-2">Date</label>
                        <input
                            type="date"
                            name="signatureDate"
                            id="signatureDate"
                            required
                            className="w-full p-3 rounded-md border border-gray-300"
                        />
                    </div>
                </div>

                {/* reCAPTCHA v2 widget */}
                <div id="recaptcha-container" className="g-recaptcha my-8"></div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-800 text-white text-xl font-normal py-2 px-4 rounded-lg mt-10"
                    >
                        Submit Application
                    </button>
                </div>
            </form>
        </section>
    );
}