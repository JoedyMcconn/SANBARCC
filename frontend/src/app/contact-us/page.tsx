// "use client"
//
// import React, { useState } from 'react';
//
// const ContactPage = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         company: '',
//         reason: '',
//         message: ''
//     });
//
//     const handleChange = (e: { target: { name: any; value: any; }; }) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
//
//     const handleSubmit = (e: { preventDefault: () => void; }) => {
//         e.preventDefault();
//         console.log('Form Data:', formData);
//         // Handle form submission here (e.g., send data to an API)
//     };
//
//     // @ts-ignore
//     // @ts-ignore
//     return (
//         <div className="contact-page">
//             <div className="banner" style={{ backgroundImage: 'url(/contact-banner.jpg)', height: '30vh', backgroundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//                 <h1 className="text-white text-3xl font-bold">Contact Us</h1>
//             </div>
//             <div className="form-container px-4 py-8 md:px-12 lg:px-16 bg-white">
//                 <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//                             Name
//                         </label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={formData.name}
//                             onChange={handleChange}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                             Email
//                         </label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
//                             Company
//                         </label>
//                         <input
//                             type="text"
//                             name="company"
//                             value={formData.company}
//                             onChange={handleChange}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reason">
//                             Reason for Contact
//                         </label>
//                         <select
//                             name="reason"
//                             value={formData.reason}
//                             onChange={handleChange}
//                             className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             required
//                         >
//                             <option value="">Select a Reason</option>
//                             <option value="purchase order">Purchase Order</option>
//                             <option value="employment">Employment</option>
//                             <option value="contracting">Contracting</option>
//                             <option value="sign printing">Sign Printing</option>
//                             <option value="traffic safety">Traffic Safety</option>
//                         </select>
//                     </div>
//                     <div className="mb-6">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
//                             Message (1000 characters max)
//                         </label>
//                         <textarea
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//                             maxLength="1000"
//                             rows="4"
//                             required
//                         ></textarea>
//                     </div>
//                     <div className="flex items-center justify-between">
//                         <button
//                             type="submit"
//                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         >
//                             Send Message
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };
//
// export default ContactPage;
