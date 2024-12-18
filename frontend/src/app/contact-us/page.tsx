"use client";

import React, { useEffect, useState } from "react";

// Declare grecaptcha as a global object
declare global {
    interface Window {
        grecaptcha: any;
    }
}

export default function ContactForm() {
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const [formAction, setFormAction] = useState("https://getform.io/f/ajjewvja"); // Default action for General Inquiry

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

    // Function to handle form action URL change
    const handleReasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedReason = event.target.value;

        if (selectedReason === "Estimating") {
            setFormAction("https://getform.io/f/bxojeexa");
        } else if (selectedReason === "Materials/Equipment Sales/Rentals") {
            setFormAction("https://getform.io/f/aejyxxwb");
        } else {
            setFormAction("https://getform.io/f/ajjewvja"); // Default for General Inquiry
        }
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
        <section className="mx-auto px-6 md:px-12 lg:px-16 py-20 mt-20 bg-black">
            <div className="flex justify-center mb-4">
                <div className="bg-yellow-500 p-2 mx-5 mb-16">
                    <div className="bg-black p-4 shadow-lg">
                        <h2 className="text-white text-3xl lg:text-6xl font-semibold">Contact Us</h2>
                    </div>
                </div>
            </div>
            <form action={formAction} method="POST" onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg">

                {/* Name Field */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-2xl font-serif mb-2">Full Name</label>
                    <input type="text" name="name" id="name" required
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-2xl font-serif mb-2">Email</label>
                    <input type="email" name="email" id="email" required
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                {/* Phone Field */}
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-2xl font-serif mb-2">Phone</label>
                    <input type="tel" name="phone" id="phone" required
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                {/* Reason for Inquiry */}
                <div className="mb-4">
                    <label htmlFor="reason" className="block text-2xl font-serif mb-2">Reason for Inquiry</label>
                    <select name="reason" id="reason" required className="w-full p-3 rounded-md border border-gray-300" onChange={handleReasonChange}>
                        <option value="">Select a reason</option>
                        <option value="Estimating">Estimating</option>
                        <option value="Materials/Equipment Sales/Rentals">Materials/Equipment Sales/Rentals</option>
                        <option value="General Inquiry">General Inquiry</option>
                    </select>
                </div>

                {/* Message Field */}
                <div className="mb-4">
                    <label htmlFor="message" className="text-2xl font-serif">Message</label>
                    <textarea name="message" id="message" rows={5} required
                              className="w-full p-3 rounded-md border border-gray-300"></textarea>
                </div>

                {/* reCAPTCHA v2 widget */}
                <div id="recaptcha-container" className="g-recaptcha mb-6"></div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-sans text-2xl py-2 px-6 rounded-lg">
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}
