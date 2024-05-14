import ContactModal from '../components/ContactModal';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const openContactModal = () => setContactModalOpen(true);
  const closeContactModal = () => setContactModalOpen(false);

  return (
    <nav className="bg-[#E2E2E2] p-3">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-black text-lg font-serif">Vincent Huijer</Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-black text-lg font-serif">Home</Link>
            {/* <Link to="/profiel" className="text-black text-sm font-serif">Profiel</Link> */}
            <Link to="/Portfolio" className="text-black text-lg font-serif">Portfolio</Link>
            <Link to="/Reacties" className="text-black text-lg font-serif">Reacties</Link>
            <button className='text-black text-lg font-serif' onClick={openContactModal}>Contact</button>
            <ContactModal
              isOpen={isContactModalOpen}
              onRequestClose={closeContactModal}
            />          
            <a 
              href="https://github.com/VincentHuijer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-lg font-serif flex items-center space-x-1">
              <FontAwesomeIcon icon={faGithub}/>
            </a> 
            <a 
              href="https://github.com/VincentHuijer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-lg font-serif flex items-center space-x-1">
              <FontAwesomeIcon icon={faLinkedin}/>
            </a> 
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
