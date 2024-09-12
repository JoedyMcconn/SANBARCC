"use client";

import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState<{
        name: string;
        email: string;
        phone: string;
        reason: string;
        message: string;
        file: File | null;
    }>({
        name: '',
        email: '',
        phone: '',
        reason: '',
        message: '',
        file: null,
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setFormData({ ...formData, file: files[0] });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phone', formData.phone);
        formDataToSend.append('reason', formData.reason);
        formDataToSend.append('message', formData.message);
        if (formData.file) {
            formDataToSend.append('file', formData.file);
        }

        const response = await fetch('/api/send-email', {
            method: 'POST',
            body: formDataToSend,
        } as RequestInit); // Explicitly cast as RequestInit

        if (response.ok) {
            alert('Form sent successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                reason: '',
                message: '',
                file: null,
            });
        } else {
            alert('There was an error sending the form.');
        }
    };

    return (
        <div className="contact-page grid grid-cols-1 lg:grid-cols-3 min-h-screen mt-20">
            <div className="relative col-span-1">
                <img src="/ContactImage.webp" alt="Contact Us" className="object-cover w-full h-full" />
            </div>
            <div className="col-span-2 p-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
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
                        <div>
                            <label htmlFor="phone" className="block text-lg font-medium">
                                Phone Number:
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                                className="border w-full px-3 py-2 mt-1"
                            />
                        </div>
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
                                <option value="Estimating">Estimating</option>
                                <option value="Materials / Supplies / Equipment sales/ Rentals">
                                    Materials / Supplies / Equipment sales/ Rentals
                                </option>
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Employment">Employment</option>
                            </select>
                        </div>
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
                        <div>
                            <label htmlFor="file" className="block text-lg font-medium">
                                Upload File (Optional):
                            </label>
                            <input
                                type="file"
                                id="file"
                                name="file"
                                onChange={handleFileChange}
                                className="border w-full px-3 py-2 mt-1"
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
