import React from "react";

const Footer = () => {
    return (
        <div className="pt-20 pb-12 bg-black">
            <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Contact Info Section */}
                <div className="flex flex-col justify-center text-white">
                    <p className='text-3xl'><strong>Call Us:</strong> +1 505-452-8000</p>
                    <p className="text-3xl"><strong>Email:</strong> contact@sanbarcc.com</p>
                    <p className="text-right md:text-left text-xl">9101 Broadway S.E Albuquerque, New Mexico</p>
                    <a href="/contact" className="text-blue-500 hover:text-blue-300 mt-2 text-right md:text-left text-xl">
                        Contact Us
                    </a>
                </div>

                {/* Logo Section */}
                <div className="flex justify-center items-center">
                    <img src="/SanBarTextLogo.png" alt="SanBar Logo" className="w-80  mr-3 p-4" />
                </div>

                {/* Address and Links Section */}
                <div className="flex flex-col justify-center text-white relative">
                    <div className="map-responsive mb-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.730949373761!2d-106.66392302489504!3d34.963351569075954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220f1a42e3582f%3A0xfb330061da02f7fb!2sSan%20Bar%20Construction%20Corp.!5e0!3m2!1sen!2sus!4v1714607603120!5m2!1sen!2sus"
                            width="80%"
                            height="250px"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="San Bar Construction Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
