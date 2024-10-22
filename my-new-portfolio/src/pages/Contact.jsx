// Import necessary hooks and components
import { useState } from 'react';
import LayoutWrapper from '../components/LayoutWrapper';

function Contact() {
  // State to store form data and validation errors
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  // Handle form field changes and update state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate email format using regex
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    let formErrors = {};
    // Validate form fields
    if (!name) formErrors.name = 'Name is required';
    if (!email || !validateEmail(email)) formErrors.email = 'Valid email is required';
    if (!message) formErrors.message = 'Message is required';

    setErrors(formErrors);
  };

  return (
    <LayoutWrapper>
      <div className="text-center mx-auto space-y-8 mt-12 py-12 px-6 bg-gray-50 bg-opacity-90 shadow-2xl border border-gray-300 rounded-3xl max-w-2xl">
        {/* Page header */}
        <h2 className="text-5xl font-extrabold mb-6 text-gray-900 drop-shadow-lg tracking-tight">
          Get in Touch
        </h2>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name input field */}
          <div className="relative">
            <label className="block text-xl text-gray-700 mb-2">Name:</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email input field */}
          <div className="relative">
            <label className="block text-xl text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Message input field */}
          <div className="relative">
            <label className="block text-xl text-gray-700 mb-2">Message:</label>
            <textarea
              name="message"
              onChange={handleChange}
              className="w-full px-5 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out"
              rows="5"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 text-lg font-semibold rounded-lg hover:bg-gray-700 transition-colors transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </LayoutWrapper>
  );
}

export default Contact;
