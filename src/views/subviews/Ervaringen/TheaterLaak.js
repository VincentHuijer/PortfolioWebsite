import React from 'react';
import FrontPageTheaterLaak from '../../../media/TheaterLaak/FrontPageTheaterLaak.png';
import KaartjesBestellenTheaterLaakKlein from '../../../media/TheaterLaak/KaartjesBestellenTheaterLaakKlein.png';
import CypressLogo from '../../../media/Logos/CypressLogo.jpeg';
import GenericArticle from '../../../components/GenericArticle';


const Homepage = () => {
  return (
    <div className="">
      <div className="bg-[#f4f4f4] p-3 flex items-center justify-center mb-7">
        <div className="text-black text-2xl font-serif">Theater Laak</div>
      </div>
      <div>
        <div className='flex justify-center'>
          <div className='w-8/12 ml-36'>
            <div>
              <img src={FrontPageTheaterLaak} alt="Vincent Huijer" className="w-3/4" />
            </div>
            <div className="pl-64 text-sm mb-5">Theater laak frontpage</div>

            <GenericArticle
              imageSrc={KaartjesBestellenTheaterLaakKlein}
              title="Bestellen van tickets"
              text="voor het bestellen van tickets kan je bij een voorstelling van een show op een datum stoelen selecteren als deze beschikbaar zijn. De prijzen zijn afhankelijk van de rang en van de voorstelling. Bij het selecteren en toevoegen van een stoel aan de winkelmand zal bij andere gebruikers de stoel onbeschikbaar gesteld worden voor maximaal 1 uur, zodat er geen dubbele boekingen kunnen plaatsvinden. Bij aankoop worden de tickets aan de gebruiker gekoppeld en kan vanaf het 'mijn tickets' scherm de tickets met een QR code worden gedownload."
            />

            <GenericArticle
              imageSrc={CypressLogo}
              title="Cypress tests"
              text="We coveren de mogelijkheden van een klant door het testen van het registreren, inloggen en een stoel te reserveren en die van een medewerker door een voorstelling aan een show toe te voegen, de show te zoeken en de gekozen show te verwijderen met automatische Cypress tests."
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
