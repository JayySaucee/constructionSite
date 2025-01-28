import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    contactMethod: 'email',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_zxvnrvv', 'template_fzz3xra', formData, 'ohbO7yLv8xF9wsHH1')
      .then((response) => {
        console.log('SUCCESS', response.status, response.text);
      }, (error) => {
        console.log('FAILED.', error);
      });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-center text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}> Request a form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
            Installation Service
          </label>
          <select
            id="service"
            name="service"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select a service</option>
            <option value="installation1">Installation Service 1</option>
            <option value="installation2">Installation Service 2</option>
            <option value="installation3">Installation Service 3</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Preferred Contact Method</label>
          <div className="flex items-center">
            <input type="radio" id="contactEmail" name="contactMethod" value="email" className="mr-2" checked={formData.contactMethod === 'email'} onChange={handleChange} />
            <label htmlFor="contactEmail" className="mr-4">Email</label>
            <input type="radio" id="contactPhone" name="contactMethod" value="phone" className="mr-2" checked={formData.contactMethod === 'phone'} onChange={handleChange} />
            <label htmlFor="contactPhone">Phone</label>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="submit">
          Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default QuoteForm;