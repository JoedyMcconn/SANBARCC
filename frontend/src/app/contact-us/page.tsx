"use client";

import React from 'react';

const ContactPage = () => {
    // @ts-ignore
    return (
        <div className="contact-page">
            <div className="form-container px-4 py-8 md:px-12 lg:px-16 bg-white">
                <div className="max-w-3xl mx-auto">
                    <iframe
                        width="100%"
                        height="2000px"
                        src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAKkefKJUNFkwRzFQUFZCRFZWQUZLVFNVWTY4MkFUMy4u&embed=true"
                        frameBorder="0"
                        marginWidth={0}
                        marginHeight={0}
                        style={{ border: 'none', maxWidth: '100%', maxHeight: '100%' }}
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
