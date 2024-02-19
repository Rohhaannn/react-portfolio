import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    subject: '',
    msg: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://getform.io/f/zbqON2ep', formData);
      setSuccessMessage('Message sent successfully');
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
      console.log('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    setFormData({
      name: '',
      contact: '',
      email: '',
      subject: '',
      msg: ''
    });
  };


  return (
    <div id="contact" className="w-screen bg-[#ebeeee]">
      <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="py-4 mb-10 text-4xl font-bold text-center text-[#001b5e]">
          Contact
        </h1>

        <form onSubmit={handleSubmit} action="https://getform.io/f/zbqON2ep" method="POST" encType="multipart/form-data">

          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2 font-semibold"> Name </label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <label className="uppercase text-sm py-2 font-semibold"> Contact Number </label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2 font-semibold"> Email </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2 font-semibold"> Subject </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2 font-semibold"> Meassage </label>
            <textarea
              className="border-2 rounded-lg p-3 flex border-gray-300"
              rows="10"
              name="msg"
              value={formData.msg}
              onChange={handleChange}
            />
          </div>

          <button className="bg-blue-800 text-gray-100 mt-4 mb-4 w-full p-4 rounded-lg hover:bg-blue-600">
            Send Message
          </button>


          {successMessage && (
            <p className="text-green-500 mt-3">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
