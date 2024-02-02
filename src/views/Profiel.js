import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { faM } from '@fortawesome/free-solid-svg-icons';

const Profiel = () => {
  return (
    <div className="bg-[#1D1D20]">
      <div className="flex flex-col items-start justify-center content-center h-screen text-gray-400 md:mx-96 ">
        <div className='hidden md:block text-[#777777] ml-auto'>
          <FontAwesomeIcon icon={faM} size="2x" className='mr-2'/>
          <FontAwesomeIcon icon={faGithub} size="2x" className='mr-2'/>
          <FontAwesomeIcon icon={faLinkedin} size="2x" className='mr-2'/>
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-col'>
            <div className='font-thin ml-3 text-6xl md:text-9xl mb-10 md:mb-0'>
              Welkom.
            </div>
            <div className='relative ml-3'>
              <div className='p-4 ml-2'>
                Hoi, mijn naam is Vincent Huijer. Ik ben een front-end ontwikkelaar uit Nootdorp, Zuid-Holland, NL. Op dit moment volg ik de opleiding ICT Software Engineering aan De Haagse Hogeschool. Nu ben ik iedere week mijn kennis over webontwikkeling aan het uitbreiden en heb ik aan verschillende projecten gewerkt.
              </div>
              <div className='p-4 ml-2'>
                Nu ben ik iedere week mijn kennis over webontwikkeling aan het uitbreiden en heb ik aan verschillende projecten gewerkt.
              </div>
              <div className='absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#87378D] to-[#877E4C]'></div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='font-thin ml-3 text-2xl md:text-3xl  p-4'>
              Projects
            </div>
            <div className='relative ml-3'>
              <div className='p-4 ml-2'>
                Vue - Uniware
              </div>
              <div className='p-4 ml-2'>
                React - Theater Laak
              </div>
              <div className='p-4 ml-2'>
                Java - Betabit
              </div>
              <div className=' p-4 ml-2'>
                Python - Web Scraping
              </div>
              <div className='absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#87378D] to-[#877E4C]'></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profiel;

