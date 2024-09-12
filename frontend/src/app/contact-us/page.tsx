    "use client";

    import React, { useState } from 'react';

    const ContactPage = () => {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            reason: '',
            message: '',
        });

        const handleInputChange = (
            e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
        ) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();

            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Form sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    reason: '',
                    message: '',
                });
            } else {
                alert('There was an error sending the form.');
            }
        };

        return (
            <div className="contact-page grid grid-cols-1 lg:grid-cols-3 min-h-screen mt-20">
                {/* Left Side Image Section */}
                <div className="relative col-span-1">
                    {/* Background Image */}
                    <img
                        src="/ContactImage.webp"
                        alt="Contact Us"
                        className="object-cover w-full h-full"
                    />

                </div>

                {/* Right Side Form Section */}
                <div className="col-span-2 p-8 bg-white">

                    <div className="max-w-3xl mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-lg font-medium">
                                    Name:
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="border w-full px-3 py-2 mt-1"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-lg font-medium">
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="border w-full px-3 py-2 mt-1"
                                />
                            </div>

                            {/* Reason for Inquiry Field */}
                            <div>
                                <label htmlFor="reason" className="block text-lg font-medium">
                                    Reason for Inquiry:
                                </label>
                                <select
                                    id="reason"
                                    name="reason"
                                    value={formData.reason}
                                    onChange={handleInputChange}
                                    required
                                    className="border w-full px-3 py-2 mt-1"
                                >
                                    <option value="">Select a reason</option>
                                    <option value="General Inquiry">Estimating</option>
                                    <option value="Support">Materials / Supplies / Equipment sales/ Rentals</option>
                                    <option value="Sales">General Inquiry</option>
                                </select>
                            </div>

                            {/* Message Field */}
                            <div>
                                <label htmlFor="message" className="block text-lg font-medium">
                                    Message:
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    className="border w-full px-3 py-2 mt-1 h-32"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    };

    export default ContactPage;
