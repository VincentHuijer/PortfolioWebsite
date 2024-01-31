import React from 'react';
import Sidebar from '../../../components/Sidebar';
import GreenbitReisToevoegen from '../../../media/Betabit/GreenbitReisToevoegen.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 

const Betabit = () => {
  return (
    <div className="">
      <div className="bg-[#f4f4f4] p-3 flex items-center justify-center mb-7">
        <a href="https://github.com/VincentHuijer/BetaBitMilieubewustReizen" className="text-2xl font-serif  hover:underline"> <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Greenbit</a>
      </div>
      <div>
        <div className='flex flex-col justify-center md:flex-row'>
          <div className='w-3/4 mx-12 md:w-5/12 md:ml-48 md:mr-24'>
            <div>
              <img src={GreenbitReisToevoegen} alt="GreenbitReisToevoegen" />
            </div>
            <div className="ml-5 text-sm mb-5 md:ml-32">Greenbit Reis toevoegen</div>

            <div className="font-sans mb-20">
              Greenbit is een applicatie die ik tijdens het eerste jaar van mijn opleiding in een klein team heb kunnen ontwikkelen. Betabit zet zich in om een steeds groener en milieubewuster bedrijf te worden en zouden graag hun medewerkers willen stimuleren om milieubewuster te gaan reizen. In deze Java applicatie met een JavaFX interface hebben we de mogelijkheid toegevoegd om punten te ontvangen voor milieubewust reizen en deze om te kunnen ruilen voor beloningen die ingesteld zijn door een admin in het 'beloning' venster. Ook is er een scoreboard om in te zien wie de meeste punten heeft verdient van alle collega's.
            </div>
          </div>
          <div className="w-4/12 p-4 mr-36">
            <Sidebar/>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Betabit;
