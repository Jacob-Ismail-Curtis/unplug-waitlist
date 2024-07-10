import React, { useState } from 'react';
import axios from 'axios';

function WaitlistForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
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
    axios.post('http://localhost:5001/api/waitlist', formData)
      .then((response) => {
        console.log('Form data submitted successfully:', response.data);
        // Handle success (e.g., show a success message to the user)
      })
      .catch((error) => {
        console.error('Error submitting form data:', error);
        // Handle error (e.g., show an error message to the user)
      });
  };

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 pr-0 md:pr-2 md:mb-0">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="first name"
            className="p-3 mb-3 border-2 border-black rounded-lg w-full text-black"
            required
          />
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-2">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="last name"
            className="p-3 mb-3 border-2 border-black rounded-lg w-full text-black"
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-4">
        <div className="w-full md:w-2/3 pr-0 md:pr-2 mb-4 md:mb-0">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email address"
            className="p-3 mb-3 border-2 border-black rounded-lg w-full text-black"
            required
          />
        </div>
        <div className="w-full md:w-1/3 pl-0 md:pl-2">
          <button type="submit" className="p-3 bg-black border-2 border-white text-white rounded-lg w-full">join waitlist</button>
        </div>
      </div>
    </form>
  );
}

export default WaitlistForm;
