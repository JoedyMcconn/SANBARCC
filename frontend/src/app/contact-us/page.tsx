import React from 'react';

export default function ContactForm() {
    return (
        <section className="container mx-auto px-6 md:px-12 lg:px-16 py-20 mt-20 bg-white">
            <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>
            <form action="https://getform.io/f/ajjewvja" method="POST" className="bg-gray-100 p-6 rounded-lg shadow-lg">

                {/* Name Field */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-lg font-semibold mb-2">Full Name</label>
                    <input type="text" name="name" id="name" required
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
                    <input type="email" name="email" id="email" required
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                {/* Phone Field */}
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-lg font-semibold mb-2">Phone</label>
                    <input type="tel" name="phone" id="phone" required
                           className="w-full p-3 rounded-md border border-gray-300"/>
                </div>

                {/* Reason for Inquiry */}
                <div className="mb-4">
                    <label htmlFor="reason" className="block text-lg font-semibold mb-2">Reason for Inquiry</label>
                    <select name="reason" id="reason" required className="w-full p-3 rounded-md border border-gray-300">
                        <option value="">Select a reason</option>
                        <option value="Estimating">Estimating</option>
                        <option value="Materials/Equipment Sales/Rentals">Materials/Equipment Sales/Rentals</option>
                        <option value="General Inquiry">General Inquiry</option>
                    </select>
                </div>

                {/* Message Field */}
                <div className="mb-4">
                    <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
                    <textarea name="message" id="message" rows={5} required
                              className="w-full p-3 rounded-md border border-gray-300"></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}
