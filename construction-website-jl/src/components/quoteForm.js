import React, { useState } from 'react';

function QuoteForm() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Service: '',
    Message: '',
    contactMethod: 'email',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-center text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>Request a Quote</h1>

      <form action="https://formsubmit.co/jorgealejandre.piki@gmail.com" method="POST">
      <input type="hidden" name="_subject" value="New Quote Request!" />
        <input type="hidden" name="_captcha" value="true" />
        <input type="hidden" name="_template" value="table"/>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="Name"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your name"
            value={formData.Name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="Email"
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your email"
            value={formData.Email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="Phone"
            type="tel"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your phone number"
            value={formData.Phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
            Installation Service
          </label>
          <select
            id="service"
            name="Service"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.Service}
            onChange={handleChange}
          >
            <option value="">Select a service</option>
            <option value="Installation">Installation</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Repair">Repair</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="Message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your message"
            value={formData.Message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Preferred Contact Method</label>
          <div className="flex items-center">
            <input type="radio" id="contactEmail" name="Preferred Contact Method" value="Email" className="mr-2" checked={formData.contactMethod === 'email'} onChange={handleChange} />
            <label htmlFor="contactEmail" className="mr-4">Email</label>
            <input type="radio" id="contactPhone" name="Preferred Contact Method" value="Phone" className="mr-2" checked={formData.contactMethod === 'phone'} onChange={handleChange} />
            <label htmlFor="contactPhone">Phone</label>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default QuoteForm;