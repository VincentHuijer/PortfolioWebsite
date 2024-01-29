import React from 'react';
import Sidebar from '../../../components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import GreenbitReisToevoegen from '../../../media/Betabit/GreenbitReisToevoegen.png';
import GenericArticle from '../../../components/GenericArticle';

const Betabit = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#f4f4f4] p-3 text-center mb-7 w-full">
        <div className="text-black text-2xl font-serif">Betabit</div>
      </div>
      <div className="md:flex md:justify-center mx-12">
        <div className="md:w-5/12 ml-4 md:ml-0 md:mr-4 mb-8">
          <div>
            <img src={GreenbitReisToevoegen} alt="GreenbitReisToevoegen" className="w-3/4 mb-5" />
          </div>

          <div className="font-sans mb-20">
            Greenbit is een applicatie die ik tijdens het eerste jaar van mijn opleiding in een klein team heb kunnen ontwikkelen. Betabit zet zich in om een steeds groener en milieubewuster bedrijf te worden en zouden graag hun medewerkers willen stimuleren om milieubewuster te gaan reizen. In deze Java applicatie met een JavaFX interface hebben we de mogelijkheid toegevoegd om punten te ontvangen voor milieubewust reizen en deze om te kunnen ruilen voor beloningen die ingesteld zijn door een admin in het 'beloning' venster. Ook is er een scoreboard om in te zien wie de meeste punten heeft verdient van alle collega's.
          </div>
          
        </div>
        <div className="w-4/12 p-4 mr-36">
          <Sidebar/>
        </div>
      </div>
    </div>
  );
};


export default Betabit;
