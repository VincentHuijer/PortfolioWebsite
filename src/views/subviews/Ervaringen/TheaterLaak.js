import React from 'react';
import FrontPageTheaterLaak from '../../../media/TheaterLaak/FrontPageTheaterLaak.png';
import TheaterLaakInloggen from '../../../media/TheaterLaak/TheaterLaakInloggen.png';
import TheaterLaakRegistreren from '../../../media/TheaterLaak/TheaterLaakRegistreren.png';
import TheaterLaakWinkelmand from '../../../media/TheaterLaak/TheaterLaakWinkelmand.png';
import TheaterLaakKaartjesBestellen from '../../../media/TheaterLaak/TheaterLaakKaartjesBestellen.jpg';
import TheaterLaakKaartjesBestellenKlein from '../../../media/TheaterLaak/TheaterLaakKaartjesBestellenKlein.png';
import CypressLogo from '../../../media/Logos/CypressLogo.jpeg';
import NetlifyLogo from '../../../media/Logos/NetlifyLogo.png';
import GenericArticle from '../../../components/GenericArticle';
import { Carousel, IconButton  } from "@material-tailwind/react";


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
              <img src={FrontPageTheaterLaak} alt="FrontPageTheaterLaak" className="w-3/4" />
            </div>
            <div className="pl-64 text-sm mb-5 mr-5">Theater laak frontpage</div>

            <div className="font-sans mb-20">
              Theater Laak is een fictief bedrijf dat behoefte heeft aan een nieuwe website voor het theater. In het kader van deze opdracht ben ik samen met een groep medestudenten aan de slag gegaan om deze website te ontwikkelen. Tijdens het project moesten we creatieve oplossingen bedenken voor het omzetten van specifieke gegevens in code en het effectief verdelen van verantwoordelijkheden. Het lijkt misschien eenvoudig om een reservering te maken voor een voorstelling, maar hierbij moeten we rekening houden met het feit dat je eigenlijk een stoel koopt voor een bepaalde zaal en voor een specifieke show van een voorstelling. Bovendien moeten alle beschikbare shows overzichtelijk worden weergegeven in een kalender voor gebruikers. Klanten moeten in staat zijn om stoelen in een zaal te bestellen aan de hand van een specifieke opstelling.
            </div>

            
            <GenericArticle
             imageSrc={TheaterLaakRegistreren}
             title="Authenticatie"
             text="We hebben ons ook beziggehouden met de authenticatie door de mogelijkheid van tweestapsverificatie (2FA) toe te passen. We hebben minimale eisen gesteld aan gebruikersgegevens om de veiligheid te waarborgen, en we hebben maatregelen genomen om ongewenste scripts te voorkomen. Bovendien hebben we cookies geïmplementeerd, zodat gebruikers bij het verlaten van de website nog steeds ingelogd blijven bij hun volgende bezoek. Dit draagt bij aan een naadloze en veilige gebruikerservaring."
            />


            <GenericArticle
             imageSrc={TheaterLaakKaartjesBestellenKlein}
             title="Reserveren"
             text="Ons reserveringssysteem bevat een krachtige Reserverings API met limieten voor het aantal reserveringen. Websockets zorgen voor real-time updates. Een intelligent systeem biedt voorstellingen op basis van aankoopgeschiedenis. Aankoopgeschiedenis en tickets zijn ontworpen voor overzicht en esthetiek. Overweging wordt gegeven aan het integreren van bestellingsoverzichten in de reserverings API. De frontend is naadloos verbonden met de backend via API-requests, inclusief QR-codegeneratie op tickets voor toegangscontrole. Gebruikers kunnen al hun aankopen overzichtelijk bekijken via een menu."
            />

            <GenericArticle
              imageSrc={CypressLogo}
              title="Cypress tests"
              text="Nemen we de verschillende mogelijkheden onder de loep die een klant kan invullen tijdens het registratieproces in de automatische tests. We testen zowel het correct invullen van het registratieformulier als situaties waarin de klant fouten maakt. We controleren bijvoorbeeld op de juistheid van de ingevoerde voor- en achternaam, waarbij we kijken of er geen numerieke tekens aanwezig zijn en of elke naam meer dan één teken heeft. Verder verifiëren we of het ingevoerde e-mailadres geldig is en geen wegwerp-e-mail is. Ook controleren we of de ingevoerde wachtwoorden overeenkomen. Het registratieformulier voert al enkele controles uit op het e-mailadres, zoals de aanwezigheid van karakters voor en na de '@'. Wat betreft voorstellingen, beginnen we met het toevoegen van een gloednieuwe voorstelling als medewerker, inclusief een naam, beschrijving en afbeelding. Daarna voegen we een show toe waarbij de gebruiker een datum en zaalnummer kan opgeven. Omdat medewerkers geen tickets kunnen kopen, testen we vervolgens vanuit een klantaccount het zoeken naar de test dummy voorstelling in de lijst van voorstellingen en het reserveren van een stoel voor de show. We voeren opnieuw tests uit als medewerker om de voorstelling te verwijderen, wat resulteert in het verwijderen van alle shows."
            />

            <GenericArticle
              imageSrc={NetlifyLogo}
              title="CI/CD"
              text="We hebben onze website gedeployed op Netlify, dit is een gratis service die automatisch je website update op het moment dat je naar github pusht. Een mooi deel hiervan is dat er ook nog onderscheid wordt gemaakt tussen de branches. Zo hadden we een development branch waarbij de Netlify link “development–theater-laak.netlify.app” was, maar voor main is het “theater-laak.netlify.app”. Voor de backend hebben we gekozen om te deployen op Azure, elke keer als we wijzigingen doorvoeren doen we een deploy om de API te updaten. Ook de database werd continu geupdate, dit hebben we code first gedaan met behulp van Entity Framework. We hebben (na goedkeuring van onze begeleider) gekozen voor een online database van Supabase. Dit heeft een heel gebruiksvriendelijke interface, was makkelijk te verbinden en bied ruim genoeg opslag voor wat we hebben gemaakt."
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
