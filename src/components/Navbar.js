import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#E2E2E2] p-3">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-black text-sm font-serif">Vincent Huijer</div>
          <div className="flex space-x-4">
            <a href="/" className="text-black text-sm font-serif">Home</a>
            <a href="/profiel" className="text-black text-sm font-serif">Profiel</a>
            <a href="/skills" className="text-black text-sm font-serif">Ervaringen</a>
            <a href="/contact" className="text-black text-sm font-serif">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
