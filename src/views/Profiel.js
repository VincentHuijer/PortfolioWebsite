import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { faM } from '@fortawesome/free-solid-svg-icons';
import Theaterlaak from './subviews/Ervaringen/TheaterLaak.js'
import Uniware from './subviews/Ervaringen/Uniware'
import Betabit from './subviews/Ervaringen/Betabit'
import TheGreatOutdoors from './subviews/Ervaringen//TheGreatOutdoors'
import { Link } from 'react-router-dom';

const Profiel = () => {
  return (
    <div className="bg-[#1D1D20]">
      <div className='flex flex-col items-end mr-64'>

        <div className='hidden md:block text-[#777777] ml-auto'>
          <FontAwesomeIcon icon={faM} size="2x" className='mr-2'/>
          <FontAwesomeIcon icon={faGithub} size="2x" className='mr-2'/>
          <FontAwesomeIcon icon={faLinkedin} size="2x" className='mr-2'/>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center content-center h-screen text-gray-400 md:mx-96 ">
        <div className='flex flex-col md:flex-row'>
          <div className='flex flex-col md:w-3/4'>
            <div className='font-thin ml-7 text-6xl mb-5 md:text-9xl md:mb-2'>
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
          <div className='flex flex-col mt-3 ml-9'>
            <div className='w-2/4 md:w-full'>
              <div className='font-thin text-2xl md:text-5xl mb-4'>
                Projects
              </div>
              <div className='relative mb-4'>
                <div className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#87378D] to-[#877E4C]'></div>
                <Link to="/Uniware" className='flex-grow whitespace-nowrap'>
                Uniware
              </Link>
              </div>
              <div className='relative mb-4'>
                <div className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#87378D] to-[#877E4C]'></div>
                <Link to="/TheaterLaak" className='flex-grow whitespace-nowrap'>
                Theater Laak
                </Link>
              </div>
              <div className='relative mb-4'>
                <div className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#87378D] to-[#877E4C]'></div>
                Betabit
              </div>
              <div className='relative'>
                <div className='absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#87378D] to-[#877E4C]'></div>
                The Great Outdoors
              </div>
            </div>
            {/* <div className='absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#87378D] to-[#877E4C]'></div> */}
            </div>
</div>
        </div>
      </div>
  );
};

export default Profiel;

