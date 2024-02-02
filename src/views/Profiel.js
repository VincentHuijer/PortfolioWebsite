import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { faM } from '@fortawesome/free-solid-svg-icons';

const Profiel = () => {
  return (
    <div className="bg-[#1D1D20]">
      <div className="flex flex-col items-start justify-center content-center h-screen text-gray-400 mx-96 ">
        <div>
          <div className='text-gray-400'>
            <FontAwesomeIcon icon={faM} size="2x" className='mr-2'/>
            <FontAwesomeIcon icon={faGithub} size="2x" className='mr-2'/>
            <FontAwesomeIcon icon={faLinkedin} size="2x" className='mr-2'/>
          </div>
        </div>
        <div className='font-sans text-9xl'>
          Welkom
        </div>
        <div className='relative'>
          <div className='border-l-3 p-4 ml-2'>
            Hoi, mijn naam is Vincent Huijer. Ik ben 24 jaar oud en ik woon in Nootdorp, Zuid-Holland. Op dit moment volg ik een opleiding ICT Software Engineering aan De Haagse Hogeschool. Ik ben al van jongs af aan geïnteresseerd in computers en heb verschillende activiteiten gedaan, zoals videobewerking, spelen met 3D-modellen in Blender en gamen, wat uiteindelijk leidde tot mijn interesse in programmeren. Tijdens mijn middelbare school begon ik naar alle mogelijkheden binnen de IT-sector te kijken. Hier ontdekte ik softwareontwikkeling en ben ik er dieper in gedoken. Sindsdien breid ik elke week mijn kennis over webontwikkeling uit en heb ik aan verschillende projecten gewerkt.
          </div>
          <div className='absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-[#87378D] to-[#877E4C]'></div>
        </div>
      </div>
    </div>
  );
};

export default Profiel;

