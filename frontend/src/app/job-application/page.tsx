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

                <div className="mb-4 font-sans">
                    <label htmlFor="fullName" className="block text-lg font-semibold mb-2">Full Name</label>
                    <input type="text" name="fullName" id="fullName" required
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                <div className="mb-4 font-sans">
                    <label htmlFor="address" className="block text-lg font-semibold mb-2">Address</label>
                    <input type="text" name="address" id="address" required
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                <div className="mb-4 font-sans">
                    <label htmlFor="phone" className="block text-lg font-semibold mb-2">Phone</label>
                    <input type="tel" name="phone" id="phone" required
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                <div className="mb-4 font-sans">
                    <label htmlFor="dateAvailable" className="block text-lg font-semibold mb-2">Date Available</label>
                    <input type="date" name="dateAvailable" id="dateAvailable" required
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                <div className="mb-4 font-sans">
                    <label htmlFor="wageDesired" className="block text-lg font-semibold mb-2">Wage Desired</label>
                    <input type="text" name="wageDesired" id="wageDesired" required
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                <div className="mb-4 font-sans">
                    <label className="block text-lg font-semibold mb-2">Employment Desired</label>
                    <div className="flex">
                        <label className="mr-4">
                            <input type="radio" name="employmentType" value="Full-time"/> Full-time
                        </label>
                        <label>
                            <input type="radio" name="employmentType" value="Part-time"/> Part-time
                        </label>
                    </div>
                </div>

                <div className="mb-4 font-sans">
                    <label className="block text-lg font-semibold mb-2">Are you currently employed?</label>
                    <div className="flex">
                        <label className="mr-4">
                            <input type="radio" name="currentlyEmployed" value="Yes"/> Yes
                        </label>
                        <label>
                            <input type="radio" name="currentlyEmployed" value="No"/> No
                        </label>
                    </div>
                </div>

                <div className="mb-4 font-sans">
                    <label className="block text-lg font-semibold mb-2">May we contact your employer?</label>
                    <div className="flex">
                        <label className="mr-4">
                            <input type="radio" name="contactEmployer" value="Yes"/> Yes
                        </label>
                        <label>
                            <input type="radio" name="contactEmployer" value="No"/> No
                        </label>
                    </div>
                </div>

                <div className="mb-4 font-sans">
                    <label className="block text-lg font-semibold mb-2">Do you possess a medical cannabis/marijuana
                        card?</label>
                    <div className="flex">
                        <label className="mr-4">
                            <input type="radio" name="marijuanaCard" value="Yes"/> Yes
                        </label>
                        <label>
                            <input type="radio" name="marijuanaCard" value="No"/> No
                        </label>
                    </div>
                </div>

                <div className="mb-4 font-sans">
                    <label className="block text-lg font-semibold mb-2">Position(s) Applying for</label>
                    <div className="flex flex-wrap">
                        <label className="mr-4">
                            <input type="checkbox" name="position" value="Laborer"/> Sign Shop Laborer
                        </label>
                        <label className="mr-4">
                            <input type="checkbox" name="position" value="Striper"/> Warehouse Laborer
                        </label>
                        <label className="mr-4">
                            <input type="checkbox" name="position" value="Driver"/> Field Technician
                        </label>
                    </div>
                </div>

                <div className="mb-4 font-sans">
                    <label htmlFor="skills" className="block text-lg font-semibold mb-2">Skills, Experience, or
                        Qualifications</label>
                    <textarea name="skills" id="skills" required
                              className="w-full p-3 rounded-md border border-gray-300"></textarea>
                </div>

                <h3 className="text-4xl font-semibold mb-4">Previous Employment</h3>

                {/* Repeat this block for multiple previous employment entries */}
                <div className="mb-4 font-sans">
                    <label htmlFor="company1" className="block text-lg font-semibold mb-2">Company Name</label>
                    <input type="text" name="company1" id="company1" required
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                <div className="mb-4 font-sans">
                    <label htmlFor="responsibilities1"
                           className="block text-lg font-semibold mb-2">Responsibilities</label>
                    <textarea name="responsibilities1" id="responsibilities1" required
                              className="w-full p-3 rounded-md border border-gray-300"></textarea>
                </div>

                <div className="mb-4 font-sans">
                    <label htmlFor="company1" className="block text-lg font-semibold mb-2">Company Name</label>
                    <input type="text" name="company1" id="company1"
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                <div className="mb-4 font-sans">
                    <label htmlFor="responsibilities1"
                           className="block text-lg font-semibold mb-2">Responsibilities</label>
                    <textarea name="responsibilities1" id="responsibilities1"
                              className="w-full p-3 rounded-md border border-gray-300"></textarea>
                </div>

                <div className="mb-4 font-sans">
                    <label htmlFor="company1" className="block text-lg font-semibold mb-2">Company Name</label>
                    <input type="text" name="company1" id="company1"
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                <div className="mb-4 font-sans">
                    <label htmlFor="responsibilities1"
                           className="block text-lg font-semibold mb-2">Responsibilities</label>
                    <textarea name="responsibilities1" id="responsibilities1"
                              className="w-full p-3 rounded-md border border-gray-300"></textarea>
                </div>


                {/* Education */}
                <h3 className="text-4xl font-semibold mb-4">Education</h3>

                <div className="mb-4 font-sans">
                    <label htmlFor="highSchool" className="block text-lg font-semibold mb-2">High School</label>
                    <input type="text" name="highSchool" id="highSchool" required
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                <div className="mb-4 font-sans">
                    <label htmlFor="college" className="block text-lg font-semibold mb-2">College</label>
                    <input type="text" name="college" id="college"
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                {/* Military Service */}
                <h3 className="text-4xl font-semibold mb-4">Military Service</h3>

                <div className="mb-4 font-sans">
                    <label htmlFor="militaryBranch" className="block text-lg font-semibold mb-2">Branch</label>
                    <input type="text" name="militaryBranch" id="militaryBranch"
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>


                <h3 className="text-4xl font-semibold mb-4">References</h3>
                {/* Reference Section */}
                <div className="mb-4 font-sans">
                    <label htmlFor="reference1" className="block text-lg font-semibold mb-2">Reference 1</label>
                    <input type="text" name="reference1" id="reference1"
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                <div className="mb-4 font-sans">
                    <label htmlFor="reference2" className="block text-lg font-semibold mb-2">Reference 2</label>
                    <input type="text" name="reference2" id="reference2"
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                {/* Disclaimer and Signature */}
                <h3 className="text-4xl font-bold mb-4">Disclaimer and Signature</h3>

                <div className="mb-4 text-xl font-serif">
                    <p className="text-gray-700 mb-4">
                        I hereby declare that the information provided is complete and accurate, and that there are no
                        omissions.
                        I understand that any conditional or firm offer of employment will be based on the information I
                        have provided,
                        and that any misrepresentation or omission of relevant information may be grounds for dismissal.
                        I also authorize
                        San Bar Construction Corp. to investigate and verify the facts claimed by me on this
                        application.
                    </p>
                </div>

                <div className="mb-4">
                    <label htmlFor="signature" className="block text-lg font-semibold mb-2">Signature</label>
                    <input
                        type="text"
                        name="signature"
                        id="signature"
                        required
                        className="w-full p-3 rounded-md border border-gray-300"
                        placeholder="Type your full name as a signature"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="signatureDate" className="block text-lg font-semibold mb-2">Date</label>
                    <input
                        type="date"
                        name="signatureDate"
                        id="signatureDate"
                        required
                        className="w-full p-3 rounded-md border border-gray-300"
                    />
                </div>

                {/* reCAPTCHA v2 widget */}
                <div id="recaptcha-container" className="g-recaptcha mb-6"></div>

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
