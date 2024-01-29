import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ContactModal = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    reaction: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.subject && formData.reaction) {
      console.log('Form submitted:', formData);
      onRequestClose();
    } else {
      console.log('Form not filled out yet');
    }
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#E2E2E2',
    padding: '20px',
    borderRadius: '8px',
    width: '80%', // Adjusted width for better responsiveness
    maxWidth: '400px', // Added max width for smaller screens
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Contact Modal"
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
        content: modalStyle,
      }}
    >
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              className='border border-black w-full outline-none p-2'
              type="text"
              name="name"
              placeholder='Naam'
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <input
              className='border border-black w-full outline-none p-2'
              type="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <input
              className='border border-black w-full outline-none p-2'
              type="text"
              name="subject"
              placeholder='Onderwerp'
              value={formData.subject}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <input
              className='border border-black w-full outline-none p-2'
              type="text"
              name="reaction"
              placeholder='Reactie'
              value={formData.reaction}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
              Versturen
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ContactModal;
