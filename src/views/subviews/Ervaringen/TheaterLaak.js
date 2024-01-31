import React from 'react';
import FrontPageTheaterLaak from '../../../media/TheaterLaak/FrontPageTheaterLaak.png';
import TheaterLaakRegistreren from '../../../media/TheaterLaak/TheaterLaakRegistreren.png';
import TheaterLaakKaartjesBestellenKlein from '../../../media/TheaterLaak/TheaterLaakKaartjesBestellenKlein.png';
import CypressLogo from '../../../media/Logos/CypressLogo.jpeg';
import NetlifyLogo from '../../../media/Logos/NetlifyLogo.png';
import GenericArticle from '../../../components/GenericArticle';
import Sidebar from '../../../components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 

const Homepage = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-2xl font-serif mb-5 bg-[#f4f4f4] p-3"> 
        <a href="https://github.com/VincentHuijer/WDPR" className="text-2xl font-serif text-black hover:underline"> <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Theater Laak</a>
      </div>


      <div>
        <div className='flex flex-col justify-center md:flex-row'>
          <div className='w-3/4 mx-12 md:w-5/12 md:ml-48 md:mr-24'>
            <div>
              <img src={FrontPageTheaterLaak} alt="FrontPageTheaterLaak" className="" />
            </div>
            <div className="ml-12 md-ml-64 text-sm mb-5 mr-5">Theater laak frontpage</div>

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
            <Sidebar/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;