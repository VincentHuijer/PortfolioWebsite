import React from 'react';
import SearchBar from '../components/Searchbar';
import VincentHuijer from '../media/VincentHuijer.png';
import KalenderWeek from '../media//UniwareStage/KalenderWeek.jpg';
import Calendar from '../media/Stockfotos/Calendar.jpg';
import GenericArticle from '../components/GenericArticle';
import FrontPageTheaterLaak from '../media/TheaterLaak/FrontPageTheaterLaak.png';
import Betabit from '../media/Other/Betabit.png'

const Portfolio = () => {
  return (
    <div className="">
      <div className="bg-[#f4f4f4] p-3 flex items-center justify-center mb-7">
        <div className="text-black text-2xl font-serif">Portfolio</div>
      </div>
      <div>
        <div className='flex justify-center'>
          <div className='w-8/12 ml-36'>
              <GenericArticle
                imageSrc={Calendar}
                title="Stageopdracht: Een tijdregistratietool en sprintplanner doormiddel van Vue.js"
                text="Met het huidige systeem van Uniware wordt tijd geregistreerd doormiddel van actiepunten. Actiepunten zijn activiteiten die een medewerker uitvoert voor een klant. Het systeem werkt goed voor interne administratieve doeleinden, maar het is lastig om de activiteiten op efficiënte wijze te delen met medewerkers en klanten. Hiervoor is aan mij de taak om een web-interface te bouwen."
                linkReference={'Uniware'}
              />

              <GenericArticle
                imageSrc={FrontPageTheaterLaak}
                title="Schoolopdracht: Een interactieve website voor Theater Laak"
                text="Doormiddel van React.js en C# heb ik een interactieve website gemaakt voor Theater Laak. De website is gemaakt voor de bezoekers van het theater. De website is gemaakt om de bezoekers te informeren over de voorstellingen en om de bezoekers te enthousiasmeren om een voorstelling te bezoeken."
                linkReference={'TheaterLaak'}
              />

              <GenericArticle
                imageSrc={Betabit}
                title="Schoolopdracht: Een tool voor medewerkers van Betabit om milieubewuster reizen te stimuleren"
                text="Met het huidige systeem van Uniware wordt tijd geregistreerd doormiddel van actiepunten. Actiepunten zijn activiteiten die een medewerker uitvoert voor een klant. Het systeem werkt goed voor interne administratieve doeleinden, maar het is lastig om de activiteiten op efficiënte wijze te delen met medewerkers en klanten. Hiervoor is aan mij de taak om een web-interface te bouwen."
                linkReference={'BetaBit'}
              />


           


          </div>


          <div className="w-4/12 p-4 mr-36">
            <div className="bg-[#F7F7F7] p-6 mb-7">
              <div className='font-serif text-lg'> Zoeken in Vincent.com</div>
              <SearchBar/>
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

export default Portfolio;
