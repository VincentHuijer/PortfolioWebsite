import React from 'react';
import KalenderWeek from '../../../media/UniwareStage/KalenderWeek.jpg';
import KalenderMaand from '../../../media/UniwareStage/KalenderMaand.jpg';
import KalenderLijst from '../../../media/UniwareStage/KalenderLijst.jpg';
import ActieDetails from '../../../media/UniwareStage/ActieDetails.png';
import KalenderevenementBeheren from '../../../media/UniwareStage/KalenderevenementBeheren.png';
import Sprint from '../../../media/UniwareStage/Sprint.png';
import SprintBeheren from '../../../media/UniwareStage/SprintBeheren.png';
import FullCalendarLogo from '../../../media/Logos/FullCalendarLogo.png';
import VueLogo from '../../../media/Logos/VueLogo.png';
import GenericArticle from '../../../components/GenericArticle';
import { Carousel, IconButton  } from "@material-tailwind/react";


const Homepage = () => {
  return (
    <div className="">
      <div className="bg-[#f4f4f4] p-3 flex items-center justify-center mb-7">
        <div className="text-black text-2xl font-serif">Uniware</div>
      </div>
      <div>
        <div className='flex justify-center'>
          <div className='w-8/12 ml-36'>
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
              <img src={SprintBeheren} alt="Sprint beheren" className="h-full w-full object-cover"/>
              <img src={Sprint} alt="Sprintplanner" className="h-full w-full object-cover"/>
            </Carousel>
            </div>
            <div className="pl-64 text-sm mb-5">Uniware week overzicht</div>


            <div>

            De doelstelling van de opdracht is het realiseren van een interactieve web-interface met een scrum-board view, waarin de status, prioriteit en tijdregistratie van actiepunten snel en eenvoudig kunnen worden bijgewerkt. Dit stelt Uniware in staat om de tijdregistratie duidelijk te delen en de voortgang van taken en kosten in tijd transparant weer te geven. Hierdoor kan de organisatie efficiëntere processen realiseren en het probleem van het delen van actiepunten met medewerkers en klanten oplossen.
            </div>
            <GenericArticle
              imageSrc={VueLogo}
              title="Vue.js"
              text="Ik ben voor het grootste gedeelte tijdens mijn stageopdracht bezig geweest met het Javascript-framework Vue.js. Ik heb Vue gebruikt voor het bouwen van de frontend van mijn opdracht, het implementeren van generieke componenten die ik op diverse plekken kan gebruiken en het uitvoeren van API calls voor de tijdregistratie, actiepunten en de sprintplanner."
            />
            <GenericArticle
              imageSrc={FullCalendarLogo}
              title="FullCalendar library"
              text="FullCalendar is een populaire open-source JavaScript-bibliotheek die wordt gebruikt voor het creëren van interactieve en aanpasbare kalenderinterfaces op websites. Ik heb voor deze library gekozen, omdat het veel opties bied in de vorm van overzichten, wijzigingen van de layout en functionaliteiten die de tijdregistratie sneller maken, zoals het slepen van de actiepunten direct naar de kalender, het makkelijk bewerken van evenementen door ze te slepen of te trekken om korter of langer te maken."
            />
            

            
            
            

           


          </div>


          <div className="w-4/12 p-4 mr-36">
            <div className="bg-[#F7F7F7] p-6 mb-7">
              <div className='font-serif text-lg'> Zoeken in Vincent.com</div>
              {/* <SearchBar/> */}
            </div>

            <div className="bg-[#F7F7F7] p-6 mb-7">
              <div className='font-serif text-lg border-b-2 border-black mb-2 pb-1'> Wat doet Vincent Nou weer</div>
              <div> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
            </div>

            <div className="bg-[#F7F7F7] p-6 mb-7">
              <div className='font-serif text-lg border-b-2 border-black mb-2 pb-1'> Breaking news</div>
              <div> Eens, in een klein dorpje genaamd Nootdorp, leefde er een eigenaardige eend genaamd Eddie. Eddie was niet zomaar een eend; hij had een onweerstaanbaar talent voor het imiteren van andere dieren. Op een dag besloot Eddie een feest te organiseren voor alle dieren in het dorp. De uitnodigingen waren snel verspreid, en al gauw stond het hele dorp te trappelen van opwinding voor het grote feest. De dieren kwamen van heinde en verre om Eddie's talent te bewonderen.</div>
            </div>

            <div className="bg-[#F7F7F7] p-6 mb-7">
              <div className='font-serif text-lg border-b-2 border-black mb-2 pb-1'> Marco</div>
              <div> In het oude Rome, tijdens de glorieuze dagen van het Romeinse Rijk, regeerde een keizer met wijsheid en filosofische diepgang: Marcus Aurelius. Marcus was niet alleen een krachtige heerser, maar ook een wijs en bedachtzaam man. Het was een warme zomerdag toen Marcus Aurelius besloot om een rustige wandeling te maken door de tuinen van zijn paleis. Terwijl hij door de schaduwrijke paden slenterde, overpeinsde hij zijn plichten als keizer en filosoof. Plotseling hoorde Marcus het geluid van zachte voetstappen achter zich. Hij draaide zich om en zag een jonge schildknaap genaamd Lucius. Lucius had bewondering voor de keizer en vroeg toestemming om met hem te praten.</div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
