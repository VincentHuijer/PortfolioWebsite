import ContactModal from '../components/ContactModal';
import React, { useState } from 'react';


const Homepage = () => {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const openContactModal = () => setContactModalOpen(true);
  const closeContactModal = () => setContactModalOpen(false);

  return (
    <div>
      <div>
        <button onClick={openContactModal}>Contact</button>
      </div>

      <ContactModal
      isOpen={isContactModalOpen}
        onRequestClose={closeContactModal}
      />
    </div>
  );
};

export default Homepage;
