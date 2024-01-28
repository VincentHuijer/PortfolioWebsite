import ContactModal from '../components/ContactModal';
import React, { useState } from 'react';

const Navbar = () => {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const openContactModal = () => setContactModalOpen(true);
  const closeContactModal = () => setContactModalOpen(false);

  return (
    <nav className="bg-[#E2E2E2] p-3">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="text-black text-sm font-serif">Vincent Huijer</a>
          <div className="flex space-x-4">
            <a href="/" className="text-black text-sm font-serif">Home</a>
            <a href="/profiel" className="text-black text-sm font-serif">Profiel</a>
            <a href="/Portfolio" className="text-black text-sm font-serif">Portfolio</a>
            <a href="/skills" className="text-black text-sm font-serif">Ervaringen</a>
            <button className='text-black text-sm font-serif' onClick={openContactModal}>Contact</button>
            <ContactModal
              isOpen={isContactModalOpen}
              onRequestClose={closeContactModal}
            />          
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
