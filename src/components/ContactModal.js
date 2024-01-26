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
    console.log('Form submitted:', formData);
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#E2E2E2',//#e5e7eb
    padding: '20px',
    borderRadius: '8px',
    width: '30%',
    height: '30%',
    // maxWidth: '400px',
    // maxHeight: '300px',
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Contact Modal"
      style={{ 
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.7)' }, 
        content: modalStyle
      }}
    >
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className='border border-black mb-2'
              type="text"
              name="name"
              placeholder='Naam'
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              className='border border-black mb-2'
              type="email"
              name="email"
              placeholder='Email'
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              className='border border-black mb-2'
              type="text"
              name="subject"
              placeholder='Onderwerp'
              value={formData.subject}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              className='border border-black mb-2'
              type="text"
              name="reaction"
              placeholder='Reactie'
              value={formData.reaction}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button type="submit">Versturen</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ContactModal;

