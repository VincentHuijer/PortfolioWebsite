import React from 'react';
import KalenderWeek from '../../../media/UniwareStage/KalenderWeek.jpg';
import KalenderMaand from '../../../media/UniwareStage/KalenderMaand.jpg';
import KalenderLijst from '../../../media/UniwareStage/KalenderLijst.jpg';
import ActieDetails from '../../../media/UniwareStage/ActieDetails.png';
import KalenderevenementBeheren from '../../../media/UniwareStage/KalenderevenementBeheren.png';
import SprintKlein from '../../../media/UniwareStage/SprintKlein.png';
import FullCalendarLogo from '../../../media/Logos/FullCalendarLogo.png';
import VueLogo from '../../../media/Logos/VueLogo.png';
import GenericArticle from '../../../components/GenericArticle';
import { Carousel, IconButton  } from "@material-tailwind/react";
import Sidebar from '../../../components/Sidebar';
const Uniware = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#f4f4f4] p-3 text-center mb-7 w-full">
        <div className="text-black text-2xl font-serif">Uniware</div>
      </div>
      <div className="md:flex md:justify-center">
        <div className="md:w-5/12 mx-12 md:ml-0 md:mr-12 mb-8">
          <div>
          <Carousel
          className="rounded-xl"
          autoplay={true}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="black"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
      
          <img src={KalenderWeek} alt="Kalender Week" className="h-full w-full object-cover"/>
          <img src={KalenderMaand} alt="Kalender Maand" className="h-full w-full object-cover"/>
          <img src={KalenderLijst} alt="Kalender Lijst" className="h-full w-full object-cover"/>
          <img src={ActieDetails} alt="Actie details" className="h-full w-full object-cover"/>
          <img src={KalenderevenementBeheren} alt="KalenderEvenementBeheren" className="h-full w-full object-cover"/>
          <img src={SprintKlein} alt="Sprintplanner" className="h-full w-full object-cover"/>
        </Carousel>
          </div>
          <div>
          <div>De doelstelling van de opdracht is het realiseren van een interactieve web-interface met een scrum-board view, waarin de status, prioriteit en tijdregistratie van actiepunten snel en eenvoudig kunnen worden bijgewerkt. Dit stelt Uniware in staat om de tijdregistratie duidelijk te delen en de voortgang van taken en kosten in tijd transparant weer te geven. Hierdoor kan de organisatie efficiëntere processen realiseren en het probleem van het delen van actiepunten met medewerkers en klanten oplossen.</div>
          </div>
          <GenericArticle
            imageSrc={VueLogo}
            title="Vue.js"
            text="Ik ben voor het grootste gedeelte tijdens mijn stageopdracht bezig geweest met het Javascript-framework Vue.js. Ik heb Vue gebruikt voor het bouwen van de frontend van mijn opdracht, het implementeren van generieke componenten die ik op diverse plekken kan gebruiken en het uitvoeren van API calls voor de tijdregistratie, actiepunten en de sprintplanner."
          />
          <GenericArticle
            imageSrc={FullCalendarLogo}
            title="FullCalendar library"
            text="FullCalendar is een populaire open-source JavaScript-bibliotheek die wordt gebruikt voor het creëren van interactieve en aanpasbare kalenderinterfaces op websites. Ik heb voor deze library gekozen, omdat het veel opties biedt in de vorm van overzichten, wijzigingen van de layout en functionaliteiten die de tijdregistratie sneller maken, zoals het slepen van de actiepunten direct naar de kalender, het makkelijk bewerken van evenementen door ze te slepen of te trekken om korter of langer te maken."
          />
        </div>
        <div className="w-4/12 p-4 ">
          <Sidebar/>
        </div>
      </div>
    </div>
  );
};

export default Uniware;