/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import {
  collection, addDoc, query, where, getDocs,
} from 'firebase/firestore';
import db from '../firebase';
import Modal from './Modal';

function WaitlistForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    return errors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    try {
      const q = query(collection(db, 'users'), where('email', '==', formData.email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setErrors({ email: 'This email is already registered' });
        return;
      }

      const docRef = await addDoc(collection(db, 'users'), formData);
      console.log('Document written with ID: ', docRef.id);
      // Handle success (e.g., show a success message to the user)
      setModalOpen(true);
      setFormData({ firstName: '', lastName: '', email: '' }); // Reset form
    } catch (error) {
      console.error('Error adding document: ', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap mb-4">
          <div className="w-1/2 pr-2">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="first name"
              className="p-3 mb-3 border-2 border-black rounded-lg w-full text-black"
              required
            />
            {errors.firstName && <p className="text-lg text-[#FFD9A1]">{errors.firstName}</p>}
          </div>
          <div className="w-1/2 pl-2">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="last name"
              className="p-3 mb-3 border-2 border-black rounded-lg w-full text-black"
              required
            />
            {errors.lastName && <p className="text-lg text-[#FFD9A1]">{errors.lastName}</p>}
          </div>
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-2/3 pr-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email address"
              className="p-3 mb-3 border-2 border-black rounded-lg w-full text-black"
              required
            />
            {errors.email && <p className="text-lg text-[#FFD9A1]">{errors.email}</p>}
          </div>
          <div className="w-1/3 pl-2">
            <button type="submit" className="p-3 bg-black border-2 border-white text-white rounded-lg w-full">
              join waitlist
            </button>
          </div>
        </div>
      </form>
      <Modal isOpen={modalOpen} onClose={closeModal} email={formData.email} />
    </div>
  );
}

export default WaitlistForm;
